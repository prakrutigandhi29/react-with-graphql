import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import '../css/character.css'
function Character() {
    const {id}=useParams();
    console.log(id)
    const {error,loading,data}=useCharacter(id);
    if(error){return <div>Error</div>}

    if(loading){return <div>Loading...</div>}
    
  return (
    <div className='character'>
      <img src={data.character.image} alt="Character" width={500} height={500}></img>
      <div className='characterDetails'>
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className='characterEpisode'>
          {data.character.episode.map((episode)=>{
              return(
                  <div>{episode.name}-<b>{episode.episode}</b></div>
              )
          })}
          </div>
      </div>
    </div>
  )
}

export default Character
