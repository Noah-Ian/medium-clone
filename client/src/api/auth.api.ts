import api from "./api";

//register user
export async function registerUser(data:
    {
        name:string;
        email:string;
        password:string;
    }
){
    const response = await api.post(
        "/auth/register",
        data
    );

    return response.data;
}

//login user
export async function loginUser(data:
    {
        email:string;
        password:string;
    }
){

    const response = await api.post(
        "/auth/login",
        data
    );

    return response.data;
}