import { Resolver, Mutation, UseMiddleware, Ctx, Arg, Int } from "type-graphql";
import { unauthorizedErrorMessage } from "../../constants/errorMessages";
import { auctionExposedRelations } from "../../constants/exposed-relations";
import { Auction } from "../../entity/Auction";
import { Item } from "../../entity/Item";
import { User } from "../../entity/User";
import { NetworkingContext } from "../../types/NetworkingContext";
import { isAuth } from "../../utils/isAuthMiddleware";

@Resolver()
export class CreateAuctionResolver {
  @Mutation(() => Auction)
  @UseMiddleware(isAuth)
  async createAuction(
    @Arg("title")
    title: string,
    @Arg("description")
    description: string,
    @Arg("itemId", () => Int)
    itemId: number,
    @Ctx() { req }: NetworkingContext
  ) {
    let seller;
    try {
      seller = await User.findOne(req.session.userId);
    } catch (err) {
      console.error(err);
      throw new Error(unauthorizedErrorMessage);
    }

    let item;
    try {
      item = await Item.findOne(itemId, { relations: ["owner"] });
    } catch (err) {
      throw new Error("Couldn't find item.");
    }

    if (item.owner.id !== seller.id) {
      throw new Error(unauthorizedErrorMessage);
    }

    let id: number;
    try {
      const { raw } = await Auction.insert({
        bids: [],
        description,
        title,
        status: "open",
        seller,
        item
      });
      id = raw[0].id;
    } catch (err) {
      throw new Error(
        "The selected item is already participating in another auction."
      );
    }

    return await Auction.findOne(id, { relations: auctionExposedRelations });
  }
}