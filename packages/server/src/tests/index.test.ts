import { Connection } from "typeorm";
import { getTestConnection } from "../test-utils/testConn";
import { User } from "../entity/User";
import { testAuctionResolvers } from "./AuctionResolvers.test";
import { testItemResolvers } from "./ItemResolvers.test";

export let connection: Connection;
export let user: User;

// register a user to pass auth check
beforeAll(async () => {
  connection = await getTestConnection();
  const { raw } = await User.insert({
    avatarUrl: "https://avatars.githubusercontent.com/u/65774333?v=4",
    email: "jeff@jeff.org",
    externalId: "333",
    provider: "Google",
    username: "Jeff"
  });

  user = await User.findOne(raw[0].id);
});

describe("InstantAuction Backend Server Unit Testing", () => {
  describe("Item Resolvers", testItemResolvers);
  describe("Auction Resolvers", testAuctionResolvers);
});

afterAll(async () => {
  await connection.close();
});
