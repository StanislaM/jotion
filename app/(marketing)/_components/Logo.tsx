import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
});

type Props = {};

const Logo = (props: Props) => {
    return (
        <div className="hidden items-center gap-x-2 md:flex">
            <Image
                src="/logo.svg"
                height={40}
                width={40}
                alt="Logo"
                className="dark:hidden"
            />

            <Image
                src="/logo-dark.svg"
                height={40}
                width={40}
                alt="Logo"
                className="light:hidden"
            />

            <p className={cn("font-semibold", font.className)}>Jotion</p>
        </div>
    );
};

export default Logo;
