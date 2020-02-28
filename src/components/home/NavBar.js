import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.div`
display: flex;
justify-content: space-around;
`

export default function Navbar() {
    return (

    <Fragment>
        <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign-Up!</Link>
            <Link to='/login'>Log-in!</Link>
        </Navigation>

    </Fragment>
    )

}