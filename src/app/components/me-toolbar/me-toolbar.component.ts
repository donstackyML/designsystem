import { Component } from '@angular/core';

export interface FontSize {
  size: number;
  text: string;
}

export interface LineHeight {
  lineHeight: number;
  text: string;
}

export interface FontFamily {
  text: string;
}

export interface FontStyle {
  icon: string;
  hint: string;
}

export interface TextAlign {
  icon: string;
  alignment: string;
  hint: string;
}

export interface TextAlignExtended extends TextAlign {
  text: string;
}

export interface ListType {
  icon: string;
  alignment: string;
  hint: string;
}

export interface Heading {
  text: string;
}

const fontSizes: FontSize[] = [
  { size: 10, text: '10px' },
  { size: 12, text: '12px' },
  { size: 14, text: '14px' },
  { size: 16, text: '16px' },
  { size: 18, text: '18px' },
];

const lineHeights: LineHeight[] = [
  { lineHeight: 1, text: '1' },
  { lineHeight: 1.35, text: '1.35' },
  { lineHeight: 1.5, text: '1.5' },
  { lineHeight: 2, text: '2' },
];

const fontFamilies: FontFamily[] = [
  { text: 'Arial' },
  { text: 'Courier New' },
  { text: 'Georgia' },
  { text: 'Impact' },
  { text: 'Lucida Console' },
  { text: 'Tahoma' },
  { text: 'Times New Roman' },
];

const fontStyles: FontStyle[] = [
  {
    icon: 'format_bold',
    hint: 'Bold',
  },
  {
    icon: 'format_italic',
    hint: 'Italic',
  },
  {
    icon: 'format_underlined',
    hint: 'Underlined',
  },
  {
    icon: 'strikethrough_s',
    hint: 'Strikethrough',
  },
];

const textAlignsExtended: TextAlignExtended[] = [
  {
    icon: 'format_align_left',
    alignment: 'left',
    hint: 'Align Left',
    text: 'Align left',
  },
  {
    icon: 'format_align_center',
    alignment: 'center',
    hint: 'Center',
    text: 'Center',
  },
  {
    icon: 'format_align_right',
    alignment: 'right',
    hint: 'Align Right',
    text: 'Align right',
  },
  {
    icon: 'format_align_justify',
    alignment: 'justify',
    hint: 'Justify',
    text: 'Justify',
  },
];

const listTypes: ListType[] = [
  {
    icon: 'format_list_numbered',
    alignment: 'orderedlist',
    hint: 'Ordered',
  },
  {
    icon: 'format_list_bulleted',
    alignment: 'bulletlist',
    hint: 'Bullet',
  },
];

const headings: Heading[] = [
  { text: 'Normal text' },
  { text: 'Heading 1' },
  { text: 'Heading 2' },
  { text: 'Heading 3' },
  { text: 'Heading 4' },
  { text: 'Heading 5' },
];

@Component({
  selector: 'me-toolbar',
  templateUrl: './me-toolbar.component.html',
  styleUrls: ['./me-toolbar.component.css'],
})
export class MeToolbarComponent {
  fontSizes = fontSizes;
  lineHeights = lineHeights;
  lineHeight = this.lineHeights[1].lineHeight;
  fontFamilies = fontFamilies;
  fontStyles = fontStyles;
  textAlignItems = this.getTextAlign();
  textAlignItemsExtended = textAlignsExtended;
  selectedTextAlign = [this.textAlignItems[0].alignment];
  listTypes = listTypes;
  headings = headings;
  heading = this.headings[0].text;

  textBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true,
  };

  searchButtonOptions = {
    icon: 'search',
    onClick() {},
  };

  constructor() {}

  getTextAlign(): TextAlign[] {
    return textAlignsExtended.map(({ icon, alignment, hint }) => ({
      icon,
      alignment,
      hint,
    }));
  }
}
