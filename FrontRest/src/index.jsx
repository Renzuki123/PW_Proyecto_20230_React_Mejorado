import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" //npm instal bootstrap --save 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginRest from './Presentation/Login/LoginRest';
import Main from './Presentation/Main/Main';
import Categorias from './Presentation/Interfaces/Categorias';
import Ordenes from './Presentation/Interfaces/Ordenes';
import Registro from './Presentation/Interfaces/Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/**Este componente está disponible luego de instalar el router */}
        <Routes>
              <Route path ='/' element={<LoginRest/>}></Route> {/**Esto hará que cargue el loginPage  */}
              <Route path ='/main' element={<Main/>}></Route>
              <Route path ='/categorias' element={<Categorias/>}></Route>
              <Route path ='/ordenes' element={<Ordenes/>}></Route>
              <Route path ='/registro' element={<Registro/>}></Route>
       

        </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

