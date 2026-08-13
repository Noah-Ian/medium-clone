import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/article.api";
import ArticleCard from "../components/ArticleCard";

function Home(){
    const{data, isLoading}=useQuery({
        queryKey:["articles"],
        queryFn:getArticles
    });

    if(isLoading){
        return <div>
            Loading...      
        </div>
    }

    return(

    <div className="max-w-3xl mx-auto mt-10">


    <h1 className="text-4xl font-bold mb-8">

    Latest Stories

    </h1>

    {

    data?.map((article:any)=>(

    <ArticleCard

    key={article.id}

    article={article}

    />

    ))

    }

    </div>
    )
}

export default Home;