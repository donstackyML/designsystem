import { ElementRef } from '@angular/core';

import { DateHighlightInfo } from '../model/types';

export const createHighlightRanges = (
  elementRef: ElementRef<HTMLDivElement> | undefined,
  highlightInfo?: DateHighlightInfo,
): Array<Range> => {
  if (
    !elementRef?.nativeElement?.firstChild ||
    !(elementRef.nativeElement.firstChild instanceof Text)
  ) {
    return [];
  }

  if (!highlightInfo) return [];

  const textNode = elementRef.nativeElement.firstChild as Text;
  const textContent = textNode.nodeValue || '';
  const ranges: Array<Range> = [];

  const regex = /(\d{2})(\.)(\d{2})(\.)(\d{4})(\s)(\d{2})(:)(\d{2})(:)(\d{2})/;
  const match = textContent.match(regex);

  if (!match) {
    return [];
  }

  const matchStartIndex = match.index || 0;

  const getGroupPosition = (groupIndex: number): { start: number; length: number } | null => {
    if (!match || !match[groupIndex]) return null;
    let startIndex = matchStartIndex;
    for (let i = 1; i < groupIndex; i++) {
      if (!match[i]) return null;
      startIndex += match[i].length;
    }
    const length = match[groupIndex].length;
    return { start: startIndex, length };
  };

  const createRange = (start: number, length: number): Range | null => {
    if (start >= 0 && length > 0 && start + length <= textContent.length) {
      try {
        const range = document.createRange();
        range.setStart(textNode, start);
        range.setEnd(textNode, start + length);
        return range;
      } catch (e) {
        console.error(`Highlight: Error creating range`, e, { start, length, textContent });
        return null;
      }
    }
    return null;
  };

  const dateBlockChanged = highlightInfo.days && highlightInfo.months && highlightInfo.years;
  const timeBlockChanged = highlightInfo.hours && highlightInfo.minutes && highlightInfo.seconds;

  const pos = {
    day: getGroupPosition(1),
    month: getGroupPosition(3),
    year: getGroupPosition(5),
    hour: getGroupPosition(7),
    minute: getGroupPosition(9),
    second: getGroupPosition(11),
  };

  if (dateBlockChanged && pos.day && pos.year) {
    const start = pos.day.start;
    const end = pos.year.start + pos.year.length;
    const range = createRange(start, end - start);
    if (range) ranges.push(range);
  } else {
    if (highlightInfo.days && pos.day) {
      const range = createRange(pos.day.start, pos.day.length);
      if (range) ranges.push(range);
    }
    if (highlightInfo.months && pos.month) {
      const range = createRange(pos.month.start, pos.month.length);
      if (range) ranges.push(range);
    }
    if (highlightInfo.years && pos.year) {
      const range = createRange(pos.year.start, pos.year.length);
      if (range) ranges.push(range);
    }
  }

  if (timeBlockChanged && pos.hour && pos.second) {
    const start = pos.hour.start;
    const end = pos.second.start + pos.second.length;
    const range = createRange(start, end - start);
    if (range) ranges.push(range);
  } else {
    if (highlightInfo.hours && pos.hour) {
      const range = createRange(pos.hour.start, pos.hour.length);
      if (range) ranges.push(range);
    }
    if (highlightInfo.minutes && pos.minute) {
      const range = createRange(pos.minute.start, pos.minute.length);
      if (range) ranges.push(range);
    }
    if (highlightInfo.seconds && pos.second) {
      const range = createRange(pos.second.start, pos.second.length);
      if (range) ranges.push(range);
    }
  }

  return ranges;
};
