import { Injectable } from '@angular/core';

export interface Alignment {
  icon: string;
  text: string;
  hint: string;
  type: 'success' | 'danger' | 'normal' | 'default';
}

const successAlignments: Alignment[] = [
  {
    icon: 'alignleft',
    text: 'Left',
    hint: 'Align left',
    type: 'success',
  },
  {
    icon: 'aligncenter',
    hint: 'Center',
    text: 'Center',
    type: 'success',
  },
  {
    icon: 'alignright',
    hint: 'Align right',
    text: 'Right',
    type: 'success',
  },
];

const dangerAlignments: Alignment[] = [
  {
    icon: 'alignleft',
    text: 'Left',
    hint: 'Align left',
    type: 'danger',
  },
  {
    icon: 'aligncenter',
    hint: 'Center',
    text: 'Center',
    type: 'danger',
  },
  {
    icon: 'alignright',
    hint: 'Align right',
    text: 'Right',
    type: 'danger',
  },
];

const defaultAlignments: Alignment[] = [
  {
    icon: 'alignleft',
    text: 'Left',
    hint: 'Align left',
    type: 'default',
  },
  {
    icon: 'aligncenter',
    hint: 'Center',
    text: 'Center',
    type: 'default',
  },
  {
    icon: 'alignright',
    hint: 'Align right',
    text: 'Right',
    type: 'default',
  },
];

const normalAlignments: Alignment[] = [
  {
    icon: 'alignleft',
    text: 'Left',
    hint: 'Align left',
    type: 'normal',
  },
  {
    icon: 'aligncenter',
    hint: 'Center',
    text: 'Center',
    type: 'normal',
  },
  {
    icon: 'alignright',
    hint: 'Align right',
    text: 'Right',
    type: 'normal',
  },
];

@Injectable()
export class Service {
  getSuccessAlignments() : Alignment[] {
    return successAlignments;
  }
  getDangerAlignments() : Alignment[] {
    return dangerAlignments;
  }
  getNormalAlignments() : Alignment[] {
    return normalAlignments;
  }
  getDefaultAlignments() : Alignment[] {
    return defaultAlignments;
  }
}
