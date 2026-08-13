import { Link } from "react-router-dom";

export function Navbar(){
    
    return(
        <nav className="border-b p-5 flex justify-between">

            <Link
            to="/"
            className="text-2xl font-bold"
            >
                Medium Clone
            </Link>

            <div className="space-x-5">

                <Link
                to="/write"
                >
                    Write
                </Link>

                <Link to="/login">
                Login
                </Link>

                <Link to="/register">
                Register
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;