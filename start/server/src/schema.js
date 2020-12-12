const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    launches( # replace the current launches query with this one.
      pageSize: Int

      after: String
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(mission: String, size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdataResponse!

    cancelTrip(launchId: ID!): TripUpdataResponse!

    login(email: String): String
  }

  type TripUpdataResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
