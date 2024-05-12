import jwt from "jsonwebtoken";

/** Below function is used to generate the token
 * @param user data, expirationTime
 * @returns token
 *
 */
const generateToken = (
  userData,
  expiration = process.env.JWT_EXPIRATION_MINUTES
) => {
  try {
    const { firstName, lastName, email, _id } = userData;
    const token = jwt.sign(
      {
        id: _id,
        email,
        name: `${firstName} ${lastName}`,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: expiration,
      }
    );
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { generateToken };
