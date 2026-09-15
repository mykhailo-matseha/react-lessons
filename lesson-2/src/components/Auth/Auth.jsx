import { useState } from "react";
import { changeEventHelper } from "../../helpers/data";
import AuthResponse from "./AuthResponse";

const users = [
  { id: 1, username: "alex_dev", password: "Password123!" },
  { id: 2, username: "olena_k", password: "SecurePass#2024" },
  { id: 3, username: "ivan", password: "Qwerty_889" },
  { id: 4, username: "iryna_w", password: "SunShine!99" },
  { id: 5, username: "taras_shev", password: "Secret_Key$42" },
];

function Auth() {
  const [inputsData, setInputsData] = useState(() => ({ login: "", pass: "" }));
  const SPECIAL_USERNAME = "ivan";
  const [status, setStatus] = useState(0);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isUserValid =
      users.find((u) => u.username === inputsData.login.trim())?.password ===
      inputsData.pass;
    if (isUserValid) {
      setStatus(1);
    } else if (inputsData.login.toLowerCase() === SPECIAL_USERNAME) {
      setStatus(2);
    } else {
      setStatus(3);
    }
  };
  const onChangeHandler = (e) => {
    if (status !== 0) setStatus(0);
    setInputsData(changeEventHelper(inputsData, e.target.name, e.target.value));
  };
  return (
    <>
      <div className="form">
        <label>
          Login
          <input
            className="input"
            name="login"
            value={inputsData.login}
            onChange={onChangeHandler}
            type="text"
            placeholder="Введіть логін"
          />
        </label>
        <label>
          Password
          <input
            className="input"
            name="pass"
            value={inputsData.pass}
            onChange={onChangeHandler}
            type="password"
            placeholder="Введіть пароль"
          />
        </label>
        <button onClick={onSubmitHandler}>Login</button>
      </div>
      <AuthResponse status={status} />
    </>
  );
}

export default Auth;
