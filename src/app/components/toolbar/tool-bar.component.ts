import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {
  FontFamily,
  FontSize,
  FontStyle,
  Heading,
  LineHeight,
  ListType,
  ToolbarService,
  TextAlign,
  TextAlignExtended,
} from 'src/app/service/toolbar.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent {
  fontSizes: FontSize[] = this.service.getFontSizes();

  lineHeights: LineHeight[] = this.service.getLineHeights();

  lineHeight: number = this.lineHeights[1].lineHeight;

  fontFamilies: FontFamily[] = this.service.getFontFamilies();

  headings: Heading[] = this.service.getHeadings();

  heading = this.headings[0].text;

  fontStyles: FontStyle[] = this.service.getFontStyles();

  textAlignItems: TextAlign[] = this.service.getTextAlign();

  textAlignItemsExtended: TextAlignExtended[] =
    this.service.getTextAlignExtended();

  selectedTextAlign = [this.textAlignItems[0].alignment];

  listTypes: ListType[] = this.service.getListType();

  constructor(private service: ToolbarService) {}

  onTextAlignChanged(e: { itemData: { hint: string } }): void {
    this.onButtonClick(e.itemData.hint);
  }

  onButtonClick(name: string) {
    notify(`The "${name}" button has been clicked`);
  }

  onSelectionChanged(name: string) {
    notify(`The "${name}" value has been changed`);
  }

  onFontFamilyClick() {
    notify('The "Font Family" value has been changed');
  }

  onHeadingClick() {
    notify('The "Heading" value has been changed');
  }
}
