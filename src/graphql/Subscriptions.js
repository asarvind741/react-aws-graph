import gql from 'graphql-tag';

export const NEW_SOLUTION_SUBSCRIPTION = gql `

subscription createSolution {
    onCreateSolution {
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
`