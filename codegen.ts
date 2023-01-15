import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/contexts/ApolloProvider/schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
    },
    "./src/generated/apollo-helper.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
    "./src/generated/apollo.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      config: {
        withHooks: true,
      },
    },
    "./src/generated/resolvers.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
      },
    },
  },
};

export default config;
