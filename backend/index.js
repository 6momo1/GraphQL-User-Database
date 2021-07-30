const express = require("express")
const app = express()
const PORT = 6969
const schema = require('./Schemas/index')
var cors = require("cors")

// graphql imports
const { graphqlHTTP } = require("express-graphql")

app.use(cors())

// all parameters exist in the schema object
app.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: true
}))



app.listen(PORT, () => {
    console.log("Server running...");
}) 