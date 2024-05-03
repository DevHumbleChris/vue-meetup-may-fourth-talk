import type { Profile, User } from "@prisma/client";

export const useUser = () => {
  const user = useState<(User & { profile: Profile }) | null>(
    "user",
    () => null
  );
  return user;
};

export const useAuthenticatedUser = () => {
  const user = useUser();
  return computed(() => {
    const userValue = unref(user);
    if (!userValue) {
      throw createError(
        "useAuthenticatedUser() can only be used in protected pages"
      );
    }
    return userValue;
  });
};
