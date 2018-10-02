import gql from 'graphql-tag'

export const GET_SOLUTION_LIST = gql`
query listSolutions {
    listSolutions {
      items {
        uid
        solutionID
        solutionDesc
        businessName
        sites
        users
        devices
        created
        lastModified
        status
        author
        billingId
      }
  }
  }
`