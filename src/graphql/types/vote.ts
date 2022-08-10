import { objectType } from "nexus";
import { Story } from "./story";
import { User } from "./user";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.int("choice");
    t.nullable.string("description");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
    t.nonNull.field("user", {
      type: User,
    });
    t.nonNull.field("story", {
      type: Story,
      async resolve(root, args, ctx) {
        return await ctx.prisma.vote
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .story();
      },
    });
    t.nonNull.field("user", {
      type: User,
      async resolve(root, args, ctx) {
        return await ctx.prisma.vote
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .user();
      },
    });
  },
});
