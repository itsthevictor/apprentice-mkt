import bcrypt from "bcryptjs";

export const hashPassword = async (string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(string, salt);
  return hashedPassword;
};

export const comparePassword = async (candidatePassword, comparedPassword) => {
  const isPasswordValid = await bcrypt.compare(
    candidatePassword,
    comparedPassword
  );
  return isPasswordValid;
};
