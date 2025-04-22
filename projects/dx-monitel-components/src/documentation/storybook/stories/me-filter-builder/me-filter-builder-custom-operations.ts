export const anyOfOperation = {
  name: 'anyof',
  caption: 'Is any of',
  icon: 'check',
  editorTemplate: 'tagBoxTemplate',
  calculateFilterExpression: (
    filterValue: string[],
    field: Record<string, unknown>
  ) =>
    filterValue
      ?.flatMap((value) => [[field['dataField'], '=', value], 'or'])
      .slice(0, -1),
} as const;

export const isNoneOfOperation = {
  name: 'noneof',
  caption: 'Is none of',
  icon: 'close',
  editorTemplate: 'tagBoxTemplate',
  calculateFilterExpression: (
    filterValue: string[],
    field: Record<string, unknown>
  ) =>
    filterValue
      ?.flatMap((value) => [[field['dataField'], '<>', value], 'and'])
      .slice(0, -1),
} as const;
