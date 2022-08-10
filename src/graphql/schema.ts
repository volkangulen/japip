import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "src", "generated", "nexustTypes.gen.ts"),
    schema: join(__dirname, "src", "generated", "schema.gen.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(__dirname, "src", "graphql", "context.ts"),
  },
});
