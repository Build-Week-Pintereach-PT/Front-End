import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

    <div>
        <navlink>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign-Up!</Link>
            <Link to='/login'>Log-in!</Link>
        </navlink>

    </div>
    )

}