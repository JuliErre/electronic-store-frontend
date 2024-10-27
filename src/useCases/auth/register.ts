import { registerUser } from "@/services/auth.service";
import { UserDataRegister } from "@/types/authTypes";

type OnSuccess = (data: any) => void;
type OnError = (error: any) => void;

export const handleRegister = async (
    data: UserDataRegister,
    onSuccess: OnSuccess,
    onError: OnError
) => {
    try {
        const response = await registerUser(data);
        onSuccess(response);
    } catch (error) {
        onError(error);
    }
};
