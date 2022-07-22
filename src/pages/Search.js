import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react'

const GET_LOCATIONS=gql`
query GetLocations($name:String!){
    characters(filter:{name:$name}){
        results{
            location{
                name
            }
        }
    }
}
`
function Search() {
    const [name,setName]=useState('');

    const [getLocations,{error,loading,data}]=useLazyQuery(GET_LOCATIONS,{
        variables:{
            name
        }
    })
  return (
    <div>
      <input value={name} onChange={(e)=>setName(e.target.value)} ></input>
      <button onClick={()=>getLocations()}>Search</button>

      {loading && <div>Loading...</div>}
      {error && <div>something went wrong</div>}
      
      {data && <ul>
          {data.characters.results.map((character)=>{
              
              return (
                  <li>
                      {character.location.name}
                  </li>
                
              )
          })}
          </ul>}
    </div>
  )
}

export default Search
