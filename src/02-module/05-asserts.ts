export type User = {
  name: string;
  displayName: string | null;
};

function assertsDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) {
    throw new Error('User has not displayName field');
  }
}

function logUserByDisplayName(user: User) {
  assertsDisplayName(user);

  console.log(user.displayName.toUpperCase());
}
