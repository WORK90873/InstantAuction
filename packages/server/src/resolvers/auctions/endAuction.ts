import { Resolver, Mutation, UseMiddleware, Ctx, Arg, Int } from "type-graphql";
import { Auction } from "../../entity/Auction";
import { NetworkingContext } from "../../types/NetworkingContext";
import { isAuth } from "../../utils/isAuthMiddleware";

@Resolver()
export class EndAuctionResolver {
  @Mutation(() => Auction)
  @UseMiddleware(isAuth)
  async endAuction(
    @Arg("auctionId", () => Int) auctionId: number,
    @Arg("winningBidId", () => Int) winningBidId: number,
    @Ctx() { req }: NetworkingContext
  ) {
    const auction = await Auction.findOne(auctionId, {
      relations: ["seller", "bids", "bids.bidder"]
    });

    if (!auction) {
      throw new Error("Invalid auction");
    }

    if (auction.seller.id !== req.session.userId) {
      throw new Error("Unauthorized");
    }

    // if the winningBidId is not found in the list of bids
    const winningBidIndex = auction.bids.findIndex(bid => {
      return bid.id === winningBidId;
    });
    if (winningBidIndex === -1) {
      throw new Error("Invalid bid id");
    }

    // closing the auction and declaring the winner
    await Auction.update(auction.id, {
      dateUpdated: new Date(),
      status: "closed",
      winner: auction.bids[winningBidIndex].bidder
    });

    return await Auction.findOne(auction.id);
  }
}