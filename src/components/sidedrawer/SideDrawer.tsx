import SideBar from "../Core/SideBar";
import Filters from "../filters/Filters";

export default function SideDrawer () {
    return <SideBar className= "menu-sidebar">
        <Filters />
    </SideBar>
}