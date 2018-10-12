export default [
    {
      "UID": 1111,
      "SolutionID": "SAN-1111",
      "SolDescription": "3X Base & a Conf system",
      "Business Name": "SANTA CLARA VALLEY TECHNOLOGY SPECIALISTS",
      "Sites": 1,
      "User": 4,
      "Devices": 5,
      "Created": "4/25/2017",
      "last edition": "4/30/2017 8:42 AM",
      "Status": "ACTIVE",
      "Author": "Josh McDonald",
      "BillingID": "MA187844",
      "": ""
    },
    {
      "UID": 1112,
      "SolutionID": "PRE-1112",
      "SolDescription": "3X Base & a Conf system",
      "Business Name": "PRECISION PRODUCTS",
      "Sites": 1,
      "User": 6,
      "Devices": 5,
      "Created": "8/21/2018",
      "last edition": "8/25/2017 3:40 PM",
      "Status": "DESIGN",
      "Author": "Curtis Wingett",
      "BillingID": "",
      "": ""
    },
    {
      "UID": 1113,
      "SolutionID": "UNI-1113",
      "SolDescription": "Key Sys for Botany Lab",
      "Business Name": "UNIVERSITY BIOMEDICAL MATERIALS",
      "Sites": 1,
      "User": 8,
      "Devices": 3,
      "Created": "8/27/2018",
      "last edition": "9/12/2018 11:13 AM",
      "Status": "DESIGN",
      "Author": "Greg Rogers",
      "BillingID": "",
      "": ""
    },
    {
      "UID": 1114,
      "SolutionID": "GRE-1114",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "GREAT LAKES LABORATORY EQUIPMENT MANUFACTURERS",
      "Sites": 1,
      "User": 3,
      "Devices": 7,
      "Created": "11/21/2017",
      "last edition": "9/12/2018 11:13 AM",
      "Status": "ACTIVE",
      "Author": "Josh McDonald",
      "BillingID": "MA234564",
      "": ""
    },
    {
      "UID": 1115,
      "SolutionID": "LON-1115",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "LONE STAR STATE RESEARCH SUPPLIERS",
      "Sites": 1,
      "User": 6,
      "Devices": 11,
      "Created": "6/21/2018",
      "last edition": "6/27/2018 10:10 AM",
      "Status": "CUSTOMER REVIEW - WITH CUSTOMER",
      "Author": "Greg Rogers",
      "BillingID": "",
      "": ""
    },
    {
      "UID": 1116,
      "SolutionID": "TWE-1116",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "TWENTY-FIRST CENTURY MATERIALS",
      "Sites": 1,
      "User": 8,
      "Devices": 8,
      "Created": "2/2/2018",
      "last edition": "22/3/2018 4:43 PM",
      "Status": "NOT ACTIVE",
      "Author": "Greg Rogers",
      "BillingID": "",
      "": ""
    },
    {
      "UID": 1117,
      "SolutionID": "SAN-1117",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "SAN JOAQUIN SCIENTIFIC AND INDUSTRIAL SUPPLY",
      "Sites": "INC.",
      "User": 1,
      "Devices": 22,
      "Created": 20,
      "last edition": "11/21/2017",
      "Status": "22/3/2018 4:43 PM",
      "Author": "NOT ACTIVE",
      "BillingID": "Josh McDonald",
      "": ""
    },
    {
      "UID": 1118,
      "SolutionID": "McD-1118",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "McDonald LAKES",
      "Sites": 1,
      "User": 6,
      "Devices": 11,
      "Created": "2/5/2018",
      "last edition": "22/6/2018 4:43 PM",
      "Status": "CUSTOMER REVIEW - REJECTED",
      "Author": "Curtis Wingett",
      "BillingID": "",
      "": ""
    },
    {
      "UID": 1119,
      "SolutionID": "LON-1119",
      "SolDescription": "KKKdsjhsdjkahdkhsdhdjskhdsjhdsk",
      "Business Name": "LONE STAR STATE RESEARCH SUPPLIERS",
      "Sites": 1,
      "User": 8,
      "Devices": 8,
      "Created": "18/5/2018",
      "last edition": "18/6/2018 2:56 PM",
      "Status": "CUSTOMER REVIEW - APPROVED",
      "Author": "Greg Rogers",
      "BillingID": "",
      "": ""
    }
  ]

  // https://material-ui.com/page-layout-examples/sign-in/
  // React Tutorial
  // https://www.apollographql.com/docs/react/api/react-apollo.html
// https://tylermcginnis.com/building-serverless-react-graphql-apps-with-aws-appsync/


// No such key specified 403 error in aws- include index.html as error file in aws s3 bucket

// AWS serve limits
// https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html

// https://blog.senacor.com/a-keen-introduction-to-dynamodb/

// DynamoDB tutorial
// https://www.dynamodbguide.com/filtering

// Resolvers mapping
// https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html#aws-appsync-resolver-mapping-template-reference-dynamodb-filter

// Working with scan
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html

// AWS Primary and Secondary Key
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

// Resolver template
// https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html

// get item using idex
// https://stackoverflow.com/questions/52077167/appsync-query-on-global-secondary-index

// Error while using global secondary index-
// aws Unable to parse the JSON document: 'Unexpected character ('\"' (code 34)
// This error due to missing comma in resolver template-

//  Example of using global secondary index-
/* 

Resolver Template-
{
    "version" : "2017-02-28",
    "operation" : "Query",
    "index": "businessName-index",
    "query" : {
        ## Provide a query expression. **
        "expression": "#businessName = :businessName",
        "expressionNames" : {
        "#businessName" : "businessName"
        },
        "expressionValues" : {
            ":businessName" : {
             "S" :  "${ctx.args.businessName}"
            }
        }
    }
}

Response mapping template-
#if($ctx.result.items.size() > 0)
  $util.toJson($ctx.result.items[0])
#else
  null
#end
 */

//  Building serverless React Graphql applications with AWS Appsync
// https://tylermcginnis.com/building-serverless-react-graphql-apps-with-aws-appsync/


// React new features for 16.4
// https://hackernoon.com/react-16-0-16-3-new-features-for-every-day-use-f397da374acf

// Reset Password AWS tutorial
// https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool-password-reset.html

// AWS Auth amplify
// https://aws-amplify.github.io/amplify-js/media/authentication_guide