import {
Navigate
} from "react-router-dom";


import {
useAuth
} from "../context/AuthContext.context";



function ProtectedRoute({

children

}:{

children:React.ReactNode

}){


const {
token
}=useAuth();

console.log("ProtectedRoute token:", token);

if(!token){

return <Navigate to="/login" replace/>

}



return children;


}



export default ProtectedRoute;