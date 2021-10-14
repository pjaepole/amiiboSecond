import React, {useEffect, useState} from "react";
import './App.css';
import Amiibo from "./amiibo";
import styled from "styled-components";

const App =()=> {
  useEffect(()=>{
    getAmiibo();
  },[])
  const [amiibos, setAmiibos]= useState([]);
  const [search, setSearch]=useState('');
  


  const getAmiibo= async()=>{
    const response = await fetch('https://amiiboapi.com/api/amiibo/');
    const data = await response.json();
    
    console.log(data)


    setAmiibos(data.amiibo.slice(0,50));

  }
  const figures=amiibos.filter(function(amiibo){
    return amiibo.type==="Figure";
  });


const updateSearch= event=>{
  setSearch(event.target.value)
}
  const StyledApp=styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin:1% 1%;
  `
  const StyledNav=styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  `

  const AtagDiv=styled.div`
  width:50%;
  display:flex;
  justify-content:space-evenly;
 
  align-items:center;
  `
  return (
    <div className="App">
      <StyledNav>
        
        <img alt="logoimg" src={process.env.PUBLIC_URL + '/logo-amiibo-glow.png'}></img>
  <form className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">reset</button>
     </form>

        <AtagDiv>
        <a href="google.com">what is amiibo?</a>
        <a href="google.com">Lineup</a>
        <a href="google.com">FAQ</a>
        <a href="google.com">Buy now</a>
        </AtagDiv>
      </StyledNav>

   

      <StyledApp>
     {figures.filter((val)=>{
       if (setSearch===""){
         return val
       }else if(val.character.trim().toLowerCase().includes(search.toLowerCase())){
         return val
       }
     }).map(amiibo=>(
        <Amiibo key={amiibo.tail} character={amiibo.character} image={amiibo.image} game={amiibo.gameSeries}/>
      ))}
     </StyledApp>


      
    </div>
  );
}

export default App;
