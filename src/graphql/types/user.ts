import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nullable.string("email");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.list.field("votes", {
      type: "Vote",
      async resolve(root, args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .votes();
      },
    });
    t.nonNull.list.field("rooms", {
      type: "Room",
      async resolve(root, args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .rooms();
      },
    });
  },
});
