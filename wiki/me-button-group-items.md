# items

Управляет внешним видом и поведением кнопки в группе кнопок.

## Перечень свойств

| Название свойства                 | Описание                                                 |
| :-------------------------------- | :------------------------------------------------------- |
| [iconColor](#iconcolor)           | Принимает цвет иконки                                    |
| [iconOnly](#icononly)             | Принимает иконку для кнопки только с иконкой, без текста |
| [iconSize](#iconsize)             | Принимает размер иконки                                  |
| [leftIcon](#lefticon)             | Принимает левую иконку                                   |
| [leftIconColor](#lefticoncolor)   | Принимает цвет для левой иконки                          |
| [leftIconSize](#lefticonsize)     | Принимает размер левой иконки                            |
| [rightIcon](#righticon)           | Принимает правую иконку                                  |
| [rightIconColor](#righticoncolor) | Принимает цвет для правой иконки                         |
| [rightIconSize](#righticonsize)   | Принимает размер правой иконки                           |

<br>

---

<br>

### Свойства

<h3 id="iconcolor">iconColor</h3>

> Тип: string
> Значение по умолчанию: зависит от типа и стиля кнопки

Принимает цвет иконки
![image.png](/.attachments/image-723c9d9f-4c7e-4d48-afc5-b615e71ee955.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #6a9955">&lt;!-- index.html --&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button-group</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButtonGroup</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[items]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">itemDataDefault</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button-group</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>
<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #6a9955">//app.ts</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #9cdcfe">itemDataDefault</SPAN><SPAN style="color: #d4d4d4">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #4ec9b0">MeButtonGroupItem</SPAN><SPAN style="color: #cccccc">[] </SPAN><SPAN style="color: #d4d4d4">=</SPAN><SPAN style="color: #cccccc"> [</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'Пункт 1'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">rightIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">iconRight</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconColor</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'#ff0000'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">type</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'default'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'Пункт 2'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">rightIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">iconRight</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconColor</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'#ff0000'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><BR/><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">type</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'default'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'Пункт 3'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">rightIcon</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #569cd6">this</SPAN><SPAN style="color: #cccccc">.</SPAN><SPAN style="color: #9cdcfe">iconRight</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconColor</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'#ff0000'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">type</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'default'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; ];</SPAN></DIV><BR/></DIV>
<br><br>

---

<br>

<h3 id="icononly">iconOnly</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает иконку для кнопки только с иконкой, без текста

![image.png](/.attachments/image-81ebdc7b-b1b1-4ddb-bdf9-d615b382d024.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #9cdcfe">itemDataOnlyIcon</SPAN><SPAN style="color: #d4d4d4">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #4ec9b0">MeButtonGroupItem</SPAN><SPAN style="color: #cccccc">[] </SPAN><SPAN style="color: #d4d4d4">=</SPAN><SPAN style="color: #cccccc"> [</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'arrowback'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'arrowforward'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'cancel'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'cached'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'add'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; ];</SPAN></DIV><BR/></DIV>

<br>

---

<br>

<h3 id="iconsize">iconSize</h3>

> Тип: string
> Значение по умолчанию:
> '20' - для кнопок size small и medium, '24' - для кнопок size large

Принимает размер иконки без единиц измерения (по умолчанию пиксели)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #9cdcfe">itemDataOnlyIcon</SPAN><SPAN style="color: #d4d4d4">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #4ec9b0">MeButtonGroupItem</SPAN><SPAN style="color: #cccccc">[] </SPAN><SPAN style="color: #d4d4d4">=</SPAN><SPAN style="color: #cccccc"> [</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'arrowback'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'12'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'arrowforward'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'16'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'cancel'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'20'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'cached'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'24'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; {</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'add'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #9cdcfe">:</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #ce9178">'28'</SPAN><SPAN style="color: #cccccc">,</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; },</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; ];</SPAN></DIV></DIV>

<br>

---

<br>
<h3 id="lefticon">leftIcon</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает название иконки из стандартного набора (или иконку, переданную строкой), которая будет вставлена слева от текста

---

<br>
<h3 id="lefticoncolor">leftIconColor</h3>

> Тип: string
> Значение по умолчанию: ""

Определяет цвет для иконки слева от текста. Имеет приоритет над свойством iconColor.

<br>

---

<br>
<h3 id="lefticonsize">leftIconSize</h3>

> Тип: string
> Значение по умолчанию: '20' - для кнопок size small и medium, '24' - для кнопок size large. Имеет приоритет над iconSize.

Принимает размер для иконки слева от текста без единиц измерения (по умолчанию пиксели).
<br>

---

<br>
<h3 id="righticon">rightIcon</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает название иконки из стандартного набора (или иконку, переданную строкой), которая будет вставлена справа от текста.

<br>

---

<br>
<h3 id="righticoncolor">rightIconColor</h3>

> Тип: string
> Значение по умолчанию: ""

Определяет цвет для иконки справа от текста. Имеет приоритет над свойством iconColor.

<br>

---

<br>
<h3 id="righticonsize">rightIconSize</h3>
 
> Тип: string
Значение по умолчанию: '12' - для кнопок size small и medium, '16' - для кнопок size large (по умолчанию пиксели).

Определяет размер для иконки справа от текста. Без единиц измерения (по умолчанию пиксели). Имеет приоритет над iconSize.

<br>
