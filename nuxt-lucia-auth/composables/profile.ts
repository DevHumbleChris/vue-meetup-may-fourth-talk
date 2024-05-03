export const userProfile = async () => {
  const { data: profile, error } = await useFetch("/api/profile");

  if (error) {
    return null;
  }

  return profile;
};
