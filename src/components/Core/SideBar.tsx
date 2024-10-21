
import { ReactNode } from "react"
import { createPortal } from "react-dom"
import './SideBar.scss'

type SideDrawerType = {
    children : ReactNode, 
    className : string

}
export default function sideDraw({children, className} : SideDrawerType) {
    return createPortal(<dialog open className={className}>
                    {children}
            </dialog>, document.getElementById("side-drawer")!
        )
}