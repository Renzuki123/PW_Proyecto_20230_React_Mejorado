import "./MainRest.css"
import ulimaRest from "./ulimaRest.png";
import mozo from "./mozo.png"


function Main(){
    return (
    
        <div >
          <header className="head1">
            
            <nav>
              
                <a href="/main" >Inicio </a>
                <a href="/categorias"> Categorías  </a>
                <a href="/registro"> Registro </a>
                <a href="/Restaurantes/Ver_pedido"> Ordenes </a>
              
            </nav>
           
          </header>
          <br></br>
          <h1 className="text-center">Bienvenido al portal de restaurantes de la Universidad de Lima</h1>
        <div class="divImg">
           <img className="img1" src={ulimaRest} alt="Pizza" />
           <img className="img2" src={mozo} alt="Pizza" />
           </div>


          <footer class="f1">
          <h2>Contact</h2>
              <p>Si tienes alguna pregunta o quieres hacer una reservación, por favor no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
              <p>Teléfono: (+51) 555-5555</p>
              <p>Email: ulima@restaurantes.com</p>
            <p>&copy; Ulima Restaurantes 2023</p>
          </footer>
        </div>
        
      );
   
}

export default Main