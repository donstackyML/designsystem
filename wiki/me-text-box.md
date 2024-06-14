# Директива meTextBox, meLabel

Применение директивы **meTextBox** к элементу dx-text-box приводит его размеры к значению size=medium (32) из дизайн-системы, задает по-умолчанию stylingMode=filled и предоставляет доступ к другим свойствам.
![image.png](/.attachments/image-0980d73f-b5f8-4a6f-9aa5-3b2c71c9f028.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<br>

## Определение положения лейбла снаружи текстового поля

Применение директивы **meLabel** позволяет определить положение лейбла снаружи текстового поля (сверху или слева).

### Положение лейбла сверху

![image.png](/.attachments/image-38927fab-25b9-4d21-be85-17eb871c29b9.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"column"</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

### Положение лейбла слева

![image.png](/.attachments/image-1e919b65-b3ec-4fc4-b201-545fc5b8fef5.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"row"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"300px"</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

Ширину элемента-обертки можно изменять с помощью свойства [width](#width).

## Перечень свойств

| Название свойства                | Описание                                                                                                             |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [label](#label)                  | Указывает текстовую строку, используемую для аннотации значения поля ввода                                           |
| [labelMode](#labelmode)          | Определяет положение лейбла текстового поля                                                                          |
| [labelDirection](#labelposition) | Определяет положение лейбла снаружи текстового поля (сверху или слева)                                               |
| [size](#size)                    | Принимает размер текстового поля                                                                                     |
| [width](#width)                  | Определяет размер текстового поля вместе с лейблом (используется в теге label для расположения labelPosition="left") |

## Свойства

### Стандартные свойства компонента dx-text-box

<h3 id="label">label</h3>

> Тип: string
> Значение по умолчанию: ""

Указывает текстовую строку, используемую для аннотации значения поля ввода.

<h3 id="labelmode">labelMode</h3>

> Тип: MeLabelMode = 'static' | 'floating'
> Значение по умолчанию: ""

Определяет положение лейбла текстового поля.

[Полный перечень стандартных свойств](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxTextBox/)

### Дополнительные свойства при использовании директивы

<h3 id="labelposition">labelDirection</h3>

> Тип: MeLabelDirection = 'column' | 'row'
> Значение по умолчанию: "row"

Определяет положение лейбла снаружи текстового поля (сверху или слева).

<h3 id="size">size</h3>

> Тип: MeSize = 'small' | 'medium' | 'large'
> Значение по умолчанию: 'medium'

Принимает размер текстового поля.
![image.png](/.attachments/image-bec07539-c476-457c-93f9-b033e929fac0.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"small"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">placeholder</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Placeholder..."</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"medium"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">placeholder</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Placeholder..."</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"large"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">placeholder</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Placeholder..."</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

<h3 id="width">width</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает размер элемента-обертки для текстового поля с лейблом слева (labelDirection="row"). Значение в px, других единицах измерения css (em, rem, vh, vw и др.), значение auto, inherit и т.п.
![image.png](/.attachments/image-24618256-fb79-4b0f-a346-5878bbe38776.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meLabel</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">labelDirection</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"row"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"300px"</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Label</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meTextBox</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-text-box</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">label</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>
