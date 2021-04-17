import * as jwt from "jsonwebtoken";

const expiresIn = "60min"

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export const getData = (
  token: string
): AuthenticationData | null => {
  try {

     const { id } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData

     return { id }

  } catch (error) {
     
     console.log(error.message);
     return null
  }
}

type AuthenticationData = {
  id: string;
}
