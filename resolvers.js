import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {
      hello: () => {
        return 'Hello world'
      },
      getAllCountries: async () => {
        const countries = await prisma.country.findMany()
        return countries
      },
      getSingleCountry: async (parent, args, context, info) => {
        const { id } = args
        const country = await prisma.country.findUnique({
          where: {
            id,
          },
        })
        return country
      }
    },
    Mutation: {
      registerCountry: async (parent, args, context, info) => {
        const { country, year, area, totalPopulation } = args
        const registeredCountry = await prisma.country.create({
          data: {
            country,
            year,
            area,
            totalPopulation
          },
        })
        return registeredCountry
      },
      deleteCountry: async (parent, args, context, info) => {
        const { id } = args
        const deleteCountry = await prisma.country.delete({
          where: {
            id,
          },
        })
        return "Country deleted"
      },
      updateCountry: async (parent, args, context, info) => {
        const { id, country, year, area, totalPopulation } = args
        const updateCountry = await prisma.country.update({
          where: {
           id,
          },
          data: {
            country,
            year,
            area,
            totalPopulation
          },
        })
        return updateCountry
      }
    }
  }

export default resolvers