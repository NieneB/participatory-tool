import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div id="main-content">
            <h2>Page not found!</h2>
            <p>We are sorry.. </p>
            <p>Got to the <Link to='/'>Hompage </Link> and please try again! </p>
        </div>
    )
}