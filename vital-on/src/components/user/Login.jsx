import { useForm } from "../../hooks/useForm";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Global } from "../../helpers/Global";

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");

  async function loginUser(e) {
    e.preventDefault();

    // Datos del formulario
    const userToLogin = form;

    // Crea una solicitud HTTP bien estructurada con manejo de errores
    try {
      const response = await fetch(Global.url + "user/login", {
        method: "POST",
        body: JSON.stringify(userToLogin),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Maneja códigos de estado HTTP que no sean 2xx
        throw new Error(
          `El inicio de sesión falló con el estado: ${response.status}`
        );
      }

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSaved("login");
      } else {
        setSaved("error"); // Indica un error de inicio de sesión en el estado
        // Opcionalmente, muestra un mensaje de error al usuario basado en data.message
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error); // Registra el error para depuración
      setSaved("error"); // Indica un error de inicio de sesión en el estado
      // Opcionalmente, muestra un mensaje de error genérico al usuario
    }
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
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
      </form>

      {saved === "login" && <p>Inicio de sesión exitoso!</p>}
      {saved === "error" && <p>Error al iniciar sesión. Inténtalo de nuevo.</p>}
    </div>
  );
};
