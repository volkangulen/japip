import { extendType, objectType } from "nexus";
import { GraphQLJSONObject } from "graphql-type-json";
import { scalarType } from "nexus";

export const JSONScalar = scalarType({
  name: "JSON",
  asNexusMethod: "json",
  serialize: GraphQLJSONObject.serialize,
  parseValue: GraphQLJSONObject.parseValue,
  parseLiteral: GraphQLJSONObject.parseLiteral,
});

export const Room = objectType({
  name: "Room",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nullable.string("description");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.string("ownerToken");
    t.nullable.field("options", {
      type: JSONScalar,
    });
    t.nonNull.list.field("stories", {
      type: "Story",
      async resolve(root, args, ctx) {
        return await ctx.prisma.room
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .stories();
      },
    });
    t.nonNull.list.field("users", {
      type: "User",
      async resolve(root, args, ctx) {
        return await ctx.prisma.room
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .users();
      },
    });
  },
});

export const RoomQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("rooms", {
      type: Room,
      resolve: async (_root, _args, ctx) => {
        return await ctx.prisma.room.findMany();
      },
    });
  },
});
