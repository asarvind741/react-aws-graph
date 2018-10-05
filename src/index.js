import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import Client from 'aws-appsync';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import AWSAppSyncClient from "aws-appsync";
import { Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import ReduxPromise from 'redux-promise';

import AppSync from './AppSync';
import awsExports from './app-config/aws-exports';

Amplify.configure(awsExports);

/* >>>>>>>Apollo Provide to work with aws<<<<<<< */

// const client = new Client ({
//     url: AppSync.graphqlEndpoint,
//     region: AppSync.region,
//     auth: {
//         type: AppSync.authenticationType,
//         jwtToken: async() => (await Auth.currentSession()).getIdToken().getJwtToken()
//     }
// })

/* >>>>>>>AWSAppSync Client to work with aws and API_KEY authentication<<<<<< */

// const client = new AWSAppSyncClient ({
//     url: AppSync.graphqlEndpoint,
//     region: AppSync.region,
//     auth: {
//         type: AUTH_TYPE.API_KEY,
//         apiKey: AppSync.ApiKey,
//     }
// })

/* >>>>>AWSAppSync client to work with aws and COGNITO USER POOL<<<<< */

const client = new AWSAppSyncClient ({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async() => (await Auth.currentSession()).getIdToken().getJwtToken()
    }
})

// Create middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// Create redux store
const store = createStoreWithMiddleware(rootReducer);


// const app =  (
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )

/* withAuthenticator default authentication provided by AWS-AMPLIFY */

// const AppWithAuth = withAuthenticator(App);



const AppWithApollo = () => (
    <ApolloProvider client={client}> 
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>
)

ReactDOM.render(
<Provider store = { store }>
<BrowserRouter>
<AppWithApollo />
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
