import { ElementRef } from '@angular/core';

/**
 * Интерфейс для описания диапазона подсветки
 */
export interface HighlightRange {
  /** Начальная позиция подсветки (индекс символа) */
  start: number;
  /** Конечная позиция подсветки (индекс символа) */
  end: number;
}

/**
 * Режимы подсветки для компонента MeTimeRangeResultComponent
 */
export type HighlightMode =
  /** Подсветка частей даты (годы, месяцы, дни, часы, минуты, секунды) */
  | 'date-parts'
  /** Явное указание диапазонов для подсветки */
  | 'ranges'
  /** Подсветка по регулярному выражению */
  | 'pattern'
  /** Пользовательская логика подсветки с использованием колбэка */
  | 'custom';

/**
 * Информация о частях даты для подсветки
 */
export interface DateHighlightInfo {
  /** Подсвечивать годы */
  years?: boolean;
  /** Подсвечивать месяцы */
  months?: boolean;
  /** Подсвечивать дни */
  days?: boolean;
  /** Подсвечивать часы */
  hours?: boolean;
  /** Подсвечивать минуты */
  minutes?: boolean;
  /** Подсвечивать секунды */
  seconds?: boolean;
}

/**
 * Стили для подсветки
 * Поддерживаются только color, backgroundColor и textDecoration
 */
export interface HighlightStyle {
  /** Цвет текста */
  color?: string;
  /** Цвет фона */
  backgroundColor?: string;
  /** Декорация текста */
  textDecoration?: string;
}

/**
 * Конфигурация подсветки для компонента MeTimeRangeResultComponent
 */
export interface HighlightConfig {
  /** Режим подсветки */
  mode: HighlightMode;

  /** Для режима 'date-parts': информация о подсвечиваемых частях даты */
  dateParts?: DateHighlightInfo;

  /** Для режима 'ranges': явно указанные диапазоны подсветки */
  ranges?: Array<HighlightRange>;

  /** Для режима 'pattern': регулярное выражение для поиска подсвечиваемых частей */
  pattern?: RegExp | string;

  /** Для режима 'custom': пользовательская функция для определения диапазонов подсветки */
  customHighlight?: (
    text: string,
    date: Date | string,
    format: string
  ) => Array<HighlightRange>;

  /** Стили подсветки */
  style?: HighlightStyle;
}

/**
 * Создает диапазоны для подсветки на основе частей даты.
 * Используется как для CSS Highlight API, так и для fallback механизма.
 * @param elementRef Ссылка на элемент с текстом даты
 * @param highlightInfo Информация о подсвечиваемых частях даты
 * @returns Массив диапазонов для подсветки
 */
export function createHighlightRangesFromDateParts(
  elementRef: ElementRef<HTMLDivElement> | undefined,
  highlightInfo?: DateHighlightInfo
): Array<Range> {
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

  const getGroupPosition = (
    groupIndex: number
  ): { start: number; length: number } | null => {
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
        console.error(`Highlight: Error creating range`, e, {
          start,
          length,
          textContent,
        });
        return null;
      }
    }
    return null;
  };

  const dateBlockChanged =
    highlightInfo.days && highlightInfo.months && highlightInfo.years;
  const timeBlockChanged =
    highlightInfo.hours && highlightInfo.minutes && highlightInfo.seconds;

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
}

/**
 * Создает диапазоны для подсветки на основе регулярного выражения.
 * Используется как для CSS Highlight API, так и для fallback механизма.
 * @param textNode Текстовый узел, в котором нужно подсветить текст
 * @param text Текстовое содержимое узла
 * @param pattern Регулярное выражение или строка для поиска
 * @returns Массив диапазонов для подсветки
 */
export function createHighlightRangesFromPattern(
  textNode: Text,
  text: string,
  pattern?: RegExp | string
): Array<Range> {
  if (!pattern) return [];

  const regex =
    typeof pattern === 'string' ? new RegExp(pattern, 'g') : pattern;
  const ranges: Array<Range> = [];

  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index !== undefined) {
      const range = document.createRange();
      range.setStart(textNode, match.index);
      range.setEnd(textNode, match.index + match[0].length);
      ranges.push(range);

      // Если регулярное выражение не глобальное, выходим из цикла
      if (!regex.global) break;
    }
  }

  return ranges;
}

/**
 * Преобразует объект стилей в строку CSS-свойств.
 * Используется для создания CSS для ::highlight селектора и для fallback классов.
 * Поддерживает только color, backgroundColor и textDecoration.
 * @param style Объект стилей
 * @returns Строка с CSS-свойствами
 */
export function getCssPropertiesFromStyle(style: HighlightStyle): string {
  return Object.entries(style)
    .filter(
      ([key, value]) =>
        value !== undefined &&
        (key === 'color' ||
          key === 'backgroundColor' ||
          key === 'textDecoration')
    )
    .map(([key, value]) => {
      // Преобразуем camelCase в kebab-case для CSS
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssKey}: ${value};`;
    })
    .join(' ');
}
