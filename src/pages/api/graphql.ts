import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, PageConfig } from "next/types";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";

const server = new ApolloServer({
  context: createContext,
  schema,
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
