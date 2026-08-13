import type React from "react";
import Navbar from "../components/Navbar";

function Mainlayout({
    children
}:{children:React.ReactNode}
){
    return(
        <>
        <Navbar/>

        {children}
        </>
    )
}

export default Mainlayout;