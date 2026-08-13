import api from "./api";

export async function getArticles(){

    const response =await api.get(
        "/articles"
    );

    return response.data;
}

export async function getArticle(id:string){
    const response = await api.get(
       `/articles/${id}` 
    );
    return response.data;
}

export async function createArticle(data:{
    title:string;
    content:string;
    coverImage?:string;
}){

    const token = localStorage.getItem("token");
    const response = await api.post(
        "articles/",
        data,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );
    return response.data;
}

