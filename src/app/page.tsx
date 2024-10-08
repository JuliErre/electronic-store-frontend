import Input from "@/components/shared/Input";
import TestComponent from "@/components/TestComponent";

export default function Home() {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col  font-[family-name:var(--font-geist-sans)]">
            <TestComponent />
            <Input error="fdf" />
        </div>
    );
}
