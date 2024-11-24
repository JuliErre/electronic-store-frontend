import { loginUser } from "@/services/auth.service";
import { UserDataLogin } from "@/types/authTypes";

export const handleLogin = async (data: UserDataLogin) => {
    const response = await loginUser(data);

    if (response.status === 401 || response.status === 404) {
        throw new Error("Invalid credentials");
    }

    return response.data;
};
