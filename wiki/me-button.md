# Директива meButton

Применение директивы meButton к элементу dx-button приводит его размеры к значению size = medium (32) из дизайн-системы и предоставляет доступ к другим свойствам.
![image.png](/.attachments/image-66d0825c-0702-4eba-b1db-80d0b6d7b262.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br>

## Перечень свойств

| Название свойства                             | Описание                                                                   |
| :-------------------------------------------- | :------------------------------------------------------------------------- |
| [iconColor](#iconcolor)                       | Принимает цвет иконки                                                      |
| [iconOnly](#icononly)                         | Принимает иконку для кнопки только с иконкой, без текста                   |
| [iconSize](#iconsize)                         | Принимает размер иконки                                                    |
| [isSelected](#isselected)                     | Имеет ли кнопка состояние selected                                         |
| [leftIcon](#lefticon)                         | Принимает название левой иконки из стандартного набора                     |
| [leftIconColor](#lefticoncolor)               | Принимает цвет для левой иконки                                            |
| [leftIconName](#lefticonname)                 | Принимает название иконки вместе с расширением из папки assets/icons/light |
| [leftIconSize](#lefticonsize)                 | Принимает размер левой иконки                                              |
| [rightIcon](#righticon)                       | Принимает название правой иконки из стандартного набора                    |
| [rightIconColor](#righticoncolor)             | Принимает цвет для правой иконки                                           |
| [rightIconName](#righticonname)               | Принимает название иконки вместе с расширением из папки assets/icons/light |
| [rightIconSize](#righticonsize)               | Принимает размер правой иконки                                             |
| [selectionStateEnable](#selectionstateenable) | Разрешает кнопке иметь состояние selected                                  |
| [size](#size)                                 | Принимает размер кнопки                                                    |

<br>

## Свойства

### Стандартные свойства компонента dx-button

<h3>stylingMode</h3>

> Тип: MeButtonStyle = 'contained' | 'outlined' | 'text'
> Значение по умолчанию: 'contained'

Определяет стиль кнопки.

<h3>type</h3>

> Тип: MeButtonType = 'default' | 'normal' | 'success' | 'warning' | 'danger'
> Значение по умолчанию: 'normal'

Определяет тип кнопки. В рамках дизайн-системы добавлен тип "warning".

[Полный перечень](https://js.devexpress.com/Angular/Documentation/ApiReference/UI_Components/dxButton/)
<br>

---

<br>

### Дополнительные свойства при использовании директивы

<h3 id="iconcolor">iconColor</h3>

> Тип: string
> Значение по умолчанию: зависит от типа и стиля кнопки

Принимает цвет иконки

![image.png](/.attachments/image-245e0818-8404-4798-9da1-bfd3574b52bb.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconColor</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"#ff00000"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>

<h3 id="icononly">iconOnly</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает иконку для кнопки только с иконкой, без текста

![image.png](/.attachments/image-c1e01199-1049-4676-ad39-109bfe3377aa.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"add"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>

<h3 id="iconsize">iconSize</h3>

> Тип: string
> Значение по умолчанию:
> '20' - для кнопок size small и medium, '24' - для кнопок size large

Принимает размер иконки без единиц измерения (по умолчанию пиксели)

![image.png](/.attachments/image-ee8452a6-bf58-4768-be16-8c4c3c47a6a0.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"arrowback"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"20"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>
<h3 id="isselected">isSelected</h3>

> Тип: boolean
> Значение по умолчанию: false

Указывает имеет ли кнопка состояние selected ("вжатость").
![image.png](/.attachments/image-04902139-0229-4991-ac91-34253e6a3c80.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[isSelected]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #569cd6">true</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>
<h3 id="lefticon">leftIcon</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает название иконки из стандартного набора, которая будет вставлена слева от текста
![image.png](/.attachments/image-641a4b52-3ca5-4064-8fa5-49a0160bf8d2.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"add"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>
<h3 id="lefticoncolor">leftIconColor</h3>

> Тип: string
> Значение по умолчанию: ""

Определяет цвет для иконки слева от текста. Имеет приоритет над свойством iconColor.
![image.png](/.attachments/image-a4458d09-9771-4b20-a238-e4155d72e0e6.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"add"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIconColor</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"#ff0000"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>
<br><br>

---

<br>
<h3 id="lefticonname">leftIconName</h3>

> Тип: string
> Значение по умолчанию: ""

Если необходимой иконки нет в стандартном наборе, но нужно чтобы она все равно меняла цвет в завимости от темы, требуется положить подготовленные для светлой и темной темы иконки в соответствующие папки:

> assets/images/icons/light
> assets/images/icons/dark

![image.png](/.attachments/image-5fa89e65-c093-4ec2-93d3-b1869deacf19.png)
![image.png](/.attachments/image-03382a7b-3bbc-47b9-a722-b5868e9f9916.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIconName</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"cancel.svg"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>

и передать в свойсво название иконки, тогда иконка будет меняться автоматически при переключении темы.
<br><br>

---

<br>
<h3 id="lefticonsize">leftIconSize</h3>

> Тип: string
> Значение по умолчанию: '20' - для кнопок size small и medium, '24' - для кнопок size large. Имеет приоритет над iconSize.

Принимает размер для иконки слева от текста без единиц измерения (по умолчанию пиксели)
![image.png](/.attachments/image-1b96129d-69e4-4ab8-b7f1-f8e5a31c4f9d.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIcon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"add"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">leftIconSize</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"18"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>

<br><br>

---

<br>
<h3 id="righticon">rightIcon</h3>

> Тип: string
> Значение по умолчанию: ""

Принимает название иконки из стандартного набора, которая будет вставлена справа от текста.
[Как и левая](#lefticon)

<br><br>

---

<br>
<h3 id="righticoncolor">rightIconColor</h3>

> Тип: string
> Значение по умолчанию: ""

Определяет цвет для иконки справа от текста. Имеет приоритет над свойством iconColor.
[Как и левая](#lefticoncolor)

<br><br>

---

<br>
<h3 id="righticonname">rightIconName</h3>

> Тип: string
> Значение по умолчанию: ""

Если необходимой иконки нет в стандартном наборе, но нужно чтобы она все равно меняла цвет в завимости от темы, требуется положить подготовленные для светлой и темной темы иконки в соответствующие папки:

> assets/images/icons/light
> assets/images/icons/dark

и передать в свойсво название иконки, тогда иконка будет меняться автоматически при переключении темы.

[Как и левая](#lefticonname)
<br><br>

---

<br>
<h3 id="righticonsize">rightIconSize</h3>
 
> Тип: string
Значение по умолчанию: '20' - для кнопок size small и medium, '24' - для кнопок size large (по умолчанию пиксели).

Определяет размер для иконки справа от текста. Без единиц измерения (по умолчанию пиксели). Имеет приоритет над iconSize.

[Как и левая](#lefticonsize)
<br><br>

---

<br>
<h3 id="selectionstateenable">selectionStateEnable</h3>

> Тип: boolean
> Значение по умолчанию: false

При передаче в свойство значения true разрешает кнопке иметь состояние selected (состояние "вжатости").
![image.png](/.attachments/image-04902139-0229-4991-ac91-34253e6a3c80.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><br><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[selectionStateEnable]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #569cd6">true</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><br></DIV>

<br><br>

---

<br>
<h3 id="size">size</h3>

> Тип: MeSize = 'small' | 'medium' | 'large'
> Значение по умолчанию: 'medium'

Меняет размер кнопки.
![image.png](/.attachments/image-821fe317-850a-4310-87cb-fd33325115b5.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"small"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"medium"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Кнопка"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"large"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160;</SPAN></DIV></DIV>

<br><br>

---

<br>
