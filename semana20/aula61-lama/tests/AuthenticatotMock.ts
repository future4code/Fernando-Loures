class AuthenticatorMock {
    public generateToken(input: AuthenticationData,
        expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!): string {
        return "token";
    }

    public getData(token: string): AuthenticationData {
        return {
            id: "abc!234",
            role: "Normal"
        }
    }
}

interface AuthenticationData {
    id: string;
    role?: string;
}
export default new AuthenticatorMock()