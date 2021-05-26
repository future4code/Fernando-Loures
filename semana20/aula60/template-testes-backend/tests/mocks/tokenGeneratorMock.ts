import { AuthenticationData } from "../../src/services/tokenGenerator";

export class TokenGeneratorMock {
  private static expiresIn: number = 1200;

  public generate = (input: AuthenticationData): string => {
    return "Token";
  };

  public verify(token: string) {
    return { id: "abc123",
     role: token === "Admin" ? "Admin" : "Normal" };
    
  }
}

export default new TokenGeneratorMock()