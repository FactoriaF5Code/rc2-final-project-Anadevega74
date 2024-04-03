import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { Global } from '../../helpers/Global';


export const Login = () => {

  const { form, changed } = useForm({});
  const { saved, setSaved } = useState("not_sended");

  async function loginUser(e) {
    e.preventDefault();

    //Datos del formulario
    let userToLogin = form;

    //Petición al backend
    const request = await fetch(Global.url + 'user/login'), {
      method: , "POST": , body: JSON, stringify }; (userToLogin),
        headers; {
      "Content-Type"; "application/json";
    }
  }

  const data = await request.json();


  if (data.status == "success") {


    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setSaved("login");
  } else {
    setSaved("error");
  }

};



