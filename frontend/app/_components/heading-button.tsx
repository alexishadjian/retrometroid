import Button from "@/components/button";

type ButtonProps = {
    title: string;
    titleSize: { sm: number, md: number };
    titleColor: string;
    subtitle: string;
    button?: string;
    link?: string;
};

export default function HeadingButton({ title, titleSize, titleColor, subtitle, button, link }: ButtonProps) {
    
    return (
        <div className="flex flex-col items-center justify-center gap-y-1">
            {subtitle && <h3 className="font-bebasNeue text-xl text-center opacity-80" style={{ color: titleColor }}>{subtitle}</h3>}
            {title && <h2 className={`font-bebasNeue text-center font-black text-[${titleSize.sm}px] md:text-[${titleSize.md}px]`} style={{ color: titleColor, lineHeight: '1' }}>{title}</h2>}
            {button && link && <Button content={button} link={link} />} 
        </div>
    );
}