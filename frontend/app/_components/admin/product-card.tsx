import ProductOption from '@/components/admin/product-option';
import Svg from '@/components/svg';
import Image from 'next/image';
import { GbaShellDmg } from '@/images';

type Props = {
    product: any;
    deleteProduct: (id: string) => void;
};


export default function ProductCard({ product, deleteProduct }: Props) {
    console.log('product', product);


    return (
        <div key={product._id} className="bg-[--white] p-5 rounded-xl w-full md:w-[calc((100%/2)-0.34rem)] lg:w-[calc((100%/3)-0.34rem)]">

            <div className="flex gap-5 mb-5">
                <div className="relative aspect-square">
                    <Image src={GbaShellDmg} width={150} height={50} alt={product.name} />
                </div>

                <div className="w-full flex flex-col gap-1">

                    <input type="text" placeholder="Nom du produit" className="p-2 rounded text-lg font-semibold bg-slate-100" value={product.name} />
                    <input type="text" placeholder="Prix du produit" className="p-2 rounded bg-slate-100" value={product.price_initial} />

                </div>
            </div>

                <div className="">
                    <h2 className="font-semibold mb-2">Options</h2>
                    {product.option_id.map((option: any) => (
                        <ProductOption option={option} />
                    ))}
                </div>

            {/* <button className="w-[30px]" onClick={() => deleteProduct(product._id)}>
                <Svg name="cross" color='red' strokeWidth="1.5" width="18" height="18" />
            </button> */}

        </div>
    );
}