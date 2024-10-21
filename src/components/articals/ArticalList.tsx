import './ArticalList.scss'
import { ArticleListType } from './ArticalsSection'
import articalImage from '../../assets/articalImage.png'
export default function ArticleList({title, author, body, date, image, url, source} : ArticleListType) {
    const ModifiedBody = body.slice(3).slice(0, -4); // To remove p tags from response.
    return (
        <li className="article-list">
            <article className='article-content'>
                <div className='article-content__imgwrapper'>
                        <img alt="Image" src={articalImage}/>
                    <div className='article-title'>
                        <div className='category-date'>
                            <span>{date}</span>
                            <span>
                                {source}
                            </span>
                        </div>
                        <div className='bio'>
                            {title}
                        </div>
                    </div>
                </div>
                <p className='article-list__bio'>
                    {ModifiedBody}
                </p>
                <span className='article-author'>
                 {author}
                </span>

            </article>
        </li>
    )
}