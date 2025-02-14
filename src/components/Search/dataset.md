## Свойство `dataset`

### Что такое `dataset`?

Свойство `dataset` — это объект, который предоставляет доступ к атрибутам данных (data attributes) HTML-элемента. Атрибуты данных — это пользовательские атрибуты, которые начинаются с префикса `data-`. Например, атрибут `data-type='movie'` в HTML элементе будет доступен через `element.dataset.type`.

### Как используется в коде?

В вашем коде `dataset` используется для получения значения типа контента, выбранного пользователем через радиокнопки. Вот как это выглядит:

```javascript
<input
  className='with-gap'
  name='type'
  type='radio'
  data-type='movie'
  onChange={this.handleRadioChange}
  checked={this.state.type === 'movie'}
/>
```

Когда пользователь выбирает радиокнопку, срабатывает метод `handleRadioChange`, который принимает объект события `event`. Внутри этого метода мы используем:

```javascript
this.setState(() => ({ type: event.target.dataset.type }), () => {
  this.props.searchMovies(this.state.search, this.state.type);
});
```

Здесь `event.target` ссылается на элемент радиокнопки, который вызвал событие. Мы можем получить значение атрибута `data-type` с помощью `event.target.dataset.type`, что позволяет нам обновить состояние компонента с новым типом контента.

### Пример работы

Если пользователь выберет радиокнопку с `data-type='movie'`, то при вызове `this.setState` состояние изменится на:

```javascript
{ type: 'movie' }
```

## Заключение

Таким образом, свойства `dataset` и `checked` позволяют динамически управлять состоянием компонента и обеспечивать интерактивность пользовательского интерфейса. Использование этих свойств делает компонент более отзывчивым и удобным для пользователя.