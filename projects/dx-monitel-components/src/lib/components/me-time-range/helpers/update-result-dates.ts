import { applyShift } from './apply-shift';
import { getHighlightInfo } from './get-highlight-info';
import { parseDateInput } from './parse-date-input';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../ui/me-shift-properties';

export const calculateTimeRangeResultDates = ({
  absoluteDate,
  startShiftProperties,
  startShiftRelativeModeIsActive,
  endDate,
  endShiftProperties,
  endShiftRelativeModeIsActive,
}: {
  absoluteDate?: Date | string;
  startShiftProperties?:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null;
  startShiftRelativeModeIsActive?: boolean;
  endDate?: Date | string;
  endShiftProperties?:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null;
  endShiftRelativeModeIsActive?: boolean;
}) => {
  const baseStartDate = startShiftRelativeModeIsActive
    ? new Date()
    : parseDateInput(absoluteDate);

  const resultStartDate = applyShift(
    baseStartDate,
    startShiftProperties
  ) as Date;

  const resultStartHighlightInfo = getHighlightInfo(
    baseStartDate,
    resultStartDate,
    startShiftProperties
  );

  const baseEndDate = endShiftRelativeModeIsActive
    ? new Date()
    : parseDateInput(endDate);

  const resultEndDate = applyShift(baseEndDate, endShiftProperties) as Date;
  const resultEndHighlightInfo = getHighlightInfo(
    baseEndDate,
    resultEndDate,
    endShiftProperties
  );

  return {
    resultStartDate,
    resultStartHighlightInfo,
    resultEndDate,
    resultEndHighlightInfo,
  };
};
