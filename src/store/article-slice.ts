import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleListType } from '../components/articals/ArticalsSection';
import { sortByDate, sortByTitle } from '../helper';
import { current } from '@reduxjs/toolkit';

export type ToggleCategories = {
    "Benzinga": boolean,
    "Lambda": boolean,
    "Delta": boolean,
    "Gamma": boolean
}

export type ToggleAuthor = {
    "Benzinga Neuro": boolean,
    "Werder Helmner": boolean,
    "Patrick Wilson": boolean
}

export type ToggleSort = {
    "date": boolean,
    "Title": boolean
}

export type ToggleFilterType = {
    toggleCategories: ToggleCategories,
    toggleAuthor: ToggleAuthor,
    toggleSort: ToggleSort
}


export type IntialStateType = {
    items: ArticleListType[],
    filteredItems: ArticleListType[],
    checkedItems: ToggleFilterType,
}

const INTIAL_STATE: IntialStateType = {
    items: [],
    filteredItems: [],
    checkedItems: {
        toggleCategories: {
            "Benzinga": false,
            "Lambda": false,
            "Delta": false,
            "Gamma": false
        },
        toggleAuthor: {
            "Benzinga Neuro": false,
            "Werder Helmner": false,
            "Patrick Wilson": false
        },
        toggleSort: {
            "date": false,
            "Title": false
        },
    }
}

export const articleSlice = createSlice({
    name: "article",
    initialState: INTIAL_STATE,
    reducers: {
        setData(state, action) {

            const fetchData: ArticleListType[] = action.payload.data;
            state.items = [...fetchData];
            state.filteredItems = [...fetchData];
        },
        sortArticles(state, action) {
            console.log("lll", state.items)
            let sortedList;
            let { toggleSort } = state.checkedItems
            if (action.payload === 'date') {
                toggleSort.date = !toggleSort.date;
                if (toggleSort.date) {
                    toggleSort.Title = false;
                }
                sortedList = sortByDate(state.filteredItems);
            }
            else {
                toggleSort.Title = !toggleSort.Title
                if (toggleSort.Title) {
                    toggleSort.date = false;
                }
                sortedList = sortByTitle(state.filteredItems);
            }
            state.filteredItems = [...sortedList];
        },
        categoryFilter(state, action: PayloadAction<{ sec: keyof ToggleFilterType; label: string }>) {
            const data = current(state)
            const secKey = action.payload.sec;
            if (secKey === 'toggleCategories') {
                const labelKey = action.payload.label as keyof ToggleCategories;
        
                const immutableCheckedItems: ToggleFilterType = {
                    ...data.checkedItems,
                    [secKey]: {
                        ...data.checkedItems[secKey],
                        [labelKey]: !data.checkedItems.toggleCategories[labelKey]
                    }
                };
                
                const authorFilteredArray: ArticleListType[] = data.items.filter(item =>
                    immutableCheckedItems.toggleAuthor[item.author as keyof ToggleAuthor]
                );
        
                const categoryFilteredArray: ArticleListType[] = authorFilteredArray.length > 0
                    ? authorFilteredArray.filter(article =>
                        immutableCheckedItems.toggleCategories[article.source as keyof ToggleCategories]
                      )
                    : state.items.filter(article =>
                        immutableCheckedItems.toggleCategories[article.source as keyof ToggleCategories]
                    );
        
                state.filteredItems = !immutableCheckedItems[secKey][labelKey] && categoryFilteredArray.length === 0
                    ? [...state.items]
                    : [...categoryFilteredArray];
        
                state.checkedItems[secKey][labelKey] = !state.checkedItems[secKey][labelKey];
            }
        
            if (secKey === 'toggleAuthor') {
                const labelKey = action.payload.label as keyof ToggleAuthor;
        
                const immutableCheckedItems: ToggleFilterType = {
                    ...state.checkedItems,
                    [secKey]: {
                        ...state.checkedItems[secKey],
                        [labelKey]: !state.checkedItems.toggleAuthor[labelKey]
                    }
                };
        
                const categoryFilteredArray: ArticleListType[] = state.items.filter(item =>
                    immutableCheckedItems.toggleCategories[item.source as keyof ToggleCategories]
                );
        
                const authorFilteredArray: ArticleListType[] = categoryFilteredArray.length > 0
                    ? categoryFilteredArray.filter(article =>
                        immutableCheckedItems.toggleAuthor[article.author as keyof ToggleAuthor]
                      )
                    : state.items.filter(article =>
                        immutableCheckedItems.toggleAuthor[article.author as keyof ToggleAuthor]
                      );
        
                state.filteredItems = !immutableCheckedItems[secKey][labelKey] && authorFilteredArray.length === 0
                    ? [...state.items]
                    : [...authorFilteredArray];
        
                state.checkedItems[secKey][labelKey] = !state.checkedItems[secKey][labelKey];
            }
        },
        searchFilter(state, action:PayloadAction<string>) {
            const searchStr = action.payload.trim().toLocaleLowerCase();
            const newArr: ArticleListType[]= state.items.filter((article) =>  article.title.toLowerCase().includes(searchStr))
            state.filteredItems = newArr;
        }
    }
})



export const articleSliceActions = articleSlice.actions;
export const { reducer } = articleSlice;

