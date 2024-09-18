import Button from "@/components/button";

type ButtonProps = {
    title: string;
    titleSize: number;
    titleColor: string;
    subtitle: string;
    button?: string;
    link?: string;
};

export default function HeadingButton({ title, titleSize, titleColor, subtitle, button, link }: ButtonProps) {
    
    return (
        <div className="flex flex-col items-center justify-center gap-y-1">
            {subtitle && <h3 className="font-bebasNeue text-xl text-center opacity-70" style={{ color: titleColor }}>{subtitle}</h3>}
            {title && <h2 className="font-bebasNeue text-8xl text-center font-black" style={{ color: titleColor, fontSize: titleSize + 'px'}}>{title}</h2>}
            {button && link && <Button content={button} link={link} />} 
        </div>
    );
}