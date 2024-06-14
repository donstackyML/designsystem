# Директива meDropDownButton

Применение директивы meDropDownButton к элементу dx-drop-down-button приводит его размеры к значению size = medium (32) из дизайн-системы и предоставляет доступ к другим свойствам.
![image.png](/.attachments/image-49de8ffe-26cc-4d73-a8c0-74072539aac0.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meDropDownButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">menuItems</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

## Перечень свойств

| Название свойства               | Описание                                                        |
| :------------------------------ | :-------------------------------------------------------------- |
| [icon](#icon)                   | Принимает иконку                                                |
| [iconColor](#iconcolor)         | Принимает цвет иконки                                           |
| [iconSize](#iconsize)           | Принимает размер иконки                                         |
| [size](#size)                   | Принимает размер группы кнопок                                  |
| [splitButton](#splitbutton)     | Разделяет кнопку на две                                         |
| [showScrollbar](#showscrollbar) | Определяет показывать скроллбар всегда или только при наведении |
| [stylingMode](#stylingmode)     | Определяет стиль группы кнопок                                  |

## Свойства

### Стандартные свойства компонента dx-drop-down-button

<h3 id="splitbutton">splitButton</h3>

> Тип: boolean
> Значение по умолчанию: false

При присвоении значения true разделяет кнопку на две. [Подробнее](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#splitButton)
<br>

---

<h3 id="showscrollbar">showScrollbar</h3>

> Тип: MeScrollbarShowType = 'always' | 'onHover';
> Значение по умолчанию: 'always'

Определяет показывать скроллбар всегда или только при наведении.
<br>

---

<h3 id="stylingmode">stylingMode</h3>

> Тип: MeButtonStyle = 'contained' | 'outlined' | 'text'
> Значение по умолчанию: 'contained'

Определяет стиль кнопки.

[Полный перечень](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxDropDownButton/)
<br>

---

### Дополнительные свойства при использовании директивы

<h3 id="icon">icon</h3>

> Тип: string
> Значение по умолчанию: ''

Принимает название иконки из стандартного набора (или иконку, переданную строкой), которая будет вставлена слева от текста.
<br>

---

<h3 id="iconcolor">iconColor</h3>

> Тип: string
> Значение по умолчанию: зависит от типа и стиля кнопки

Принимает цвет иконки
![image.png](/.attachments/image-fbeca39c-59a7-460a-8dc2-a691e39948ec.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meDropDownButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconColor</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"#ff0000"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">menuItems</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
<br><br>

---

<br>

<h3 id="iconsize">iconSize</h3>

> Тип: string
> Значение по умолчанию:
> '20' - для кнопок size small и medium, '24' - для кнопок size large

Принимает размер иконки без единиц измерения (по умолчанию пиксели)
<br>

---

<h3 id="size">size</h3>

> Тип: MeSize = 'small' | 'medium' | 'large'
> Значение по умолчанию: 'medium'

Меняет размер dropDownButton и выпадающего меню.
![image.png](/.attachments/image-ca640cad-8b86-4a1b-8687-51383b18d7f1.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meDropDownButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"small"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">menuItems</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meDropDownButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"medium"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">menuItems</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meDropDownButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"large"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">menuItems</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">dx-drop-down-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
<br><br>
