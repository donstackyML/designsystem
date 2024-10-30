Библиотека представляет из себя компонент <me-icon> для размещения иконок и сервис MeIconsRegistry для регистрации иконок.

Разрабатывалась и тестировалась на версии Angular 16.2.14.

Обратная связь — [публичная комната команды разработки дизайн-системы МЭ в Element](#UI:monitel.com).

## Установка

```
npm install @monitel/me-icon-registry
```

---

## Использование

1. Установить пакет @monitel/me-icon

2. Импортировать MeIconsModule

```
import { MeIconsModule } from '@monitel/me-icons-registry';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...
    MeIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

```

3. Инжектировать сервис и зарегистрировать необходимые иконки в компоненте

```
import { meIcon24AccountCircle, meIcon24Add, meIcon24CalendarToday, meIcon24Close, meIcon24ContentCopy, meIcon24Edit } from '@monitel/me-icons';
import { MeIconsRegistry } from '@monitel/me-icons-registry';

export class AppComponent {
  constructor(private meIconRegistry: MeIconsRegistry) {
    meIconRegistry.registerIcons([meIcon24Add, meIcon24AccountCircle, meIcon24CalendarToday, meIcon24Close, meIcon24ContentCopy, meIcon24Edit]);
  }
}
```

4. Использовать иконки в разметке

```
  <me-icon name="24_content_copy"></me-icon>
  <me-icon name="24_calendar_today"></me-icon>
  <me-icon name="24_close" color="var(--Icon-Secondary)"></me-icon>
  <me-icon name="24_edit" color="var(--Icon-Blue)"></me-icon>
```

5. При необходимости передать иконку в компонент DevExtreme, сначала получаем её в свойство компонента

```
constructor(private meIconRegistry: MeIconsRegistry) {
  ...
  this.add_24 = this.iconRegistry.getIcon('24_add', 'red');
}
```

6. Затем байндим свойство класса к аттрибуту icon компонента DevExtreme

```
<dx-button meButton [leftIcon]="add_24" text="Добавить"></dx-button>
```

---

## 🥂 License

[Apache-2.0](./LICENSE.md) as always
