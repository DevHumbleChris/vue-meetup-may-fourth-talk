import { prisma } from "~/prisma/db";

export default eventHandler(async (event) => {
  if (!event.context.user) {
    throw createError({
      message: "Unauthorized Request!",
      statusCode: 401,
    });
  }

  return await prisma.profile.findUnique({
    where: {
      userId: event.context.user.id,
    },
  });
});
