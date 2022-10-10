import { gql } from "apollo-server-express"

const typeDefs = gql`
type Country {
    id: String
    country: String
    year: Int
    area: Int
    totalPopulation: Int
}

type Query {
  hello: String

  getAllCountries: [Country]
  getSingleCountry(id: ID): Country
}


type Mutation {
    registerCountry(country: String, year: Int, area: Int, totalPopulation: Int): Country
    deleteCountry(id: ID): String
    updateCountry(id: ID, country: String, year: Int, area: Int, totalPopulation: Int): Country
}

`

export default typeDefs
