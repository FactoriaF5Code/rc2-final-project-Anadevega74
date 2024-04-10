// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Nav } from "./Nav";
import { Global } from "../../../helpers/Global";
import { useForm } from "../../../hooks/useForm";

export const Header = () => {
  return (
    <>
      <header className="layout__navbar">
        <div className="navbar__header">
          <a href="#" className="navbar__title">VITAL ON</a>
        </div>
        <Nav />
      </header>
    </>
  );
};

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");

  async function loginUser(e) {
    e.preventDefault();

    const userToLogin = form;

    try {
      const response = await fetch(Global.url + 'user/login', {
        method: 'POST',
        body: JSON.stringify(userToLogin),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSaved("login");
      } else {
        setSaved("error");
      }
    } catch (error) {
      console.error('Login error:', error);
      setSaved("error");
    }
  }

  return (
    <form onSubmit={loginUser}>
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={changed}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={changed}
      />

      <button type="submit">Iniciar Sesión</button>

      {saved === "login" && <p>Inicio de sesión exitoso!</p>}
      {saved === "error" && <p>Error al iniciar sesión. Inténtalo de nuevo.</p>}
    </form>
  );
};



