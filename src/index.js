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

import AppSync from './AppSync';
import awsExports from './app-config/aws-exports';

Amplify.configure(awsExports);

const client = new Client ({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AppSync.authenticationType,
        jwtToken: async() => (await Auth.currentSession()).getIdToken().getJwtToken()
    }
})


// const app =  (
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )

const AppWithAuth = withAuthenticator(App);

const AppWithApollo = () => (
    <ApolloProvider client={client}> 
        <Rehydrated>
            <AppWithAuth />
        </Rehydrated>
    </ApolloProvider>
)

ReactDOM.render(
<BrowserRouter>
<AppWithApollo />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
