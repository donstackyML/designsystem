import { ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  FocusInEventHandle,
  FocusOutEventHandle,
  KEYBOARD_FOCUSABLE_CLASS,
  KeyUpEventHandle,
} from '../types/types';

export class ComponentFocusService implements OnDestroy {
  private readonly container: any;
  private keydownSubs?: Subscription;
  private focusinSubs?: Subscription;
  private focusoutSubs?: Subscription;

  private focusInHandles: FocusInEventHandle[] = [];
  private focusOutHandles: FocusOutEventHandle[] = [];
  private keyUpEventHandles = new Map<string, KeyUpEventHandle[]>();

  keyboardNavigation = false;
  constructor(element: ElementRef, private renderer: Renderer2) {
    this.container = element.nativeElement;

    this.keydownSubs = fromEvent<KeyboardEvent>(
      this.container,
      'keyup'
    ).subscribe((event) => this.keyUpEventHandle(event));
    this.focusinSubs = fromEvent<FocusEvent>(
      this.container,
      'focusin'
    ).subscribe((event) => this.focusInEventHandle(event));
    this.focusoutSubs = fromEvent<FocusEvent>(
      this.container,
      'focusout'
    ).subscribe((event) => this.focusOutEventHandle(event));
  }

  addKeyUpEventHandle(key: string, handle: KeyUpEventHandle) {
    if (key != undefined) {
      if (!this.keyUpEventHandles.has(key)) {
        this.keyUpEventHandles.set(key, []);
      }
      if (handle != undefined) {
        this.keyUpEventHandles.get(key)!.push(handle);
      }
    }
  }
  addFocusInHandle(handle: FocusInEventHandle) {
    if (handle != undefined) {
      this.focusInHandles.push(handle);
    }
  }

  addFocusOutHandle(handle: FocusOutEventHandle) {
    if (handle != undefined) {
      this.focusOutHandles.push(handle);
    }
  }

  ngOnDestroy(): void {
    this.keydownSubs?.unsubscribe();
    this.focusinSubs?.unsubscribe();
    this.focusoutSubs?.unsubscribe();
    this.focusInHandles.length = 0;
    this.focusOutHandles.length = 0;
    this.keyUpEventHandles.clear();
  }

  private keyUpEventHandle(event: KeyboardEvent) {
    if (event.key == 'Tab') {
      this.renderer.addClass(this.container, KEYBOARD_FOCUSABLE_CLASS);
    }

    if (this.keyUpEventHandles.has(event.key)) {
      this.keyUpEventHandles
        .get(event.key)!
        .forEach((fn: KeyUpEventHandle) => fn(event));
    }
  }

  holdKeyboardFocus() {
    this.renderer.addClass(this.container, KEYBOARD_FOCUSABLE_CLASS);
  }
  clearKeyboardFocus() {
    this.renderer.removeClass(this.container, KEYBOARD_FOCUSABLE_CLASS);
  }

  private focusInEventHandle(event: FocusEvent) {
    this.focusInHandles.forEach((fn: FocusInEventHandle) => fn(event));
  }

  private focusOutEventHandle(event: FocusEvent) {
    this.renderer.removeClass(this.container, KEYBOARD_FOCUSABLE_CLASS);
    this.keyboardNavigation = false;
    this.focusOutHandles.forEach((fn: FocusOutEventHandle) => fn(event));
  }
}
