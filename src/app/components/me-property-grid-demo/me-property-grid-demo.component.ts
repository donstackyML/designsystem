import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-property-grid-demo',
  templateUrl: './me-property-grid-demo.component.html',
  styleUrls: ['./me-property-grid-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MePropertyGridDemoComponent {
  selectedDemo: string = 'basic';

  demoOptions = [
    { text: 'Basic Property Grid', value: 'basic' },
    { text: 'Custom Content', value: 'custom' },
    { text: 'Additional Properties', value: 'additional' },
    { text: 'Actions', value: 'actions' },
    { text: 'Property Grid Group', value: 'group' },
    { text: 'Mixed Content', value: 'mixed' },
  ];

  // Basic demo properties
  basicValue = 'Basic Value';

  // Custom content demo properties
  username = 'john.doe';
  email = 'john.doe@example.com';
  selectedRole = 'Admin';
  isActive: boolean | undefined = true;
  birthDate: Date | string | number = new Date('1990-01-01');
  roles = ['Admin', 'User', 'Manager', 'Guest'];

  // Additional properties demo
  additionalPropsOpened = false;
  mainSetting: boolean | undefined = true;
  subSetting1 = 'Sub Value 1';
  subSetting2 = 'Sub Value 2';
  timeout = 30;
  colorTheme = '#007acc';

  // Group demo properties
  serverName = 'Production Server';
  serverStatus = 'Online';
  serverActive: boolean | undefined = true;
  serverStatuses = ['Online', 'Offline', 'Maintenance'];

  dbName = 'MainDatabase';
  connectionString = 'Server=localhost;Database=MainDB;Trusted_Connection=true;';
  maxConnections = 100;

  monitoringEnabled: boolean | undefined = true;
  logLevel = 'Info';
  logLevels = ['Debug', 'Info', 'Warning', 'Error'];

  // Mixed content demo properties
  formTitle = 'User Registration Form';
  availableTags = ['Frontend', 'Backend', 'Database', 'API', 'Testing'];
  selectedTags = ['Frontend', 'API'];
  multiField1 = 'Value 1';
  multiField2 = 'Value 2';
  customLeftContent = 'Custom content';

  onDemoChange(event: any) {
    this.selectedDemo = event.value;
  }

  // Action methods
  viewFile(fileName: string) {
    console.log(`Viewing file: ${fileName}`);
  }

  downloadFile(fileName: string) {
    console.log(`Downloading file: ${fileName}`);
  }

  deleteFile(fileName: string) {
    console.log(`Deleting file: ${fileName}`);
  }

  openFolder() {
    console.log('Opening folder');
  }

  addToFolder() {
    console.log('Adding to folder');
  }
}
