import GraphQLClient from './client'

const GET_USER = `
  {
    user(login: "nataliajs") {
      name
      url
    }
  }
`;

export function getUser(){
  return new Promise((resolve, reject)=>{
    GraphQLClient.post("",
      { 
        query: GET_USER
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