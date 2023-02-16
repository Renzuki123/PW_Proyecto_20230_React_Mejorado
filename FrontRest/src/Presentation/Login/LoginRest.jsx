import { useNavigate } from "react-router-dom"
import LoginRestForm from "./LoginRestForm"

function LoginRest(){

    const navigate = useNavigate() //Hook , objeto que me va a permitir modificar la localización de mi página

    const onLoginOk = function(user,password){
        
        if(user==="pedro" && password=== "pedro2023"){
           
             navigate("/main")
        }
       
    }

    return <div className="container"> 
    <div className="row">
        <div className="col"> </div>
        <div className="col"> 

            <LoginRestForm onLoginOk={onLoginOk} /> {/**Lo paso como prop al hijo */}

        

           </div>

           <div className="col"></div>
        
        </div>
        </div>


}
export default LoginRest