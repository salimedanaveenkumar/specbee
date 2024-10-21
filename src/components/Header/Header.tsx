
import './Header.scss'

type HandlerSideBarType = {
    onOpenSideDrawer : () => void
}
export default function Header({onOpenSideDrawer}: HandlerSideBarType) {
    return (
        <div className="main-header">
            <button onClick={onOpenSideDrawer}>
            <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    )
}