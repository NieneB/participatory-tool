import { useEffect, useRef } from "react";
import { NavLink , Outlet, useLocation} from "react-router-dom";

export default function RootLayout() {
    const location = useLocation();
    const lastHash = useRef('');
    
    useEffect(() => {
        console.log("location", location)
        if (location.hash) {
          lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }
    
        if (lastHash.current && document.getElementById(lastHash.current)) {
          setTimeout(() => {
            document
              .getElementById(lastHash.current)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastHash.current = '';
          }, 100);
        }
      }, [location]);

    return (
        <div>
            <NavLink to="/" >
                <img id="logo" src='./img/logo-go-cawh.svg' />
            </NavLink >
            <div id="main-content">
                <Outlet />
            </div>
        </div>
    )
}