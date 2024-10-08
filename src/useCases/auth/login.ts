import { loginUser } from "@/services/authService";
import { UserDataLogin } from "@/types/authTypes";

type OnSuccess = (data: any) => void;
type OnError = (error: any) => void;

export const handleLogin = async (
    data: UserDataLogin,
    onSuccess: OnSuccess,
    onError: OnError
) => {
    try {
        const response = await loginUser(data);
        localStorage.setItem("token", response.access_token);
        localStorage.setItem("user", JSON.stringify(response.userData));
        onSuccess(response);
    } catch (error) {
        onError(error);
    }
};
