import GraphQLClient from './client'

const GET_USER = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
      repository(name: "the-road-to-learn-react") {
        name
        url
      }
    }
  }
`;

export function getUser( id ){
  return new Promise((resolve, reject)=>{
    GraphQLClient.post("",
      { 
        query: GET_USER,
        variables: { id: id }
      }
    )
    .then(result=>{
      resolve(result.data)
    })
    .catch(error=>{
      console.error(error);
      reject(error)
    })
  })
}