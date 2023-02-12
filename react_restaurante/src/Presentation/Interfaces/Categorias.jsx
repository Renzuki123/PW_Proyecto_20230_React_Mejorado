import "./Categorias.css"

function Categorias(){
    return (

        

        <div class="cat">

            <header className="head1">
            
              <nav>
              
                <a href="/main" >Inicio </a>
                <a href="/categorias"> Categorías  </a>
                <a href="/registro"> Registro </a>
                <a href="/ordenes"> Ordenes </a>
              
              </nav>
           
            </header>

        <table class="table" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category</th> 
              <th scope="col">Dish</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Peruvian</td>
              <td>Lomo Saltado (Stir Fried Beef) </td>
           
            </tr>
            <tr>
              <td>2</td>
              <td>Peruvian</td>
              <td>Causa (Potato Casserole)</td>
           
            </tr>
            <tr>
              <td>3</td>
              <td>Japanese</td>
              <td>Sushi</td>
           
            </tr>
            <tr>
              <td>4</td>
              <td>Mexican</td>
              <td>Cesar Salad</td>
           
            </tr>
            <tr>
              <td>5</td>
              <td>Italian</td>
              <td>Pizza</td>
            </tr>
  
            <tr>
              <td>6</td>
              <td>Italian</td>
              <td>Green noodles</td>
            </tr>
  
            <tr>
              <td>7</td>
              <td>Italian</td>
              <td>Lasagna Bolognese</td>
            </tr>
  
            <tr>
              <td>8</td>
              <td>Spanish</td>
              <td>Tortilla</td>
            </tr>
  
            <tr>
              <td>9</td>
              <td>Spanish</td>
              <td>Bacalao</td>
            </tr>
           
          </tbody>
        </table>
      </div>
  )
}

export default Categorias