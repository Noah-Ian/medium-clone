import { useState } from "react";
import { registerUser } from "../api/auth.api";

function Register(){
    const[form, setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    async function handleSubmit(
        e:React.SubmitEvent
    ){
        e.preventDefault();

        const result =
        await registerUser(form);

        console.log(result);
    }

    return(
        <div className="flex justify-center mt-20">

            <form
            onSubmit={handleSubmit}
            className="space-y-4 w-96"
            >

            <h1 className="text-3xl font-bold">
                Create Account
            </h1>

            <input
            className="border p-2 w-full"
            placeholder="Name"

            onChange={(e)=>
                setForm({
                    ...form,
                    name:e.target.value
                })
            }
            />

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
            type="password"
            placeholder="Password"

            onChange={(e)=>
                setForm({
                    ...form,
                    password:e.target.value
                })
            }
            />

            <button
            className="bg-black text-white px-4 py-2">
                Register
            </button>

            </form>

        </div>
    )
}

export default Register;