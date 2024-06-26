import { Argon2id } from "oslo/password";
import { generateId } from "lucia";
import { prisma } from "~/prisma/db";
import { isValidEmail } from "../utils/validation";
import { lucia } from "../utils/auth";

export default eventHandler(async (event) => {
  // const { session } = await validate
  const { email, password, fullname } = await readBody(event);

  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    throw createError({
      message: "Invalid Email",
      statusCode: 400,
    });
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    throw createError({
      message: "Invalid Password Length",
      statusCode: 400,
    });
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  try {
    // Check if user exists
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      throw createError({
        message: "Email already used",
        statusCode: 400,
      });
    }

    const createdUser = await prisma.user.create({
      data: {
        id: userId,
        email,
        password: hashedPassword,
      },
    });

    const profile = await prisma.profile.create({
      data: {
        email,
        imageUrl:
          "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712306335/fp7ozwhi8wabqhaml46b.jpg",
        location: "",
        userId: createdUser.id,
        name: fullname,
        username: "",
      },
    });

    const session = await lucia.createSession(userId, {});
    appendHeader(
      event,
      "Set-Cookie",
      lucia.createSessionCookie(session.id).serialize()
    );

    return profile;
  } catch (error: any) {
    throw createError({
      message: error.message,
      statusCode: 400,
    });
  }
});
