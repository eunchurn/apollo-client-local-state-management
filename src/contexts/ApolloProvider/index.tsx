import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

export function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
