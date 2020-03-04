import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Card = styled.div`
    display:flex;
    flex-direction: column;
    border: 5px solid pink;
    border-radius: 9px;
    box-shadow: 10px 10px 60px 0px blue;
    margin: 10px;
    padding:10px;
`
const Image = styled.img`
    width: 100%;
`
export default function BoardList(props){
    return(
    
        <CardDiv>
            {props.articles.map((article,index) => {
            return <Card key={index}>
                <h1>Name:{article.name}</h1>
                <Image alt='character' src={article.image}/>
                <p>Currently: {article.status}</p>
                <p>Species: {article.species}</p>
                <p>Location: {article.location.name}</p>
            </Card> 
            })}
        </CardDiv>
    )
}