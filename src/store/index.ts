import { configureStore } from "@reduxjs/toolkit";
import { reducer as articleReducer } from "./article-slice";
import { articleSliceActions } from "./article-slice";
const store = configureStore({
    reducer : articleReducer
})

export const articleThunk = () => {
    return  async (dispatch: typeof store.dispatch) => {

        try {
            const response = await fetch("https://dummy-rest-api.specbee.site/api/v1/news");
            if (!response.ok) {
                // throw new Error(`Error ${response.status} failed to fetch articles`)
            }
            const articlesData = await response.json()
            dispatch(articleSliceActions.setData({
                data : articlesData
            }))
        }
    
        catch (error) {
            // throw new Error("Something went wrong while loading articles");
        }
    }
}

export default store;