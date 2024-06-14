# Директива meSelectBox, meLabel

Применение директивы **meSelectBox** к элементу dx-select-box приводит его размеры к значению size=medium (32) из дизайн-системы, задает по-умолчанию stylingMode=filled и предоставляет доступ к другим свойствам.
![image.png](/.attachments/image-c6d14abe-820c-463c-868b-a707d4a3aaa9.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<br>

## Определение положения лейбла снаружи текстового поля

Применение директивы **meLabel** позволяет определить положение лейбла снаружи текстового поля (сверху или слева).

### Положение лейбла сверху (по умолчанию)

![image.png](/.attachments/image-1bedff63-dfc3-49bc-b463-5adde1b957c4.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"column"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

### Положение лейбла слева

![image.png](/.attachments/image-56530f51-2015-4956-98b8-0da7c12ee770.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"250px"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

Ширину элемента-обертки можно изменять с помощью свойства [width](#width).

## Перечень свойств

| Название свойства                | Описание                                                                                                             |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [label](#label)                  | Указывает текстовую строку, используемую для аннотации значения поля ввода                                           |
| [labelMode](#labelmode)          | Определяет положение лейбла текстового поля                                                                          |
| [labelDirection](#labelposition) | Определяет положение лейбла снаружи текстового поля (сверху или слева)                                               |
| [size](#size)                    | Принимает размер текстового поля                                                                                     |
| [showScrollbar](#showscrollbar)  | Определяет будет ли скролл отображаться при наведении или постоянно                                                  |
| [width](#width)                  | Определяет размер текстового поля вместе с лейблом (используется в теге label для расположения labelPosition="left") |

## Свойства

### Стандартные свойства компонента dx-select-box

<h3 id="label">label</h3>

> Тип: string
> Значение по умолчанию: ""

Указывает текстовую строку, используемую для аннотации значения поля ввода.

<h3 id="labelmode">labelMode</h3>

> Тип: MeLabelMode = 'static' | 'floating'
> Значение по умолчанию: ""

Определяет положение лейбла текстового поля.

[Полный перечень стандартных свойств](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxSelectBox/)

### Дополнительные свойства при использовании директивы

<h3 id="labelposition">labelDirection</h3>

> Тип: MeLabelDirection = 'column' | 'row'
> Значение по умолчанию: 'row'

Определяет положение лейбла снаружи текстового поля (сверху или слева).

<h3 id="size">size</h3>

> Тип: MeSize = 'small' | 'medium' | 'large'
> Значение по умолчанию: 'medium'

Принимает размер текстового поля.
![image.png](/.attachments/image-74e49e9b-2a37-427e-aec7-4a421d813a3b.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"small"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"medium"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"large"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<h3 id="showscrollbar">showScrollbar</h3>

> Тип: MeScrollbarShowType = 'always' | 'onHover'
> Значение по умолчанию: 'always'

Определяет отображение скролла - при наведении или постоянно. По умолчанию скролл отображается при переполнении контента постоянно.
[Свойство в DevExtreme](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#showScrollbar)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #9cdcfe">showScrollbar</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"onHover"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

<h3 id="width">width</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает размер элемента-обертки для текстового поля с лейблом слева (labelDirection="row"). Значение в px, других единицах измерения css (em, rem, vh, vw и др.), значение auto, inherit и т.п.
![image.png](/.attachments/image-f4814833-7805-40cd-bff6-be034bc9aeac.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"250px"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meSelectBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[dataSource]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">dataSource</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-select-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
