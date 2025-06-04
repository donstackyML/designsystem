import { ShiftType } from '../me-shift-settings';

export interface ShiftTypeProps {
  id: ShiftType;
  text?: string;
  [name: string]: string | undefined;
}
