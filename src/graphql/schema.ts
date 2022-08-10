import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
  types: [],
  outputs: {
    typegen: join(process.cwd(), "node_modules", "nexus-typegen", "index.d.ts"),
    schema: join(process.cwd(), "graphql", "/schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "db", "client.ts"),
  },
});
