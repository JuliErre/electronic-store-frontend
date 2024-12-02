import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from "@nextui-org/react";
import { auth } from "../../../auth";

const ProfilePage = async () => {
    const session = await auth();

    return (
        <Card className="flex-1 p-5 text-zinc-800 max-w-[1000px] mx-auto min-h-96">
            <CardHeader className="flex justify-center">
                <Image
                    alt={session?.user?.name || "Profile picture"}
                    src={
                        session?.user?.image ||
                        "https://via.placeholder.com/150"
                    }
                    width={150}
                    className="object-cover rounded-full"
                />
            </CardHeader>
            <CardBody>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl font-semibold">
                        {session?.user?.name || "Guest User"}
                    </h1>
                    <p className="text-gray-500">{session?.user?.email}</p>
                </div>
                <Divider className="my-4" />
                <div className="space-y-2">
                    <p className="text-gray-500">Account Details:</p>
                    <p>
                        Status:{" "}
                        {session ? "Authenticated" : "Not authenticated"}
                    </p>
                    <p>Session expires: {session?.expires}</p>
                </div>
            </CardBody>
            <CardFooter className="flex gap-3">
                <Button color="primary" className="bg-green-500" fullWidth>
                    Edit Profile
                </Button>
                <Button
                    color="secondary"
                    variant="bordered"
                    className="border-green-500 text-green-500"
                    fullWidth>
                    Change Password
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProfilePage;
