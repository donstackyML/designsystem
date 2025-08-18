import { applyShift } from './apply-shift';
import { getHighlightInfo } from './get-highlight-info';
import { parseOptionalDateInput } from './parse-date-input';
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
  absoluteDate?: Date | string | null;
  startShiftProperties?:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null;
  startShiftRelativeModeIsActive?: boolean;
  endDate?: Date | string | null;
  endShiftProperties?:
    | Array<TimeShiftProperty>
    | MinimalTimeShiftProperty
    | null;
  endShiftRelativeModeIsActive?: boolean;
}) => {
  const baseStartDate = startShiftRelativeModeIsActive
    ? new Date()
    : parseOptionalDateInput(absoluteDate) || new Date();

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
    : parseOptionalDateInput(endDate) || new Date();

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
