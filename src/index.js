import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Login/LoginPage';
import MainPage from './MainPage/MainPage';
import Req4 from './Req4/Req4';
import Restaurant from './Restaurantes/restaurant';
import Estado_pedido from './Restaurantes/estado_pedido';
import Registro_pedido from './Restaurantes/registrar_pedido';
import Recomendaciones from './recomendaciones/Recomendaciones';
import './index.css';
import RESTAURANTES from './Req2/RestaurantesPorCategoria';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/Login' element={ <LoginPage/> } />
        <Route path='/Carrito' element={ <carrito/> } />
        <Route path='/Restaurantes/restaurant' element={ <Restaurant/> } />
        <Route path= '/Restaurantes/estado_pedido' element={ <Estado_pedido/>}/>

        <Route path='/Req2' element = {<RESTAURANTES/>}/>

        <Route path='/Req4' element = {<Req4/>}/>
        <Route path='/Restaurantes/registro_pedido' element = {<Registro_pedido/>}/>
        <Route path='/recomendaciones/recomendaciones' element={<Recomendaciones/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//\Restaurantes\estado_pedido.jsx