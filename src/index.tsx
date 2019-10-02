import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from "apollo-boost";
import {BuildInfo} from "./components/buildInfo"
import {getToken} from "./shared/auth";
require('dotenv').config()

// Client Setup
const httpLink = createHttpLink({
    uri: "https://automation.atomist.com/graphql/team/A2MO4H2RG",
});

const token = getToken();

const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext(() => ({headers: {
            authorization: `Bearer ${token}`
        }}),
    );
    return forward(operation);
});
const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

class Board extends React.Component {
    render() {
        return (
                <div>
                    <div className="status">
                            <BuildInfo />
                    </div>
                </div>
        );
    }
}

class Report extends React.Component {
    render() {
        if (token) {
            return (
                <ApolloProvider client={client}>
                    <div className="report">
                        <div className="report-board">
                            <Board />
                        </div>
                    </div>
                </ApolloProvider>
            );
        } else {
            return (
                <div>
                    Missing token, cannot continue.  Must be set in ENV as REACT_APP_TOKEN
                </div>
            )
        }
    }
}

// ========================================

ReactDOM.render(
    <Report />,
    document.getElementById('root')
);
