# Логика реализации лейблов, иконок, скролла и текстовых полей

## Содержание

[Реализация лейблов](#label)
[Добавление иконок](#icon)
[Стилизация скролла](#scroll)
[Реализация полей ввода](#fields)

<h2 id='label'>Реализация лейблов</h2>

Т.к. в используемой изначально версии DevExtreme не было реализовано свойство labelPosition="outside", а расположение лейбла слева или справа от элемента не реализовано и в новой версии, была разработана директива meLabel.

Применяется на тег label, div или другой, в который вложено целевое поле ввода. Элемент должен быть вложен, т.к. доступ к нему производится с помощью функции-декоратора @ContentChild.

<b>Что она делает:</b>

- меняет размер текстовой метки в зависимости от размера поля ввода
- меняет цвет текста, если поле не проходит валидацию или неактивное
- при клике по текстовой метке помещает фокус на соответствующее ей поле ввода, для switch переключает из одного состояния в другое
- располагает текстовую метку сверху, слева или справа от компонента
- позволяет изменить ширину контейнера, в котором находится текстовая метка и поле ввода, м.б. полезно при их горизонтальном расположении

Пример кода с вертикальным расположением поля и лейбла:

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"column"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
<br>

Пример кода с горизонтальным расположением поля и лейбла и изменением размера контейнера:

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"row"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"350px"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<h2 id='icon'>Добавление иконок</h2>
Т.к. иконки часто используются в макетах и имеется необходимость их перекрашивания в зависимости от темы, была создана директива meIcon.

Директива meIcon принимает указанные входные свойства:

- icon (обязательное) - принимает имя иконки из сервиса MeIconStoreService или код svg-элемента строкой
- size - размер иконки
- color - цвет иконки
- height - высота элемента-контейнера
- width - ширина элемента-контейнера

Директива позволяет изменять размер и цвет иконки динамически, однако имеет недостаток - svg вставляется в элемент-контейнер через innerHTML.

Пример кода:

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"public"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"24"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<h2 id='scroll'>Стилизация скролла</h2>

В элементах, в которых имеется скролл, приведение его к виду, указанному в дизайн-системе производится с помощью добавления классов me-scrollbar-visible и me-scroll-view на компонент DevExtreme.

Например так:

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">component</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">wrapperAttr</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #d4d4d4">=</SPAN><SPAN style="color: #cccccc"> {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #d4d4d4">...</SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">wrapperAttr</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">`me-scrollbar-visible me-scroll-view`</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; };</SPAN></DIV><BR/></DIV>
<br>

Из-за отличий в размере левого внутреннего отступа компонентов, скролл возможно нужно будет передвигать через свойство margin-right, чтобы добиться соответствия с дизайн-системой.

<h2 id='fields'>Реализация лейблов</h2>

Директивы конкретных полей ввода наследуются от более общей директивы MeTextEditorDirective (определяет размеры полей ввода в зависимости от свойства size), т.к. у полей ввода одинаковые размеры, отступы, высота строки и т.д.

В свою очередь MeTextEditorDirective, а также директивы для специфичных полей типа checkbox, switch и radiobuttton наследуются от директивы MeEditorDirective, которая определяет логику управления фокусом (отключен фокус по клику и включен только по табу), также добавляется общий для всех полей класс me-editor и me-editor-${size}.
