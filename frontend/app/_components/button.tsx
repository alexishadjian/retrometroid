import Link from "next/link";

type Props = {
    content: string;
    link?: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    onClick?: () => void;
};

export default function Button({ content, link, size = 'medium', color = 'var(--light-blue)', onClick }: Props) {

    const sizeClasses = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-5 text-base',
        large: 'py-3 px-7 text-lg',
    };

    const baseClasses = `text-[15px] text-[--white] rounded-full transition-colors font-medium border border-solid`;

    return link ? (
        <Link 
            href={link}
            onClick={onClick}
            className={`${baseClasses} ${sizeClasses[size]}`}
            style={{
                borderColor: color,
                backgroundColor: color
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.backgroundColor = color;
            }}
        >
            {content}
        </Link>
    ) : (
        <button 
            onClick={onClick} 
            className={`${baseClasses} ${sizeClasses[size]}`}
            style={{
                borderColor: color,
                backgroundColor: color
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.backgroundColor = color;
            }}
        >
            {content}
        </button>
    );
}