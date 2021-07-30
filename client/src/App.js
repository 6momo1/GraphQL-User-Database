import logo from './logo.svg';
import './App.css';
import { onError} from '@apollo/client/link/error'
import { 
    ApolloClient, 
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from '@apollo/client'



// catch errors
const errorLink = onError( ({ graphqlErrors, networkError}) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path}) => {
            alert(`Graphql error ${message}`)
        })
    }
})


// create API link containing error
const link = HttpLink([
    errorLink,
    new HttpLink({ uri: 'http://localhost:6969/graphql'})
])

// create client instance
const client = new ApolloClient({
    cache: InMemoryCache,
    link: link
})

function App() {
  return (
      <ApolloProvider client={client}>
          
      </ApolloProvider>
  );
}

export default App;
