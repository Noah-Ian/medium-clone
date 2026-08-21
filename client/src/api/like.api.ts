import api from "./api.js";

export async function toggleLike(
    articleId:string
){
    const token = localStorage.getItem("token");

    const response = await api.post(
        `/likes/${articleId}/like`,
        {
            headers:{
                "Authorization":
                `Bearer ${token}`
            }
        }
    )

    return response.data;
}