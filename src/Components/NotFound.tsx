import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{color: 'white'}}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Back to home page:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}