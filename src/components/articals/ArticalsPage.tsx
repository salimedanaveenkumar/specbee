import ArticleList from "./ArticalList";
import { useState } from "react";
import { ArticleListType } from "./ArticalsSection";
import './ArticalsPage.scss';
const ARTICLES_PER_PAGE = 5;

export type ArticalsPageType = {
    list: ArticleListType[]
}

export default function ArticalsPage({ list }: ArticalsPageType) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(list.length / ARTICLES_PER_PAGE);
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const currentArticles = list.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <>
            <ul className="article-lists">
                {
                    currentArticles.map((article) => {
                        const { title, author, body, date, image, url, source } = article;
                        return (
                            <ArticleList key={title} author={author} body={body} date={date} image={image} url={url} source={source} title={title} />
                        )
                    })
                }
            </ul>
            <div className="nextpage-button">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    {"<"}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    {">"}
                </button>
            </div>
        </>

    )
}