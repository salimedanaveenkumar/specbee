import { Link } from "react-router-dom"
export default function Error () {
    return (
        <main>
            <h1>An Error Occured!!</h1>
            <p>Could not find this page.<Link to="/">HomePage</Link></p>
        </main>
    )
}