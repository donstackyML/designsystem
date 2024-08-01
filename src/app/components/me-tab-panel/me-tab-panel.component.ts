import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-tab-panel',
  templateUrl: './me-tab-panel.component.html',
  styleUrls: ['./me-tab-panel.component.css'],
})
export class MeTabPanelComponent {
  constructor() {}

  dataSource = [
    {
      title: 'Tab 1',
      tasks: [
        { text: 'Task 1.1', date: '2024-07-21', assignedBy: 'User 1', priority: 'high' },
        { text: 'Task 1.2', date: '2024-07-22', assignedBy: 'User 2', priority: 'low' },
      ],
    },
    {
      title: 'Tab 2',
      tasks: [
        { text: 'Task 2.1', date: '2024-07-21', assignedBy: 'User 3', priority: 'medium' },
        { text: 'Task 2.2', date: '2024-07-23', assignedBy: 'User 4', priority: 'high' },
      ],
    },
  ];
  height: number = 418;
  animationEnabled: boolean = true;
  swipeEnabled: boolean = true;
  selectedIndex: number = 0;

  getTaskItemClasses(priority: string): string {
    return `task-item ${priority}`;
  }
}
