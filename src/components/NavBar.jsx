import React from "react"
import { Link } from "react-router-dom"

export default function NavBar()
{
    return(
        <nav>
            <h2>Logo</h2>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/service"}>Service</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>

        </nav>

    )
}