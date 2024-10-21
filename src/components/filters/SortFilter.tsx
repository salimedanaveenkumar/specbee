import Card from "../Core/Card";
import CheckBox from "../Core/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { articleSliceActions } from "../../store/article-slice";
import { IntialStateType } from "../../store/article-slice";
export default function SortFilter() {
    const toggleSort: { "date": boolean, "Title": boolean } = useSelector((state: IntialStateType) => state.checkedItems.toggleSort)
    const dispatch = useDispatch();
    const sortHandler = (label: string) => {
        dispatch(articleSliceActions.sortArticles(label))
    }
    return (
        <Card label='Sort By'>
            <ul className="category-list">
                <li>
                    <CheckBox label='date' sortHandler={() => sortHandler("date")} isChecked={toggleSort.date} />
                </li>
                <li>
                    <CheckBox label='Title' sortHandler={() => sortHandler("Title")} isChecked={toggleSort.Title} />
                </li>

            </ul>
        </Card>
    )
}