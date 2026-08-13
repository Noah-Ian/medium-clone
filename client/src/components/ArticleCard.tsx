import type {Article} from '../types/article';
import { Link } from 'react-router-dom';

interface Props{
    article: Article;
}

function ArticleCard({
    article
}:Props): React.ReactElement{
    return(
        <Link
        to={`/articles/${article.id}`}
        >

        <div className="border-b py-6 cursor-pointer">

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
        </Link>
    )
}

export default ArticleCard;