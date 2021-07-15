import './SportEventsForm.css';
import { useHistory } from "react-router-dom";

const SportEventsForm = (props) => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = value => {

      // не пусто && есть разделители
      if ( !value || !value.match(/;/g) ) {
        return false;
      }

      // есть как минимум три разделителя, значит введено хотя бы одно событие
      return value.match(/;/g).length >= 3;
    };

    const value = e.target.sportEventsArea.value.trim();

    if ( isValid(value) ) {
      const format = e.target.format.value;
      props.setFormat(format);
      props.addNewSportEvents(value);

      history.push(process.env.PUBLIC_URL + '/rendered-content');
    }
  };

  return (
    <>
      <form onSubmit={ onSubmit } id='sportEventsForm'>
        <label>
          <input name='format' defaultChecked={ props.format === 'stories' } type="radio" value={ 'stories' } />
          Сторис
        </label>
        <label>
          <input name='format' defaultChecked={ props.format === 'marketingtv' } type="radio" value={ 'marketingtv' } />
          Маркетинг ТВ
        </label>
        <label>
          <input name='format' defaultChecked={ props.format === 'push' } type="radio" value={ 'push' } />
          Пуши
        </label>

        <label htmlFor="sportEventsArea" />
        <textarea name="sportEventsArea"
                  id="sportEventsArea"
                  cols="130"
                  rows="20"
                  autoFocus
                  required
                  placeholder="Вид спорта; Турнир; Соперник1 - Соперник2; ДД Месяц ГГГГ ЧЧ:ММ;
Например: Футбол; Примера; Севилья - Атлетико; 4 апреля 22:00;"
                  defaultValue={ props.textareaDefaultVal } />
        <button>Сгенерировать макеты</button>
      </form>
    </>
  );
};

export default SportEventsForm;