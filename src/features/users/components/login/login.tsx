import { SyntheticEvent, useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { create, remove } from '../../slice/usersSlice';
export function Login() {
  const initialLoginData = {
    name: '',
    passwd: '',
  };
  const [loginData, setLoginData] = useState(initialLoginData);

  const dispacher = useDispatch();

  const handleChange = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    setLoginData({
      ...loginData,
      [input.name]: input.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    dispacher(create(loginData));
    form.reset();
  };

  const handleLogout = () => {
    dispacher(remove());
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="passwd"
          name="passwd"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}
