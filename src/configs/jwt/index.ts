import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
    private_key: process.env.PRIVATE_SECRET_TOKEN,
    public_key: process.env.PUBLIC_SECRET_TOKEN,
    maxAge: '24hr',
    verifyOptions: {
        complete: true,
        ignoreExpiration: true,
        algorithms: ['RS256']
    }
}