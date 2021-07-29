const express = require("express")
const app = express()
const PORT = 6969
const userData = require("./USER_DATA.json")
const { graphqlHTTP } = require("express-graphql")
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql



const UserType = new GraphQLObjectType({

    name:"User",
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: {type: GraphQLInt} },
            resolve(parent, args) {
                return userData
            } 
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve( parent, args ) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                })
                // return feedback
                return args
            }
        }
    }
})
  

const schema = new GraphQLSchema( {query: RootQuery, mutation: Mutation})


// all parameters exist in the schema object
app.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: true
}))



app.listen(PORT, () => {
    console.log("Server running...");
}) 