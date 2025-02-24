import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>PAge not found!</h2>
            <p>We are sorry.. </p>
            <p>Got to the <Link to='/'>Hompage </Link> and please try again! </p>
        </div>
    )
}