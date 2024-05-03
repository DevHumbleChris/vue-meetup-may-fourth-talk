import { prisma } from "~/prisma/db";

export default eventHandler(async (event) => {
  try {
    const { imageUrl, location, username } = await readBody(event);

    if (!event.context.session) {
      throw createError({
        message: "Unauthorized Request!",
        statusCode: 401,
      });
    }

    if (!imageUrl) {
      throw createError({
        message: "ImageUrl is Missing!",
        statusCode: 400,
      });
    }

    if (!location) {
      throw createError({
        message: "Location is Missing!",
        statusCode: 400,
      });
    }

    if (!username) {
      throw createError({
        message: "Username is Missing!",
        statusCode: 400,
      });
    }

    const profile = await prisma.profile.update({
      where: {
        userId: event.context.user?.id,
      },
      data: {
        location,
        imageUrl,
        username,
      },
    });

    return profile;
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: 400,
    });
  }
});
