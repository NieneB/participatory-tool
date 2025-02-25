import {  NavLink , Outlet} from "react-router-dom";

export default function RootLayout() {

    return (
        <div>
            <NavLink to="/" >
                <img id="logo" src='./img/logo-go-cawh.svg' />
            </NavLink >
            <div id="main-content"  >
                <Outlet />
            </div>
        </div>
    )
}