import SideBar from "../Core/SideBar";
import Filters from "../filters/Filters";

export default function SideDrawer ({isSideBarOpen} : {isSideBarOpen : boolean}) {
    return <SideBar className= "menu-sidebar" isSideBarOpen={isSideBarOpen}>
        <Filters />
    </SideBar>
}