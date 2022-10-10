
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     const country = await prisma.country.create({
//         data: {
//             country: 'Burundi',
//             year: 2021,
//             area: 123456,
//             totalPopulation: 2000000
//         }
//     })
//     console.log(country)
// }

// main();


//2nd Option 

// import { ApolloServer } from 'apollo-server'

// // 1
// const typeDefs = `
//   type Query {
//     info: String!
//   }
// `

// // 2
// const resolvers = {
//   Query: {
//     info: () => null
//   }
// }

// // 3
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

// server
//   .listen()
//   .then(({ url }) =>
//     console.log(`Server is running on ${url}`)
//   );

import express from 'express'
import { ApolloServer, gql } from'apollo-server-express'
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'





async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app: app })

  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })

  app.listen(4000, () => console.log('Server in running on port 4000'))

}

startServer()
