# Компонент me-sidepage

Компонент me-sidepage реализует модальное окно выезжающее с левой или с правой стороны окна. [Ссылка на компонент в дизайн системе](https://www.figma.com/design/S2KXryEyWLA9cplaicYrVn/Components?node-id=980-20862&t=5rZ0hjk0K1n9J8cc-0).

## Пример

![image.png](/.attachments/image-ee8034cd-84c4-4bf8-b0f9-c0b94e46f29e.png)

<DIV style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 15px;line-height: 20px;white-space: pre"><BR/><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">me-sidepage</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[(isSidePageOpen)]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #9cdcfe">isSidePageOpen</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">position</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"left"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">width</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"340px"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">sidepage-header</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-sidepage-header"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meIcon</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">icon</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"public"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">size</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"24"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-sidepage-title"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-title-header1"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Заголовок</SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-text-body2"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">Описание</SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">span</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">stylingMode</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"text"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">iconOnly</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"close"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">(onClick)</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #dcdcaa">onClickHandler</SPAN><SPAN style="color: #cccccc">()</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">sidepage-content</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-text-body1"</SPAN><SPAN style="color: #808080">&gt;</SPAN><SPAN style="color: #cccccc">{{</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">lorem500</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #cccccc">}}</SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">sidepage-footer</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">class</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"me-sidepage-footer"</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Добавить"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">stylingMode</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"contained"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">[style.margin-right]</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #ce9178">'auto'</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Прнинять"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">stylingMode</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"contained"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">type</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"default"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; &#160; </SPAN><SPAN style="color: #808080">&lt;</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">meButton</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">text</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"Отменить"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">stylingMode</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"contained"</SPAN><SPAN style="color: #cccccc"> </SPAN><SPAN style="color: #9cdcfe">(onClick)</SPAN><SPAN style="color: #cccccc">=</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #dcdcaa">onClickHandler</SPAN><SPAN style="color: #cccccc">()</SPAN><SPAN style="color: #ce9178">"</SPAN><SPAN style="color: #808080">&gt;&lt;/</SPAN><SPAN style="color: #569cd6">dx-button</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; &#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">div</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><DIV><SPAN style="color: #cccccc">&#160; </SPAN><SPAN style="color: #808080">&lt;/</SPAN><SPAN style="color: #569cd6">me-sidepage</SPAN><SPAN style="color: #808080">&gt;</SPAN></DIV><BR/></DIV>

## Обзор

Свойство isSidePageOpen отвечает за показ sidepage и должно иметь двустороннее связывание со свойством родительского компонента, которым планируется упралять появлением sidepage.

Родительский элемент для компонентов, которые требуется поместить в шапке sidepage, должен иметь аттрибут sidepage-header.
Родительский элемент для компонентов, которые требуется поместить в контентной части sidepage, должен иметь аттрибут sidepage-content.
Родительский элемент для компонентов, которые требуется поместить в футере sidepage, должен иметь аттрибут sidepage-footer.

Классы me-sidepage-header, me-sidepage-title, me-title-header1, me-text-body2, me-text-body1, me-sidepage-footer встроены в библиотеку и позволяют стилизовать элементы sidepage в соответствии с дизайн-системой.

## Перечень свойств

| Название свойства                         | Описание                                        |
| :---------------------------------------- | :---------------------------------------------- |
| [hideOnOutsideClick](#hideOnOutsideClick) | Скрывает side page при клике вне компонента     |
| [isSidePageOpen](#isSidePageOpen)         | Определяет состояние показан/скрыт side page    |
| [position](#position)                     | Определяет сторону с которой выезжает side page |
| [shading](#shading)                       | Затеняет фон, когда компонент активен           |
| [width](#width)                           | Определяет ширину side page                     |
| [zIndex](#zindex)                         | Позволяет изменить z-index side page            |
| [zIndexOverlay](#zindexoverlay)           | Позволяет изменить z-index затененного фона     |

## Свойства

<h3 id="hideonoutsideclick">hideOnOutsideClick</h3>

> Тип: boolean
> Значение по умолчанию: false

При устанавлении значения true cкрывает side page при клике вне компонента.

<h3 id="issidepageopen">isSidePageOpen</h3>

> Тип: boolean
> Значение по умолчанию: false

При установлении свойству значения true показывает side page.

<h3 id="position">position</h3>

> Тип: MePosition = 'left' | 'right'
> Значение по умолчанию: 'left'

Определяет сторону с которой выезжает side page.

<h3 id="shading">shading</h3>

> Тип: boolean
> Значение по умолчанию: true

Затеняет фон, когда компонент активен

<h3 id="width">width</h3>

> Тип: string
> Значение по умолчанию: ''

Определяет ширину side page. Значение в px, других единицах измерения css (em, rem, vh, vw и др.), значение auto, inherit и т.п.

<h3 id="zindex">zIndex</h3>

> Тип: string
> Значение по умолчанию: '1505'

Позволяет изменить z-index side page.

<h3 id="zindexoverlay">zIndexOverlay</h3>

> Тип: string
> Значение по умолчанию: '1504'

Позволяет изменить z-index затененного фона
