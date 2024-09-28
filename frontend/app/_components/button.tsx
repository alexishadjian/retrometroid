import Link from "next/link";

type Props = {
    content: string;
    link?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
};

export default function Button({ content, link, size = 'medium', onClick }: Props) {

    const sizeClasses = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-5 text-base',
        large: 'py-3 px-7 text-lg',
    };

    const baseClasses = "text-[15px] bg-[--light-blue] text-[--white] rounded-full transition-colors font-medium border border-solid border-[--light-blue] hover:bg-transparent hover:text-[--light-blue]";

    return link ? (
        <Link href={link} onClick={onClick} className={`${baseClasses} ${sizeClasses[size]}`}>
            {content}
        </Link>
    ) : (
        <button onClick={onClick} className={`${baseClasses} ${sizeClasses[size]}`}>
            {content}
        </button>
    );
}
