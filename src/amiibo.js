import React from 'react';
import styled from 'styled-components';

 const Amiibo=(props)=>{
     const {character,image,game}=props;
    

    const StyledAmiibo=styled.div`
    display:flex;   
    border: 0 solid #14213d;
    width:25%;
    padding:1% 1%;
    margin:1%;
    background-color:#e5e5e5;
    color:black;
    &:hover{
        color:#3c6e71;
    }

    `
    const StyledImg=styled.img`
    max-width: 20vh;
    max-height: 20vh;
    object-fit:cover;
    margin:auto;
    transition: transform .4s;

    &:hover{
        transform: scale(1.2);
    }
    `



    return(
        <StyledAmiibo>
            <StyledImg src={image}></StyledImg>
            <div>
                <h1>{character}</h1>
                <p>from {game}</p>
                <p>Checking new change is made on component</p>
            </div>

        </StyledAmiibo>
    );
}

export default Amiibo;
