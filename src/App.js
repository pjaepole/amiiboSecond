import React, {useEffect, useState} from "react";
import './App.css';
import Amiibo from "./components/amiibo";
import styled from "styled-components";
import Header from "./components/Header";
const App =()=> {
  useEffect(()=>{
    getAmiibo();
  },[])
 const initialSearchState=({
   aSearch:''
 })
  const [amiibos, setAmiibos]= useState([]);
  const [search, setSearch]=useState(initialSearchState);
  const [filterValue, setFilterValue]=useState('')


  const getAmiibo= async()=>{
    const response = await fetch('https://amiiboapi.com/api/amiibo/');
    const data = await response.json();
    setAmiibos(data.amiibo.slice(0,50));
  }
  const figures=amiibos.filter(function(amiibo){
    return amiibo.type==="Figure";
  });


const updateSearch= (event)=>{
  setSearch({
    ...search,
    [event.target.name]:event.target.value})
}
const handleSearch=()=>{
  setFilterValue(search)
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

  return (
    <div className="App">
      <StyledNav>    
        <img alt="logoimg" src={process.env.PUBLIC_URL + '/logo-amiibo-glow.png'}></img>
        <form className="search-form" >
          <input className="search-bar" type="text" name="aSearch" value={search.aSearch} onChange={updateSearch}/>
          <button onClick={handleSearch}>Search!</button>
          <button  className="search-button" type="submit">reset</button>
        </form>
        <Header/>
      </StyledNav>

   

      <StyledApp>
     {figures.filter((val)=>{
       if (filterValue===""){return val}
       else if(val.character.trim().toLowerCase().includes(filterValue.aSearch.toLowerCase())){return val}
     }).map(amiibo=>(
        <Amiibo key={amiibo.tail} character={amiibo.character} image={amiibo.image} game={amiibo.gameSeries}/>
      ))}
     </StyledApp>


      
    </div>
  );
}

export default App;
