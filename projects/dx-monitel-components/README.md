Библиотека выполнена в виде скомпилированных css-файлов для светлой и темной тем и директив для расширения компонентов DevExtreme отностительно дизайна приложений СК-21.

Разрабатывалась и тестировалась на версиях Angular 16.2.5, DevExtreme 23.1.5.

[Демонстрационная страница](https://ck-designsystem.oiktest.local/dx-monitel-themes/).

Обратная связь — [публичная комната команды разработки дизайн-системы МЭ в Element](#UI:monitel.com).

Тестовый релиз. Перечень доступных директив:

- meButton
- meButtonGroup
- meTextBox
- meSelectBox
- meCheckBox
- meRadioGroup
- mePopup
- meContextMenu
- meDropDownButton
- meIcon
- meLabel
- meList
- meMenu
- meSwitch
- meToolbar
- meTreeView

Перечень доступных компонент

- meSidePage

Детали кастомизации:

- Изменен шрифт.
- Изменены цвета используемые в переменных препроцессора тем.
- Добавлен размерный ряд.
- Изменены внутренние отступы, шрифты, закругления и т.д.

Базовые темы:

- Для светлой: [Generic Light](https://devexpress.github.io/ThemeBuilder/advanced/generic/light/base.common/).
- Для темной: [Generic Dark](https://devexpress.github.io/ThemeBuilder/advanced/generic/dark/base.common/).

## 🔧 Установка

```
npm install @monitel/dx-monitel-components
```

---

## Использование тем

Предварительно необходимо устанавить пакеты devextreme и devextreme-angular

```
npm install devextreme
npm install devextreme-angular
```

Без необходимости переключать темы в runtime

1. Подключить файл стилей для светлой или темной темы (подключать файл стилей DevExtreme не надо!)

```
// /angular.json

"styles": [
  ...
  "node_modules/@monitel/dx-monitel-components/assets/dx.monitel.light.css"
],
```

2. Подключить модуль нужной директивы

```
// /app.module.ts
import { MeButtonModule } from '@monitel/dx-monitel-components';

@NgModule({
  ...
  imports: [..., MeButtonModule],
  ...
})
```

3. При необходимости можно подключить все директивы одним модулем

```
// /app.module.ts
import { MeComponentsModule } from '@monitel/dx-monitel-components';

@NgModule({
  ...
  imports: [..., MeComponentsModule],
  ...
})
```

4. Использовать компонент DevExtreme и соответствующую директиву

```
// /app.component.html

<dx-button meButton text="meButton" size="small"></dx-button>
```

При необходимости переключать темы в runtime

1. Добавить ссылки на файлы с темами в index.html (добавлять файлы стилей dx.monitel.light.css/dx.monitel.dark.css в angular.json не надо)

```
// /index.html

  <link rel="dx-theme" data-theme="generic.light" href="assets/dx.monitel.light.css" data-active="true" />
  <link rel="dx-theme" data-theme="generic.dark" href="assets/dx.monitel.dark.css" data-active="false" />
```

2. Добавить соответствующий код в файл angular.json

```
// /angular.json

"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "./node_modules/@monitel/dx-monitel-components/assets",
    "output": "assets"
  }
],
```

3. Переключение тем без перезагрузки страницы

```
// /app.component.ts

  import themes from 'devextreme/ui/themes';

  // Код компонента

  themes.current('generic.dark');
```

Подробнее о переключении тем [здесь](https://js.devexpress.com/Angular/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Switch_Between_Themes_at_Runtime)

---

## 🥂 License

[Apache-2.0](./LICENSE.md) as always
