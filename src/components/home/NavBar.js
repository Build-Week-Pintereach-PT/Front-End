import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavButtons from '../NavButtons'
// import Logo from './logo.png'

const Navigation = styled.div`
display: flex;
justify-content: space-around;
`

export default function Navbar() {
    return (

    <Fragment>
        
        <Navigation>
        {/* <img src={Logo} alt="logo" /> */}
            <NavButtons/>
        </Navigation>

    </Fragment>
    )

}