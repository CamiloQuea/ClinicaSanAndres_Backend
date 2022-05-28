import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { jwtConfig } from '../../configs/jwt';




export const signJSONData = (object: {}) => {

    const token = sign(object, jwtConfig.private_key!, { algorithm: 'RS256', expiresIn: jwtConfig.maxAge })

    return token;

}

export const verifyToken = (token: string) => {

    const decode = verify(token, jwtConfig.public_key!, { complete: true, ignoreExpiration: true, algorithms: ['RS256'] }) as JwtPayload;

    if (Date.now() > decode.payload!.exp * 1000) return { error: true, payload: decode.payload };

    return { error: false, payload: decode.payload };

}