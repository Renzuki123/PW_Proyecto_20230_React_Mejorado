import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Login/LoginPage';
import MainPage from './MainPage/MainPage';
import Restaurant from './Restaurantes/restaurant';
import Estado_pedido from './Restaurantes/estado_pedido';
import Entrega_pedido from './Restaurantes/registrar_entrega';
import Registro_pedido from './Restaurantes/registrar_pedido';
import Recomendaciones from './recomendaciones/Recomendaciones';
import Ver_Pedido from './Restaurantes/ver_pedido'
import './index.css';
import Req3 from './Req3/Req3';
import Req4 from './Req4/Req4';

// SOLIMANO
import LoginRest from './Presentation/Login/LoginRest';
import Main from './Presentation/Main/Main';
import Categorias from './Presentation/Interfaces/Categorias';
import Ordenes from './Presentation/Interfaces/Ordenes';
import Registro from './Presentation/Interfaces/Registro';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/PW_Proyecto_20230_React_Mejorado/' element={ <MainPage/> } />
        <Route path='/PW_Proyecto_20230_React_Mejorado/Carrito' element={ <carrito/> } />
        <Route path='/PW_Proyecto_20230_React_Mejorado/Restaurantes/restaurant' element={ <Restaurant/> } />
        <Route path= '/PW_Proyecto_20230_React_Mejorado/Cliente/estado_pedido' element={ <Estado_pedido/>}/>

        <Route path='/PW_Proyecto_20230_React_Mejorado/Login' element={ <LoginPage/> } />
        <Route path='/PW_Proyecto_20230_React_Mejorado/Req3' element = {<Req3/>}/>
        <Route path='/PW_Proyecto_20230_React_Mejorado/Req4' element = {<Req4/>}/>

        <Route path='/PW_Proyecto_20230_React_Mejorado/Restaurantes/registrar_entrega' element = {<Entrega_pedido/>}/>
        <Route path='/PW_Proyecto_20230_React_Mejorado/Cliente/registro_pedido' element = {<Registro_pedido/>}/>
        <Route path='/PW_Proyecto_20230_React_Mejorado/recomendaciones/recomendaciones' element={<Recomendaciones/>}/>
        <Route path='/PW_Proyecto_20230_React_Mejorado/Restaurantes/Ver_pedido' element = {<Ver_Pedido/>}/>

        <Route path ='/PW_Proyecto_20230_React_Mejorado/' element={<LoginRest/>}></Route> {/**Esto hará que cargue el loginPage  */}
        <Route path ='/PW_Proyecto_20230_React_Mejorado/main' element={<Main/>}></Route>
        <Route path ='/PW_Proyecto_20230_React_Mejorado/categorias' element={<Categorias/>}></Route>
        <Route path ='/PW_Proyecto_20230_React_Mejorado/ordenes' element={<Ordenes/>}></Route>
        <Route path ='/PW_Proyecto_20230_React_Mejorado/registro' element={<Registro/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//\Restaurantes\estado_pedido.jsx