// import { DOCUMENT, DatePipe } from '@angular/common';
// import {
//   AfterViewInit,
//   ChangeDetectionStrategy,
//   Component,
//   ElementRef,
//   HostBinding,
//   Inject,
//   Input,
//   OnChanges,
//   OnDestroy,
//   OnInit,
//   Renderer2,
//   ViewChild,
// } from '@angular/core';

// import {
//   HighlightConfig,
//   HighlightStyle,
//   createHighlightRangesFromDateParts,
//   createHighlightRangesFromPattern,
//   getCssPropertiesFromStyle,
// } from './me-time-range-result.types';

// @Component({
//   selector: 'me-time-range-result',
//   standalone: true,
//   imports: [DatePipe],
//   templateUrl: './me-time-range-result.component.html',
//   styleUrls: ['./me-time-range-result.component.scss'],

//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class MeTimeRangeResultComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
//   // Reset static counter when application is reloaded
//   static {
//     if (typeof window !== 'undefined') {
//       if (!window.hasOwnProperty('__timeRangeResultReset')) {
//         MeTimeRangeResultComponent.instanceCounter = 0;
//         (window as any).__timeRangeResultReset = true;
//       }
//     }
//   }

//   // Static counter for component instances
//   private static instanceCounter = 0;

//   private uniqueId = `time-range-highlight-${++MeTimeRangeResultComponent.instanceCounter}`;

//   private highlight: any = null;

//   private styleElement: HTMLStyleElement | null = null;

//   private isHighlightApiSupported = false;

//   private highlightClassElements: Array<HTMLElement> = [];

//   @Input() timeFormat = 'dd.MM.yyyy HH:mm:ss';

//   @Input({ required: true }) startDate?: string | Date;

//   @Input({ required: true }) endDate?: string | Date;

//   @Input() startText = 'Начало';

//   @Input() endText = 'Конец';

//   @ViewChild('startTimeResult') startTimeElementRef!: ElementRef<HTMLDivElement>;

//   @ViewChild('endTimeResult') endTimeElementRef!: ElementRef<HTMLDivElement>;

//   @Input() highlightCssColor = 'var(--Text-Link)';

//   @Input() startHighlight?: HighlightConfig;

//   @Input() endHighlight?: HighlightConfig;

//   constructor(
//     private renderer: Renderer2,
//     private elementRef: ElementRef,
//     @Inject(DOCUMENT) private document: Document,
//   ) { }

//   ngOnInit(): void {
//     // Check if CSS Highlight API is supported
//     // @ts-ignore - CSS.highlights might not exist in older browsers
//     this.isHighlightApiSupported = typeof CSS !== 'undefined' && CSS.highlights;
//     this.initializeHighlightConfigs();
//     console.log(`TimeRangeResult component initialized with ID: ${this.uniqueId}`);
//   }

//   ngOnChanges(): void {
//     this.initializeHighlightConfigs();
//     this.updateHighlight();
//   }

//   ngAfterViewInit(): void {
//     this.addHighlightStyles();
//     this.updateHighlight();
//   }

//   ngOnDestroy(): void {
//     this.clearHighlight();
//     this.removeHighlightStyles();
//     this.removeHighlightClassElements();
//     // Note: We intentionally don't decrement the counter to maintain unique IDs
//   }

//   // Expose the instance index for external reference
//   get instanceIndex(): number {
//     return MeTimeRangeResultComponent.instanceCounter;
//   }

//   // Get the highlight ID for external CSS operations
//   public getHighlightId(): string {
//     return this.uniqueId;
//   }

//   @HostBinding('attr.data-highlight-id')
//   get highlightAttr(): string {
//     return this.uniqueId;
//   }

//   @HostBinding('attr.data-highlight-index')
//   get highlightIndexAttr(): string {
//     return `${MeTimeRangeResultComponent.instanceCounter}`;
//   }

//   updateHighlight(): void {
//     {
//       console.log('Update highlight - startHighlight:', this.startHighlight);
//       console.log('Update highlight - endHighlight:', this.endHighlight);

//       // Clear previous highlighting
//       this.clearHighlight();

//       // Get ranges for start and end dates
//       const startRanges = this.getHighlightRanges(
//         this.startTimeElementRef,
//         this.startHighlight,
//         this.startDate,
//       );

//       const endRanges = this.getHighlightRanges(
//         this.endTimeElementRef,
//         this.endHighlight,
//         this.endDate,
//       );

//       console.log('Highlight ranges - start:', startRanges.length, 'end:', endRanges.length);

//       if (this.isHighlightApiSupported) {
//         //
//         if (startRanges.length > 0 || endRanges.length > 0) {
//           if (this.startHighlight?.style !== this.endHighlight?.style) {
//             if (startRanges.length > 0) {
//               // @ts-ignore
//               const startHighlight = new Highlight(...startRanges);
//               // @ts-ignore
//               CSS.highlights.set(`${this.uniqueId}-start`, startHighlight);
//             }

//             if (endRanges.length > 0) {
//               // @ts-ignore
//               const endHighlight = new Highlight(...endRanges);
//               // @ts-ignore
//               CSS.highlights.set(`${this.uniqueId}-end`, endHighlight);
//             }
//           } else {
//             // If styles are the same, use one highlight
//             // @ts-ignore
//             this.highlight = new Highlight(...startRanges, ...endRanges);
//             // @ts-ignore
//             CSS.highlights.set(this.uniqueId, this.highlight);
//           }
//         }
//       } else {
//         //
//         this.applyFallbackHighlighting(
//           this.startTimeElementRef,
//           startRanges,
//           `${this.uniqueId}-start-highlight`,
//           this.startHighlight?.style,
//         );

//         this.applyFallbackHighlighting(
//           this.endTimeElementRef,
//           endRanges,
//           `${this.uniqueId}-end-highlight`,
//           this.endHighlight?.style,
//         );
//       }
//     }
//   }

//   //
//   private initializeHighlightConfigs(): void { }

//   private addHighlightStyles(): void {
//     this.removeHighlightStyles();

//     this.styleElement = this.renderer.createElement('style');
//     if (this.styleElement) {
//       this.styleElement.id = `highlight-style-${this.uniqueId}`;
//     }

//     let startStyles = '';
//     let endStyles = '';

//     if (this.startHighlight?.style) {
//       const styleWithDefaultColor: HighlightStyle = { ...this.startHighlight.style };

//       if (!styleWithDefaultColor.color) {
//         styleWithDefaultColor.color = this.highlightCssColor;
//       }

//       startStyles = getCssPropertiesFromStyle(styleWithDefaultColor);
//     } else if (this.startHighlight) {
//       startStyles = `color: ${this.highlightCssColor};`;
//     } else {
//       startStyles = '';
//     }

//     if (this.endHighlight?.style) {
//       const styleWithDefaultColor: HighlightStyle = { ...this.endHighlight.style };

//       if (!styleWithDefaultColor.color) {
//         styleWithDefaultColor.color = this.highlightCssColor;
//       }
//       endStyles = getCssPropertiesFromStyle(styleWithDefaultColor);
//     } else if (this.endHighlight) {
//       endStyles = `color: ${this.highlightCssColor};`;
//     } else {
//       endStyles = '';
//     }

//     let cssText = '';

//     //
//     if (this.isHighlightApiSupported) {
//       cssText =
//         startStyles === endStyles
//           ? `::highlight(${this.uniqueId}) { ${startStyles} }`
//           : `::highlight(${this.uniqueId}-start) { ${startStyles} }
//          ::highlight(${this.uniqueId}-end) { ${endStyles} }`;
//     } else {
//       cssText = `.${this.uniqueId}-highlight { ${startStyles} }
//                  .${this.uniqueId}-start-highlight { ${startStyles} }
//                  .${this.uniqueId}-end-highlight { ${endStyles} }`;
//     }

//     this.renderer.appendChild(this.styleElement, this.renderer.createText(cssText));

//     const head = this.document.getElementsByTagName('head')[0];
//     this.renderer.appendChild(head, this.styleElement);
//   }

//   private updateHighlightStyles(): void {
//     if (this.styleElement) {
//       this.removeHighlightStyles();
//       this.addHighlightStyles();
//     }
//   }

//   private removeHighlightClassElements(): void {
//     this.highlightClassElements.forEach((element) => {
//       if (element.parentNode) {
//         this.renderer.removeChild(element.parentNode, element);
//       }
//     });
//     this.highlightClassElements = [];
//   }

//   private removeHighlightStyles(): void {
//     if (this.styleElement) {
//       const head = this.document.getElementsByTagName('head')[0];
//       if (head.contains(this.styleElement)) {
//         this.renderer.removeChild(head, this.styleElement);
//       } else if (this.elementRef.nativeElement.contains(this.styleElement)) {
//         this.renderer.removeChild(this.elementRef.nativeElement, this.styleElement);
//       }
//       this.styleElement = null;
//     } else {
//       const existingStyle = this.document.getElementById(`highlight-style-${this.uniqueId}`);
//       if (existingStyle && existingStyle.parentNode) {
//         this.renderer.removeChild(existingStyle.parentNode, existingStyle);
//       }
//     }
//   }

//   private clearHighlight(): void {
//     if (this.isHighlightApiSupported) {
//       try {
//         // @ts-ignore
//         if (this.highlight) {
//           // Удаляем только своё выделение
//           // @ts-ignore
//           CSS.highlights.delete(this.uniqueId);
//           // @ts-ignore
//           CSS.highlights.delete(`${this.uniqueId}-start`);
//           // @ts-ignore
//           CSS.highlights.delete(`${this.uniqueId}-end`);
//           this.highlight = null;
//         }
//       } catch (e) {
//         console.error(`Error clearing highlight for ${this.uniqueId}:`, e);
//       }
//     } else {
//       // Clean up class-based highlighting
//       this.removeHighlightClassElements();
//     }
//   }

//   private applyFallbackHighlighting(
//     elementRef: ElementRef<HTMLDivElement> | undefined,
//     ranges: Array<Range>,
//     className: string,
//     style?: HighlightStyle,
//   ): void {
//     if (!elementRef?.nativeElement || ranges.length === 0) {
//       return;
//     }

//     const textNode = elementRef.nativeElement.firstChild as Text;
//     if (!textNode) return;

//     const fullText = textNode.nodeValue || '';
//     const parentElement = elementRef.nativeElement;

//     textNode.nodeValue = '';

//     let lastIndex = 0;

//     const sortedRanges = [...ranges].sort((a, b) => a.startOffset - b.startOffset);

//     for (const range of sortedRanges) {
//       const startIndex = range.startOffset;
//       const endIndex = range.endOffset;

//       if (startIndex > lastIndex) {
//         const beforeText = fullText.substring(lastIndex, startIndex);
//         const beforeTextNode = this.document.createTextNode(beforeText);
//         this.renderer.appendChild(parentElement, beforeTextNode);
//       }

//       const highlightedText = fullText.substring(startIndex, endIndex);
//       const highlightSpan = this.renderer.createElement('span');
//       this.renderer.addClass(highlightSpan, className);

//       if (style) {
//         if (style.color) {
//           this.renderer.setStyle(highlightSpan, 'color', style.color);
//         }
//         if (style.backgroundColor) {
//           this.renderer.setStyle(highlightSpan, 'background-color', style.backgroundColor);
//         }
//         if (style.textDecoration) {
//           this.renderer.setStyle(highlightSpan, 'text-decoration', style.textDecoration);
//         }
//       }

//       const highlightTextNode = this.document.createTextNode(highlightedText);
//       this.renderer.appendChild(highlightSpan, highlightTextNode);
//       this.renderer.appendChild(parentElement, highlightSpan);

//       this.highlightClassElements.push(highlightSpan);

//       lastIndex = endIndex;
//     }

//     if (lastIndex < fullText.length) {
//       const afterText = fullText.substring(lastIndex);
//       const afterTextNode = this.document.createTextNode(afterText);
//       this.renderer.appendChild(parentElement, afterTextNode);
//     }
//   }

//   private getHighlightRanges(
//     elementRef: ElementRef<HTMLDivElement> | undefined,
//     config?: HighlightConfig,
//     date?: string | Date,
//   ): Array<Range> {
//     if (!elementRef?.nativeElement?.firstChild) {
//       console.warn('getHighlightRanges: elementRef or firstChild is null');
//       return [];
//     }

//     if (!config) {
//       console.warn('getHighlightRanges: config is null');
//       return [];
//     }

//     const textNode = elementRef.nativeElement.firstChild as Text;
//     const text = textNode.nodeValue || '';
//     console.log('getHighlightRanges - text:', text, 'mode:', config.mode);

//     switch (config.mode) {
//       case 'date-parts':
//         return createHighlightRangesFromDateParts(elementRef, config.dateParts);

//       case 'ranges':
//         return (config?.ranges || []).map((range) => {
//           const r = document.createRange();
//           r.setStart(textNode, range.start);
//           r.setEnd(textNode, range.end);
//           return r;
//         });

//       case 'pattern':
//         return this.createHighlightRangesFromPattern(textNode, text, config.pattern);

//       case 'custom':
//         if (config?.customHighlight) {
//           try {
//             console.log('Custom highlight mode - input text:', JSON.stringify(text));
//             const ranges = config.customHighlight(text, date || '', this.timeFormat);
//             console.log('Custom highlight ranges:', JSON.stringify(ranges));

//             if (!Array.isArray(ranges)) {
//               console.error('Custom highlight function did not return an array:', ranges);
//               return [];
//             }

//             // Validate each range
//             const validRanges = ranges
//               .map((range) => {
//                 if (!range || typeof range.start !== 'number' || typeof range.end !== 'number') {
//                   console.warn('Invalid range object:', range);
//                   return null;
//                 }

//                 if (range.start >= 0 && range.end <= text.length && range.start < range.end) {
//                   const highlightedText = text.substring(range.start, range.end);
//                   console.log(
//                     `Valid range: [${range.start}, ${range.end}] Text: "${highlightedText}"`,
//                   );

//                   try {
//                     const r = document.createRange();
//                     r.setStart(textNode, range.start);
//                     r.setEnd(textNode, range.end);
//                     return r;
//                   } catch (e) {
//                     console.error('Error creating range:', e);
//                     return null;
//                   }
//                 }
//                 console.warn(
//                   `Invalid range: [${range.start}, ${range.end}] Text length: ${text.length}`,
//                 );
//                 return null;
//               })
//               .filter(Boolean) as Array<Range>;

//             console.log('Valid ranges count:', validRanges.length);
//             return validRanges;
//           } catch (err) {
//             console.error('Error in custom highlight function:', err);
//             return [];
//           }
//         }
//         console.warn('No customHighlight function provided');
//         return [];

//       default:
//         return [];
//     }
//   }

//   private createHighlightRangesFromPattern(
//     textNode: Text,
//     text: string,
//     pattern?: RegExp | string,
//   ): Array<Range> {
//     return createHighlightRangesFromPattern(textNode, text, pattern);
//   }
// }
