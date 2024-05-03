import { lucia } from "../utils/auth";

export default eventHandler(async (event) => {
  try {
    if (!event.context.session) {
      throw createError({
        statusCode: 403,
      });
    }
    await lucia.invalidateSession(event.context.session.id);
    appendHeader(
      event,
      "Set-Cookie",
      lucia.createBlankSessionCookie().serialize()
    );
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: 400,
    });
  }
});
