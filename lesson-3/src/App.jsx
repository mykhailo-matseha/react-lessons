import "./App.scss";
import Dance from "./components/Dance/Dance";
import Translator from "./components/Translator/Translator";
function App() {
  return (
    <div className="main-container">
      <div className="task-wrapper">
        <h3>Task 6</h3>
        <p>
          Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у
          обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину
          кнопка «Додати» заблокована. Якщо не вистачає хлопців або дівчат вибір
          також блокується.
        </p>
        <Dance />
      </div>
      <div className="task-wrapper">
        <h3>Task 9</h3>
        <p>
          Перекладач. Користувачу виводять змішані картки з словами на
          англійській і українській мові. Користувач поступово клікає на картки
          (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що
          відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо
          червоною рамкою і через секунду забираємо рамку.
        </p>
        <Translator />
      </div>
    </div>
  );
}

export default App;
