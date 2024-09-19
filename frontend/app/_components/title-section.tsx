import HeadingButton from "@/components/heading-button";

type Props = {
    title: string;
    subtitle: string;
    titleColor: string;
    bgColor: string;
};

export default function TitleSection({ title, subtitle, titleColor, bgColor }: Props) {
    return (
        <section className="rounded-2xl py-14 m-4" style={{ background: bgColor }}>
            <HeadingButton 
                title={title}
                titleSize={{sm: 55, md: 90}}
                titleColor={titleColor}
                subtitle={subtitle}
            />
        </section>
    );
}