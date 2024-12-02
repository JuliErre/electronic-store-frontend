import { EndpointUser } from "@/models";
import { UserEntity } from "./../models/user.entity.model";

export const createUserAdapter = (userData: EndpointUser): UserEntity => {
    return {
        id: userData.id,
        email: userData.email,
        username: userData.username,
        accessToken: userData.access_token,
    };
};
