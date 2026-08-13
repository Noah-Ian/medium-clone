import type {Article} from '../types/article';

interface Props{
    article: Article;
}

function ArticleCard({
    article
}:Props): React.ReactElement{
    return(
        <div className="border-b py-6">

        <h1 className='text-2xl font-bold'>
            {article.title}
        </h1>
        
        <p className="text-gray-600 mt-2">

        {article.content.substring(0,150)}

        ...

        </p>

        <div className="mt-4 text-sm">

        By {article.author.name}

        </div>
        </div>
    )
}

export default ArticleCard;