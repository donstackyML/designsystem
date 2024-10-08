import {
  DxCheckBoxComponent,
  DxPopoverComponent,
  DxPopupComponent,
  DxRadioGroupComponent,
  DxSelectBoxComponent,
  DxSwitchComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';
import { dxButtonGroupItem } from 'devextreme/ui/button_group';

export type MeCommonType = {
  [key: string]: string;
};
export type MeSize = 'small' | 'medium' | 'large';
export type MeButtonType = 'default' | 'normal' | 'success' | 'warning' | 'danger';
export type MeButtonStyle = 'contained' | 'outlined' | 'text';
export type MeFieldStyle = 'outlined' | 'underlined' | 'filled';
export type MeLabelDirection = 'column' | 'row';
export type MeLabelMode = 'static' | 'floating' | 'outside';
export type MeScrollbarShowType = 'always' | 'onHover';
export type MeEditorComponents =
  | DxTextBoxComponent
  | DxSelectBoxComponent
  | DxCheckBoxComponent
  | DxRadioGroupComponent
  | DxSwitchComponent;
export type MeTextEditorComponents = DxTextBoxComponent | DxSelectBoxComponent;
export type MeOverlayComponents = DxPopoverComponent | DxPopupComponent;
export type MePosition = 'left' | 'right';
export interface MeTextBoxComponent {
  size: MeSize;
}
export interface MeButtonGroupItem extends Partial<dxButtonGroupItem> {
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
export type MeOrientation = 'horizontal' | 'vertical';
