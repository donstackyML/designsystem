import {
  DxCheckBoxComponent,
  DxSelectBoxComponent,
  DxTextBoxComponent,
} from 'devextreme-angular';

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
export type MeLabelPosition = 'top' | 'left';
export type MeLabelMode = 'static' | 'floating';
export type MeScrollbarShowType = 'always' | 'onHover';
export type MeEditorComponents =
  | DxTextBoxComponent
  | DxSelectBoxComponent
  | DxCheckBoxComponent;
export type MeTextEditorComponents = DxTextBoxComponent | DxSelectBoxComponent;

export declare class MeTextBoxComponent {
  size: MeSize;
}
