import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

const typeDefs = `#graphql
  type Planet {
    id: String
    name: String
    oxygen: Float
    distance: Int
    lightYears: Float
    mAh: Float
    image: String
  }

  type Query {
    planets: [Planet]
  }
`;

const planets = [
    {
        id: 'SJX8174',
        name: 'Mars',
        oxygen: 0.13,
        distance: 5,
        lightYears: 2.3,
        mAh: 91,
        image: 'https://i.ibb.co/DM0bd49/mars.png',
    },
    {
        id: 'CLP2844',
        name: 'Jupiter',
        oxygen: 1,
        lightYear: 4,
        distance: 15,
        lightYears: 5.9,
        mAh: 20,
        image: 'https://i.ibb.co/YcTLMD0/jupiter.png',
    },
    {
        id: 'ZOQ0171',
        name: 'Saturn',
        oxygen: 7.95,
        distance: 30,
        lightYears: 14.2,
        mAh: 10,
        image: 'https://i.ibb.co/61gqjY3/saturn.png',
    },
    {
        id: 'PWX9374',
        name: 'Uranus',
        oxygen: 0.23,
        distance: 45,
        lightYears: 20,
        mAh: 92,
        image: 'https://i.ibb.co/tqvQ9V5/uranus.png'
    },
    {
        id: 'LJY1415',
        name: 'Neptune',
        oxygen: 36,
        lightYears: 35,
        distance: 55,
        mAh: 40,
        image: 'https://i.ibb.co/vXtmTQn/neptune.png',
    },
    {
        id: 'JUQ9512',
        name: 'Pluto',
        oxygen: 42,
        lightYears: 39,
        distance: 75,
        mAh: 400,
        image: 'https://i.ibb.co/vm98725/pluto.png',
    },
    {
        id: 'HYQ0148',
        name: 'Sun',
        oxygen: 0,
        distance: 150,
        lightYears: 62,
        mAh: 1,
        image: 'https://i.ibb.co/XzdpnKW/Sun.png',
    },
    {
        id: 'HYQ0148',
        name: 'Venus',
        oxygen: 72.8,
        distance: 80,
        lightYears: 1.1,
        mAh: 1,
        image: 'https://i.ibb.co/hMKkhGh/venus.png',
    },
    {
        id: 'QVX9457',
        name: 'Mercury',
        oxygen: 1.2,
        distance: 85,
        lightYears: 4.7,
        mAh: 0,
        image: 'https://i.ibb.co/3RTrBRJ/mercury.png'
    },
];

const resolvers = {
    Query: {
        planets: () => planets,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

const port = Number.parseInt(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, { listen: { port } });
