const express = require("express")
const app = express()
const PORT = 6969
const schema = require('./Schemas/index')

// graphql imports
const { graphqlHTTP } = require("express-graphql")


// all parameters exist in the schema object
app.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: true
}))



app.listen(PORT, () => {
    console.log("Server running...");
}) 