import GraphQLClient from './client'

const GET_USER = `
  query($user: String!){
    user(login: $user) {
      id
      name
      url
      avatarUrl
      login
      following (first: 10){
        nodes{
            id
            name
            url
            avatarUrl
            login
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
          primaryLanguage{
            color
            id
            name
          }
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
          primaryLanguage{
            color
            id
            name
          }
          homepageUrl
        }
      }      
    }
  }
`;

export function getUser(user){
  const variables = {
    user: user
  }
  return new Promise((resolve, reject)=>{
    GraphQLClient.post("",
      { 
        query: GET_USER,
        variables: variables
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