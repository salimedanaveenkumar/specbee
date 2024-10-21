
import { ArticleListType } from "./components/articals/ArticalsSection";
export const sortByDate = (array : ArticleListType[]): ArticleListType[] => {
    const newList = [...array.map(item => { return { ...item } })]
    const sortedList = newList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        // Ensure both dates are valid before subtracting them
        if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
          return 0; // If either date is invalid, consider them equal (or handle differently)
        }
        return dateB.getTime() - dateA.getTime();
    });
    return sortedList
}

export const sortByTitle = (array : ArticleListType[]) : ArticleListType[] => {
    const newList = [...array.map(item => { return { ...item } })]
    const sortedList = newList.sort((a, b) => {
        return a.author.localeCompare(b.author)
    });
    return sortedList;
}