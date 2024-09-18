import HeadingButton from "@/components/heading-button";

type Props = {
    title: string;
    subtitle: string;
};

export default function TitleSection({ title, subtitle }: Props) {
    return (
        <section className="rounded-2xl py-14 bg-[--light-gray] m-4">
            <HeadingButton title={title} titleSize={90} titleColor="#000000" subtitle={subtitle} />
        </section>
    );
}