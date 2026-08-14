import api from "./api"

export async function createComment(
    articleId:string,
    content:string
){
    const token = localStorage.getItem("token");

    const response = await api.post(
        `/comments/${articleId}`,

        {
            content

        },
        {
            headers:{
                "Authorization":
                `Bearer ${token}`
            }
            
        }
    );

    return response.data;
}

export async function getComments(
    articleId: string
){
    const response = await api.get(
        `/comments/${articleId}`
    );

    return response.data;
}