import { IdmResponse } from "../interfaces/ResponseLoginIdm";
import { TokenResponse } from "../interfaces/TokenResponse";
import { URL_SERVER_PROFILE } from "../../../helpers/constants";

export const transformUser = (
    { User, Roles }: IdmResponse,
    token: TokenResponse
) => {
    const userData : UserResponse = {
        user: {
            email: User.Email,
            firstName: User.FirstName,
            lastName: User.LastName,
            lastNameSecond: User.LastNameSecond,
            fullName: User.FirstName + " " + User.LastName + " " + User.LastNameSecond,
            userName: User.UserName,
            idPersona: User.IdPersona ?? '0',
            img: URL_SERVER_PROFILE + (!User.IdPersona ? "0" : User.IdPersona),
        },
        roles: Roles,
        token: {
            accessToken: token.access_token,
            refreshToken:token.refresh_token,
            expiresIn: token.expires_in,
        },
    };

    return userData;
};
