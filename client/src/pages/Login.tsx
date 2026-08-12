import { useState } from "react";
import { loginUser } from "../api/auth.api";

function Login(){
    const[form,setForm] = useState({
        email:"",
        password:""
    });

    async function handleSubmit(
        e:React.FormEvent
    ){
        e.preventDefault();

        const result = await loginUser(form);

        localStorage.setItem(
            "token",
            result.token
        );

        console.log (result);
    }

    return(
        <div className="flex justify-center mt-20">

            <form 
            onSubmit={handleSubmit}
            className="space-y-4 w-96"
            >
                <h1 className="text-3xl font-bold">
                    Login
                </h1>

                <input 
                className="border p-2 w-full"
                placeholder="Email"

                onChange={(e)=>
                    setForm({
                        ...form,
                        email:e.target.value
                    })
                }
                />

                <input
                className="border p-2 w-full"
                placeholder="Password"
                type="password"

                onChange={(e)=>
                    setForm({
                        ...form,
                        password:e.target.value
                    })
                }
                />

                <button 
                className="bg-black text-white px-4 py-2"
                >
                    Login
                </button>

            </form>

        </div>
    )

}

export default Login;