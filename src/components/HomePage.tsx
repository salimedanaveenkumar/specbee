import ArticalsSection from "./articals/ArticalsSection";
import Filters from "./filters/Filters";
import { Provider } from "react-redux";
import store from "../store";
import './HomePage.scss'
import Header from "./Header/Header";
import { useState } from "react";
import SideDrawer from "./sidedrawer/SideDrawer";
export default function HomePage() {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    function handleOpenSideBar(): void {
        setIsSideBarOpen(prev => !prev)
    }
    return (
        <>
            <Header onOpenSideDrawer={handleOpenSideBar} />
            <Provider store={store}>
                {isSideBarOpen && <SideDrawer />}
                <div className="homePage">
                    <div className="sideDrawer-desktop">
                        <Filters />
                    </div>

                    <ArticalsSection />

                </div>

            </Provider>
        </>
    )
}