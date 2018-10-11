import gql from 'graphql-tag'

export const GET_SOLUTION_LIST = gql`
query listSolutions {
    listSolutions {
      items {
        uid
        solutionId
        solutionDescription
        businessName
        sites
        user
        devices
        createdAt
        updatedAt
        status
        author
        billingId
      }
  }
  }
`

export const GET_SOLUTION_BY_ID = gql `
query getSolution($uid: String) {
  getSolution(uid: $uid){
    uid
    solutionId
    solutionDescription
    businessName
    sites
    user
    devices
    createdAt
    updatedAt
    status
    author
    billingId
  }
}
`

export const GET_SOLUTION_BY_STATUS = gql `
query getSolutionByStatus($businessName: String) {
  getSolutionByStatus(businessName: $businessName){
    uid
    solutionId
    solutionDescription
    businessName
    sites
    user
    devices
    createdAt
    updatedAt
    status
    author
    billingId
  }
}
`
