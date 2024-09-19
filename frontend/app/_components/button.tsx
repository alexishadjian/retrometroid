import Link from "next/link";

type ButtonProps = {
    content: string;
    link: string;
};

export default function Button({ content, link }: ButtonProps) {
    return (
        <Link href={link} className="text-[15px] bg-[--light-blue] text-[--white] py-2 px-5 rounded-full transition-colors font-medium border border-solid border-[--light-blue] hover:bg-transparent hover:text-[--light-blue]">
            {content}
        </Link>
    );
}