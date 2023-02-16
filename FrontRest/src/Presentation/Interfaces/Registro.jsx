import React, { useState } from 'react';

function Registro() {

    //Variables de estado :acá las uso para para mantener el estado de la categoría 
   // y el plato que se están ingresando en el formulario y para mantener 
    //una lista de todos los elementos del menú.
    const [category, setCategory] = useState('');
    const [dish, setDish] = useState('');
    const [menu, setMenu] = useState([]);

    //Acá está el "handleSubmit" que se llama cuando se envía el formulario. Esta función previen
    //agrega un nuevo elemento al menú 
    //(que es un objeto con una categoría y un plato en el presente caso)
    const handleSubmit = (e) => {
        //La función toma como argumento "e", que es un evento, y usa 
        //"e.preventDefault()" para prevenir el comportamiento predeterminado de submit.

        e.preventDefault();
        setMenu([...menu, { category, dish }]);
        //La función luego usa "setMenu" para actualizar el estado "menu" agregando
        // un nuevo objeto que contiene la categoria y el plato que fueron ingresados por el usuario
        //. Esto se logra utilizando "..." porque este operador se enccsarga de incluir todos los elementos existentes en "menu" 
        //y agregando el nuevo objeto al final de todo y así se logra la funciuonalidad que pide.
        setCategory('');
        setDish('');
        // "setCategory" y "setDish" los uso acá para establecer ambos valores en '' para vaciar los campos de entrada.
    };
    //Luego básicamente La tabla se renderiza en el HTML utilizando
    // la función "map" de JavaScript que recorre la lista de menús y 
    //crea una fila en la tabla para cada elemento.
    return (
        <div>
            <header className="head1">
                <nav>
                    <a href="/main">Inicio </a>
                    <a href="/categorias">Categorías </a>
                    <a href="/registro">Registro </a>
                    <a href="/ordenes">Ordenes </a>
                </nav>
            </header>
            <div className="div2">
                <form onSubmit={handleSubmit}>
                    <label className="cat1">Category: </label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <br />
                    <label className="dish1">Dish:</label>
                    <input
                        type="text"
                        value={dish}
                        onChange={(e) => setDish(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className="but1" type="submit">
                        Add to the menu
                    </button>
                </form>
            </div>
            <br />
            <div className="cat">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Dish</th>
                        </tr>
                    </thead>
                    <tbody>
            <tr>
             
              <td>Peruvian</td>
              <td>Lomo Saltado (Stir Fried Beef) </td>
           
            </tr>
            <tr>
              
              <td>Peruvian</td>
              <td>Causa (Potato Casserole)</td>
           
            </tr>
            <tr>
           
              <td>Japanese</td>
              <td>Sushi</td>
           
            </tr>
            <tr>
             
              <td>Mexican</td>
              <td>Cesar Salad</td>
           
            </tr>
            <tr>
             
              <td>Italian</td>
              <td>Pizza</td>
            </tr>
  
            <tr>
            
              <td>Italian</td>
              <td>Green noodles</td>
            </tr>
  
            <tr>
              
              <td>Italian</td>
              <td>Lasagna Bolognese</td>
            </tr>
  
            <tr>
             
              <td>Spanish</td>
              <td>Tortilla</td>
            </tr>
  
            <tr>
              
              <td>Spanish</td>
              <td>Bacalao</td>
            </tr>
           
          </tbody>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={index}>
                                <td>{item.category}</td>
                                <td>{item.dish}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
  
  export default Registro;