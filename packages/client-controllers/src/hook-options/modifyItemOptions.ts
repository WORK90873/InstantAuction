import {
  ModifyItemMutationOptions,
  ModifyItemMutationVariables,
  GetUserItemsDocument,
  GetUserItemsQuery
} from "../generated/graphql";

export const createItemModificationOptions = (
  variables: ModifyItemMutationVariables
): ModifyItemMutationOptions => {
  return {
    variables,
    update: (store, { data }) => {
      if (!data || !data.modifyItem) return;

      const cachedData = store.readQuery<GetUserItemsQuery>({
        query: GetUserItemsDocument
      });

      let count: number = 1;
      let items = [data.modifyItem];

      if (
        cachedData &&
        cachedData.getUserItems &&
        cachedData.getUserItems.count
      ) {
        // if there are cached items
        count = cachedData.getUserItems.count;
        items = cachedData.getUserItems.items;

        const ind = items.findIndex(val => {
          return val.id === data.modifyItem.id;
        });

        try {
          items[ind].name = data.modifyItem.name;
          items[ind].picture = data.modifyItem.picture;
        } catch (err) {}
      }

      store.writeQuery<GetUserItemsQuery>({
        query: GetUserItemsDocument,
        data: {
          getUserItems: { count, items, __typename: "UserItemsResponse" }
        }
      });
    }
  };
};
