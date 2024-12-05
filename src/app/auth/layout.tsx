interface Props {
    readonly children: React.ReactNode;
}
const authLayout = ({ children }: Props) => {
    return <div className="flex justify-center items-center">{children}</div>;
};

export default authLayout;
