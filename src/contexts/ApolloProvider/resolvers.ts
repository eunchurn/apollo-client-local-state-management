import { InMemoryCache } from "@apollo/client";
import { Resolvers } from "generated/resolvers";
import { GetAllDataDocument } from "generated/graphql";
import { compact } from "lodash";

export const resolvers: Resolvers<{ cache: InMemoryCache }> = {
  Query: {
    getDataByField(_root, args, { cache }) {
      if (!args) throw new Error("No args");
      const data = cache.readQuery({ query: GetAllDataDocument });
      const { field, value } = args;
      if (!data) return null;
      const { getAllData } = data;
      if (!getAllData) return null;
      if (!field || !value) return getAllData;
      const result = compact(
        getAllData.filter((item) => {
          if (!item) return null;
          return item[field] === value;
        })
      );
      return result;
    },
  },
};
