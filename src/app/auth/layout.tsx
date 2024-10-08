interface Props {
    readonly children: React.ReactNode;
}
const authLayout = ({ children }: Props) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
            {children}
        </div>
    );
};

export default authLayout;
