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
