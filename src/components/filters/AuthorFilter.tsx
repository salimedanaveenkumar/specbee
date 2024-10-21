import { IntialStateType, articleSliceActions } from "../../store/article-slice";
import Card from "../Core/Card";
import CheckBox from "../Core/CheckBox";
import { useDispatch, useSelector } from "react-redux";
export default function AuthorFilter() {
    const dispatch = useDispatch();
    const authorCheckState = useSelector((state: IntialStateType) => state.checkedItems.toggleAuthor)
    const sortHandler = (label: string) => {
        dispatch(articleSliceActions.categoryFilter({
            sec : "toggleAuthor",
            label : label
        }))
    }
    return (
        <Card label="Author">

            <ul className="category-list">
                <li>
                    <CheckBox label="Benzinga Neuro" sortHandler={() => sortHandler("Benzinga Neuro")} isChecked={authorCheckState["Benzinga Neuro"]} />
                </li>
                <li>
                    <CheckBox label="Werder Helmner" sortHandler={() => sortHandler("Werder Helmner")} isChecked={authorCheckState["Werder Helmner"]} />
                </li>
                <li>
                    <CheckBox label="Patrick Wilson" sortHandler={() => sortHandler("Patrick Wilson")} isChecked={authorCheckState["Patrick Wilson"]} />
                </li>
            </ul>

        </Card>

    )
}