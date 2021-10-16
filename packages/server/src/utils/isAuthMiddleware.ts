import { MiddlewareFn } from "type-graphql";
import { NetworkingContext } from "../types/NetworkingContext";

/**
 * This middleware function checks for whether the user is authenticated
 * according to the context variable.
 *
 *
 *
 * @returns
 */
export const isAuth: MiddlewareFn<NetworkingContext> = ({ context }, next) => {
  const userId = context.req.session.userId;

  if (!userId) {
    throw new Error("Not Authenticated");
  }

  return next();
};