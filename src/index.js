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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/Login' element={ <LoginPage/> } />
        <Route path='/Carrito' element={ <carrito/> } />
        <Route path='/Restaurantes/restaurant' element={ <Restaurant/> } />
        <Route path= '/Cliente/estado_pedido' element={ <Estado_pedido/>}/>
        <Route path='/Req3' element = {<Req3/>}/>
        <Route path='/Req4' element = {<Req4/>}/>

        <Route path='/Restaurantes/registrar_entrega' element = {<Entrega_pedido/>}/>
        <Route path='/Restaurantes/registro_pedido' element = {<Registro_pedido/>}/>
        <Route path='/recomendaciones/recomendaciones' element={<Recomendaciones/>}/>
        <Route path='/Restaurantes/Ver_pedido' element = {<Ver_Pedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//\Restaurantes\estado_pedido.jsx