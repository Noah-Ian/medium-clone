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



if(!token){

return <Navigate to="/login"/>

}



return children;


}



export default ProtectedRoute;