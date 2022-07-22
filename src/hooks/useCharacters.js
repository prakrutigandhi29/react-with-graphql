import { gql, useQuery } from '@apollo/client'
const GET_ITEMS=gql`
query{
    characters{
        results{
            id,
            name,
            image
        }
    }
}`


export const useCharacters=()=>{
    const {error,loading,data}=useQuery(GET_ITEMS);

    return{error,loading,data};
}