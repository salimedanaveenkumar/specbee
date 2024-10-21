
import ArticalsPage from "./ArticalsPage";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { articleThunk } from "../../store/index";
import store from "../../store/index";
import { IntialStateType } from "../../store/article-slice";
import SearchBar from "../Core/SearchBar";

export type ArticleListType = {
    title: string,
    url: string,
    image: string,
    date: string,
    body: string,
    source: string,
    author: string,
};

export default function ArticalsSection() {
    const dispatch = useDispatch<typeof store.dispatch>();
    const articlesData: ArticleListType[] = useSelector((state : IntialStateType) => state.filteredItems)
    
    useEffect (() => {
        dispatch(articleThunk())
    }, [dispatch])

    return (
        <div className="pagination">
             <SearchBar />
            {articlesData && articlesData.length > 0 ? <ArticalsPage list = {articlesData}/> : <h3>Articles not found...</h3>}
        </div>
    )
}   

// export const loader = async () => {

//     try {
//         const response = await fetch("https://dummy-rest-api.specbee.site/api/v1/news");
//         if (!response.ok) {
//             throw new Error(`Error ${response.status} failed to fetch articles`)
//         }
//         return response
//     }

//     catch (error) {
//         throw new Error("Something went wrong while loading articles");
//     }
// }