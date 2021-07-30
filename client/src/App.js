import './App.css';
import { onError} from '@apollo/client/link/error'
import { 
    ApolloClient, 
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from '@apollo/client'
import GetUsers from './components/GetUsers';
import Form from './components/Form'



// catch errors
const errorLink = onError( ({ graphqlErrors, networkError}) => {
    if (graphqlErrors) {
        graphqlErrors.map( ({ message, location, path}) => {
            alert(`Graphql error ${message}`)
        })
    }
})

// create API link containing error
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:6969/graphql"})
])

// create client instance
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

function App() {
  return (
      <ApolloProvider client={client}>
          <div className="App">

            <Form></Form>
            {/* <GetUsers></GetUsers> */}

          </div>
      </ApolloProvider>
  );
}

export default App;
