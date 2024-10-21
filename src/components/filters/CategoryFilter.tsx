import CheckBox from "../Core/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Core/Card";
import { IntialStateType, articleSliceActions } from "../../store/article-slice";
import './CategoryFilter.scss'

export default function CategoryFilter() {
    const toggleCategories = useSelector((state : IntialStateType) => state.checkedItems.toggleCategories)
    const dispatch = useDispatch()
    const filterHandler = (label: string) => {
        dispatch(articleSliceActions.categoryFilter({
            sec : 'toggleCategories',
            label : label
        }));
    }
    return (
        <Card label="Category">
            <ul className="category-list">
                <li className="checkbox">
                    <CheckBox label="Benzinga" sortHandler={() => filterHandler("Benzinga")} isChecked={toggleCategories.Benzinga} />
                </li>
                <li className="checkbox">
                    <CheckBox label="Lambda" sortHandler={() => filterHandler("Lambda")} isChecked={toggleCategories.Lambda} />
                </li>
                <li className="checkbox">
                    <CheckBox label="Delta" sortHandler={() => filterHandler("Delta")} isChecked={toggleCategories.Delta} />
                </li>
                <li className="checkbox">
                    <CheckBox label="Gamma" sortHandler={() => filterHandler("Gamma")} isChecked={toggleCategories.Gamma} />
                </li>
            </ul>
        </Card>

    )
}