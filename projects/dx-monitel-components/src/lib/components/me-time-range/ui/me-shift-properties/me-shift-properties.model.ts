export interface TimeShiftProperty {
  text: string;
  key: string;
  enabled: boolean;
  value: number;
}

export interface MinimalTimeShiftProperty {
  value: number;
  selectedUnit: string;
  displayExpr?: string;
  valueExpr?: string;
  units?: Array<{
    text?: string;
    value: string;
  }>;
  [key: string]: any;
}
