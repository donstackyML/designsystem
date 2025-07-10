import {
  DxAutocompleteComponent,
  DxCheckBoxComponent,
  DxDateBoxComponent,
  DxDateRangeBoxComponent,
  DxNumberBoxComponent,
  DxPopoverComponent,
  DxPopupComponent,
  DxRadioGroupComponent,
  DxSelectBoxComponent,
  DxSwitchComponent,
  DxTagBoxComponent,
  DxTextAreaComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';
import { dxButtonGroupItem } from 'devextreme/ui/button_group';

export type MeCommonType = {
  [key: string]: string;
};
export type MeSize = 'small' | 'medium' | 'large';
export type MeButtonType =
  | 'default'
  | 'normal'
  | 'success'
  | 'warning'
  | 'danger';
export type MeButtonStyle = 'contained' | 'outlined' | 'text';
export type MeFieldStyle = 'outlined' | 'underlined' | 'filled';
export type MeLabelDirection = 'column' | 'row';
export type MeLabelMode = 'static' | 'floating';
export type MeScrollbarShowType = 'always' | 'onHover';
export type MeEditorComponents =
  | DxAutocompleteComponent
  | DxCheckBoxComponent
  | DxDateBoxComponent
  | DxDateRangeBoxComponent
  | DxNumberBoxComponent
  | DxRadioGroupComponent
  | DxSelectBoxComponent
  | DxSwitchComponent
  | DxTagBoxComponent
  | DxTextAreaComponent
  | DxTextBoxComponent;
export type MeTextEditorComponents = DxTextBoxComponent | DxSelectBoxComponent;
export type MeOverlayComponents = DxPopoverComponent | DxPopupComponent;
export type MePosition = 'left' | 'right';
export interface MeTextBoxComponent {
  size: MeSize;
}
export interface MeButtonGroupItem extends Partial<dxButtonGroupItem> {
  meType?: MeButtonType;
  leftIcon?: string;
  leftIconColor?: string;
  iconColor?: string;
  leftIconSize?: string;
  iconSize?: string;
  icon?: string;
  rightIcon?: string;
  rightIconColor?: string;
  rightIconSize?: string;
  warningType?: boolean;
}

export interface ListData {
  text: string;
  count: number;
  icon: string;
  icon2: string;
}

export interface TreeViewData {
  text: string;
  count: number;
  icon: string;
  icon2: string;
}

export type MeOrientation = 'horizontal' | 'vertical';

export const KEYBOARD_FOCUSABLE_CLASS = 'me-keyboard-focused';

export type FocusInEventHandle = (evt: FocusEvent) => void;

export type FocusOutEventHandle = (evt: FocusEvent) => void;

export type KeyUpEventHandle = (evt: KeyboardEvent) => void;

export { BreadcrumbItem } from '../components/me-breadcrumbs/me-breadcrumbs.component';
