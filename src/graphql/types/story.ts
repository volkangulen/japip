import { objectType } from "nexus";
import { Room } from "./room";

export const Story = objectType({
  name: "Story",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("title");
    t.nonNull.string("createdAt");
    t.nonNull.list.field("votes", {
      type: "Vote",
      async resolve(root, args, ctx) {
        return await ctx.prisma.story
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .votes();
      },
    });
    t.nonNull.field("room", {
      type: Room,
      async resolve(root, args, ctx) {
        return await ctx.prisma.story
          .findUnique({
            where: {
              id: root.id,
            },
          })
          .room();
      },
    });
  },
});
