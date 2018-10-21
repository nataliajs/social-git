import GraphQLClient from './client'
import { FOLLOWING_USERS_TOTAL } from "utils/constants"

const GET_USER = `
  query($user: String!, $lastCursor: String){
    user(login: $user) {
      id
      name
      url
      avatarUrl
      login      
      following (first: ${FOLLOWING_USERS_TOTAL} after: $lastCursor){
        totalCount
        edges{
          cursor
          node{
            id
            name
            url
            avatarUrl
            login
            organizations(first: 10){
              totalCount
              nodes{
                id
                name
                url
              }        
            }
            repositories(first: 10){
              totalCount
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
                url
              }
            }
            repositoriesContributedTo(first: 10){
              totalCount
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
                url
              }
            }
          }
        }
      }
      organizations(first: 10){
        totalCount
        nodes{
          id
          name
          url
        }        
      }
      repositories(first: 10){
        totalCount
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
          url
        }
      }
      repositoriesContributedTo(first: 10){
        totalCount
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
          url
        }
      }      
    }
  }
`;

export function getUser(user, lastCursor){
  const variables = {
    user: user,
    lastCursor: lastCursor
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