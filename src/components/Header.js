import styled from "styled-components";
const Header=()=>{
    const AtagDiv=styled.div`
    width:50%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    `
    return(
        <AtagDiv>
            <a href="google.com">what is amiibo?</a>
            <a href="google.com">Lineup</a>
            <a href="google.com">FAQ</a>
            <a href="google.com">Buy now</a>
        </AtagDiv>
    )
}

export default Header