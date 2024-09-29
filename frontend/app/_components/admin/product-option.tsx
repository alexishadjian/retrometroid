import ProductSubcategories from '@/components/admin/product-subcategories';


type Props = {
    option: any;
};


export default function ProductOption({ option }: Props) {    

    return (
        <div className="flex flex-col gap-1 flex-wrap relative mb-4">

            <input type="text" placeholder="Nom de l'option" className="p-2 rounded font-semibold bg-slate-100" value={option.option_type} />
            <textarea placeholder="Description de l'option" className="p-2 rounded bg-slate-100" value={option.option_description} />

            <ProductSubcategories subCategories={option.sub_categories} optionId={option._id} />

        </div>
    );
}