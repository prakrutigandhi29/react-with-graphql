
import React from 'react'
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters'
import '/Users/prakrutig/Documents/react-with-graphql/src/css/characters.css'

function CharactersList() {
  const {error,loading,data}= useCharacters();
  console.log(error,loading,data);
    if(loading) {
        return <div>Loading...</div>
    }
    if(error){ return <div>Something went wrong</div>}
  return (
    <div className='charactersList'>
      {data.characters.results.map((character)=>{
         
         return( <div key={character.id}>
             <Link to={`/${character.id}`}>
              <img src={character.image} alt="Character"></img>
              <h2>{character.name}</h2>
              </Link>
          </div>)
      })}
    </div>
  )
}

export default CharactersList
