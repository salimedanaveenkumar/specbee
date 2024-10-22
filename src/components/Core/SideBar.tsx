
import { ReactNode } from "react"
import { createPortal } from "react-dom"
import './SideBar.scss'

type SideDrawerType = {
    children : ReactNode, 
    className : string,
    isSideBarOpen : boolean

}
export default function sideDraw({children, className, isSideBarOpen} : SideDrawerType) {
    return createPortal(<dialog open={isSideBarOpen} className={className}>
                    {children}
            </dialog>, document.getElementById("side-drawer")!
        )
}