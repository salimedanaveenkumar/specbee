import './Filters.scss'
import AuthorFilter from './AuthorFilter'
import CategoryFilter from './CategoryFilter'
import SortFilter from './sortFilter'
export default function Filters () {
    return (
            <div className='sidebar__main'>
            <CategoryFilter />
            <AuthorFilter/>
            <SortFilter />
            </div>
    )
}