# Директива meIcon

Директива meIcon предоставляет доступ к набору встроенных иконок и дает возможность передать код кастомной иконки, которой нет в наборе.
Иконка встраивается кодом в элемент, который является flex-контейнером.

## Использование иконки из стандартного набора

![image.png](/.attachments/image-ccddd6c5-6078-49e4-8d9a-a4d77c54ad36.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"public"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"cached"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"cancel"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"add"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"close"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
<br>
 
## Использование кастомной иконки
![image.png](/.attachments/image-1618b532-2afd-4e22-98a2-32b6cd775dd0.png)
1. **Необходимо подготовить код иконки.** Чтобы была возможность изменять размер и цвет иконки, необходимо в свойства width и height тега svg передать строку "iconSize", а в свойство fill тега path строку "color", например:
<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #569cd6">public</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #4fc1ff">arrowBack</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #d4d4d4">=</SPAN><SPAN style="color: #cccccc"> </SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #ce9178">`&lt;svg width="iconSize" height="iconSize" viewBox="0 0 16 16" ...&gt;</SPAN></DIV><DIV><SPAN style="color: #ce9178">&#160; &#160; &#160; &lt;path d="M5.0625 12L8 9.0625L10.9375 ..." fill="color"/&gt;</SPAN></DIV><DIV><SPAN style="color: #ce9178">&#160; &#160; &lt;/svg&gt;`</SPAN><SPAN style="color: #cccccc">;</SPAN></DIV><BR/></DIV>
<br>

2. **Связать аттрибут icon со свойством**.

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBack</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

## Перечень свойств

| Название свойства     | Описание                                                                   |
| :-------------------- | :------------------------------------------------------------------------- |
| [icon](#icon)         | Принимает название иконки из стандартного набора или строку с кодом иконки |
| [color](#color)       | Принимает конкретный цвет иконки или css-переменную                        |
| [iconSize](#iconsize) | Принимает размер иконки                                                    |
| [height](#height)     | Принимает высоту для элемента, который содержит иконку                     |
| [width](#width)       | Принимает ширину для элемента, который содержит иконку                     |

<br>

## Свойства

<h3 id="icon">icon</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает название иконки из стандартного набора или строку с кодом иконки.

<h3 id="color">color</h3>

> Тип: string
> Значение по умолчанию: ""

Определяет цвет иконки.
Может принимать конкретный цвет (не меняется при переключении темы) или css-переменную (будет изменять цвет в зависимости от темы).

**Жестко заданный цвет**
![image.png](/.attachments/image-b1161622-33f4-4124-8077-a2a7254b1eef.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBackIcon</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">color</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"#ff0000"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

<br>

**Цвет, определенный с помощью css-переменной**

![image.png](/.attachments/image-8dcf2b10-ce8f-4497-90a4-cbcadf8a9dba.png)
![image.png](/.attachments/image-d83ad1e5-028d-455c-be0f-b4fc280504ec.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBackIcon</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">color</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"var(--me-icon-default)"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN></DIV></DIV>

<h3 id="iconsize">iconSize</h3>

> Тип: string
> Значение по умолчанию: '12'

Принимает размер иконки без единиц измерения (по умолчанию пиксели).
![image.png](/.attachments/image-280fa1dc-d26f-449b-b1b9-0406834ef497.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBackIcon</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"10"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBackIcon</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[icon]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">arrowBackIcon</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"30"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

<h3 id="height">height</h3>

> Тип: string
> Значение по умолчанию: 'auto'

Принимает высоту для элемента, который содержит иконку.

<h3 id="width">width</h3>

> Тип: string
> Значение по умолчанию: 'auto'

Принимает ширину для элемента, который содержит иконку.
