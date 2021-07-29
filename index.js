const express = require("express")
const app = express()
const PORT = 6969
const userData = require("./USER_DATA.json")
const graphql = require('graphql')
const { graphqlHTTP } = require("epress-graphql")


const RootQuery = "query"
const Mutation = "muatation"

const schema = new graphql.GraphQLSchema( {query: RootQuery, muatation: Muatation})


app.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: true
}))



app.listen(PORT, () => {
    console.log("Server running...");
}) 