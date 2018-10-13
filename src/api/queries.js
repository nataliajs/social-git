import GraphQLClient from './client'

const GET_USER = `
  {
    user(login: "nataliajs") {
      id
      name
      url
      following (first: 10){
        nodes{
            id
            name
            url
        }
      }
      organizations(first: 10){
        nodes{
          id
          name
        }
        totalCount
      }
      repositories(first: 10){
        nodes{
          id
          labels(first: 10){
            nodes{
              id
              name
            }
          }
          description
          name
          primaryLanguage
          homepageUrl
        }
      }
      repositoriesContributedTo(first: 10){
        nodes{
          id
          labels(first: 10){
            nodes{
              id
              name
            }
          }
          description
          name
          primaryLanguage
          homepageUrl
        }
      }
      avatarUrl
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