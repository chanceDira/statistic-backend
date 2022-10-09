// import { PrismaClient, prismaClient } from '@prisma/client';
// import pkg from '@prisma/client';
// const { PrismaClient, prismaClient } = pkg;

// const prisma = new PrismaClient({ datasources: {  db: { url: "mongodb+srv://chanceDira:Ilikediliked1@cluster0.6yhcfzz.mongodb.net/?retryWrites=true&w=majority" } } });

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const country = await prisma.country.create({
        data: {
            country: 'Burundi',
            year: 2021,
            area: 123456,
            totalPopulation: 2000000
        }
    })
    console.log(country)
}

main();

// async function main() {
//     // Connect the client
//     await prisma.$connect()
//     // ... you will write your Prisma Client queries here
//     const allCountries = await prisma.country.findMany()
//   console.log(allCountries)
//   }
  
//   main()
//     .then(async () => {
//       await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//       console.error(e)
//       await prisma.$disconnect()
//       process.exit(1)
//     })