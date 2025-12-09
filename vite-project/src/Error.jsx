import { Link } from "react-router-dom"
import './Error.css'

function Error() {
    return (
        <div className="container">
            <div className="error_container">
                <h1>Bad Request</h1>
                <h2>404</h2>
                <p>Page not Found</p>
                <Link to='/'>go back home</Link>

            </div>

        </div>
    )
}
export default Error