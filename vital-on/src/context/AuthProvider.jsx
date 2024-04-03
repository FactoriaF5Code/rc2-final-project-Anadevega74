import React from 'react';
import { useState, useEffect, createContext } from React;

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [auth, setAuth] = useState({});

  useEffect(() => {
    authUser();
  },[]);

  const authUser = async() => {
  //Sacar datos usuario identificado del localstorage
  const token = localStorage.getIten("token");
  const user = localStorage.getItem("user");
  //Comprobar si tengo el token y el user
  if(!token || !user){
    return false;
  }  

  //Transformar los datos a un objeto de javascript
  const userObj = JSON.parse(user);
  const userIde = userObj.id;
  //Petición ajax al backend que compruebe el token y que devuelva los datos del usuario
  const request = await fetch(Global.url + "user/profile" + userIde, {
    method: "GET",
    headers: {
        "Content-Type": "appliation/json",
        "Authorization": token
    }

  });
  
  const data = await request.json();

  console.log(data.user);
  
  //Setear el estado de auth
  setAuth(data.user);

  }
}

    return (<AuthContext.Provider
    value={{
        auth,
        setAuth
    }}
    >
        {children}
    </AuthContext.Provider>
    
  )
}
