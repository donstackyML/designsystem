import { QuickFilter } from './me-quick-filters.model';

export const defaultQuickFilters: Array<QuickFilter> = [
  { id: 'last_30m', text: '30 мин' },
  { id: 'last_1h', text: '1 час' },
  { id: 'last_3h', text: '3 часа' },
  { id: 'last_6h', text: '6 часов' },
];
export const defaultOffQuickFilter: QuickFilter = { id: 'off', text: 'Выкл' };
