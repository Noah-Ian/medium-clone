import { getArticle } from "../api/article.api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Comments from "../components/comments";

function ArticlePage(){
    const {id} = useParams();

    const {
        data,
        isLoading
    } = useQuery({
        queryKey:["article",id],
        queryFn:()=>getArticle(id!)
    });

    
    if(isLoading){
        return <div>
            Loading article...
            </div>
    }

    return(
        <div className="max-w-3xl mx-auto mt-10">
            <Link
            to="/"
            className="text-gray-500"
            >
                Back
            </Link>


            <h1 className="text-5xl font-bold">
               {data.title} 
            </h1>

            <div className="mt-4 text-gray-600">
                By {data.author.name}
            </div>

            {
            data.coverImage&&
            <img
            src={data.coverImage}
            className="mt-8 rounded"
            />
            }

            <div className="mt-8 text-lg leading-8 whitespace-pre-line">
                {data.content}
            </div>

            <Comments

            articleId={data.id}

            />
        </div>
    )
}

export default ArticlePage;
