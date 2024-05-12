import bcrypt from "bcrypt";

/** Below function is used to verify the password using bcrypt
 * @param userDBPassword userInputPassword
 * @returns Boolean
 */
const verifyPassword = async (userPassword, inputPassword) =>
  await bcrypt.compare(inputPassword, userPassword);

export { verifyPassword };
