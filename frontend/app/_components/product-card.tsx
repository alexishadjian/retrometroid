import HeadingButton from "@/components/heading-button";
import Image, { StaticImageData } from "next/image";

type Props = {
    title: string;
    titleColor: string;
    subtitle: string;
    image: StaticImageData;
    bgColor: string;
    width: string;
};

export default function ProductCard({ title, titleColor, subtitle, image, bgColor, width }: Props) {
    return (
        <div className= {`flex flex-col justify-between rounded-3xl p-2 !bg-clip-content ${width === "big" ? "md:w-3/5" : "md:w-2/5"} w-full`} style={{background: `linear-gradient(${bgColor})`}}>
            <div className="py-14">
                <HeadingButton
                    title={title}
                    titleSize={{sm: 45, md: 60}}
                    titleColor={titleColor}
                    subtitle={subtitle}
                    button="Personnaliser"
                    link="/"
                />
            </div>
            <div className="flex justify-center items-end h-[170px]">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    quality={100}
                    style={{ width: 'auto', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }}
                />
            </div>
        </div>
    );
}