import { Injectable } from '@angular/core';
import * as i0 from '@angular/core';
export class MeIconsRegistry {
  constructor() {
    this.registry = new Map();
  }
  registerIcons(icons) {
    icons.forEach((icon) => this.registry.set(icon.name, icon.data));
  }
  getIconFromString(iconName, color = 'var(--Icon-Default)') {
    if (!this.registry.has(iconName)) {
      console.warn(`Иконка с именем ${iconName} не зарегистрирована!`);
    }
    return this.registry.get(iconName)?.replaceAll('color', color);
  }
  getIcon(iconComponent, color = 'var(--Icon-Default)') {
    if (!iconComponent.data) {
      console.warn(`Компонент ${iconComponent} не содержит svg строку!`);
    }
    this.registry.set(iconComponent.name, iconComponent.data);
    return iconComponent.data?.replaceAll('color', color) || '';
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsRegistry,
      deps: [],
      target: i0.ɵɵFactoryTarget.Injectable,
    });
  }
  static {
    this.ɵprov = i0.ɵɵngDeclareInjectable({
      minVersion: '12.0.0',
      version: '16.2.12',
      ngImport: i0,
      type: MeIconsRegistry,
      providedIn: 'root',
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.2.12',
  ngImport: i0,
  type: MeIconsRegistry,
  decorators: [
    {
      type: Injectable,
      args: [
        {
          providedIn: 'root',
        },
      ],
    },
  ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUtaWNvbnMtcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21lLWljb25zLXJlZ2lzdHJ5L3NyYy9saWIvbWUtaWNvbnMtcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8zQyxNQUFNLE9BQU8sZUFBZTtJQUg1QjtRQUlVLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztLQTJCL0M7SUF6QlEsYUFBYSxDQUFDLEtBQWU7UUFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0saUJBQWlCLENBQUMsUUFBaUIsRUFBRSxRQUFnQixxQkFBcUI7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsbUJBQW1CLFFBQVEsdUJBQXVCLENBQ25ELENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sT0FBTyxDQUFDLGFBQWtCLEVBQUUsUUFBZ0IscUJBQXFCO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsYUFBYSxhQUFhLDBCQUEwQixDQUNyRCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQzsrR0EzQlUsZUFBZTttSEFBZixlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtZUljb25zLCBNZUljb24gfSBmcm9tICdAbW9uaXRlbC9tZS1pY29ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZUljb25zUmVnaXN0cnkge1xyXG4gIHByaXZhdGUgcmVnaXN0cnkgPSBuZXcgTWFwPG1lSWNvbnMsIHN0cmluZz4oKTtcclxuXHJcbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IE1lSWNvbltdKTogdm9pZCB7XHJcbiAgICBpY29ucy5mb3JFYWNoKChpY29uOiBhbnkpID0+IHRoaXMucmVnaXN0cnkuc2V0KGljb24ubmFtZSwgaWNvbi5kYXRhKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWNvbkZyb21TdHJpbmcoaWNvbk5hbWU6IG1lSWNvbnMsIGNvbG9yOiBzdHJpbmcgPSBcInZhcigtLUljb24tRGVmYXVsdClcIik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKGljb25OYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYNCY0LrQvtC90LrQsCDRgSDQuNC80LXQvdC10LwgJHtpY29uTmFtZX0g0L3QtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QsCFgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0KGljb25OYW1lKT8ucmVwbGFjZUFsbCgnY29sb3InLCBjb2xvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWNvbihpY29uQ29tcG9uZW50OiBhbnksIGNvbG9yOiBzdHJpbmcgPSBcInZhcigtLUljb24tRGVmYXVsdClcIik6IHN0cmluZyB7XHJcbiAgICBpZiAoIWljb25Db21wb25lbnQuZGF0YSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYNCa0L7QvNC/0L7QvdC10L3RgiAke2ljb25Db21wb25lbnR9INC90LUg0YHQvtC00LXRgNC20LjRgiBzdmcg0YHRgtGA0L7QutGDIWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZ2lzdHJ5LnNldChpY29uQ29tcG9uZW50Lm5hbWUsIGljb25Db21wb25lbnQuZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIGljb25Db21wb25lbnQuZGF0YT8ucmVwbGFjZUFsbCgnY29sb3InLCBjb2xvcikgfHwgJyc7XHJcbiAgfVxyXG59Il19
