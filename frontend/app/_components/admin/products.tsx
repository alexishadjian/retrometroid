import Svg from '@/components/svg';
import Image from 'next/image';
import ProductOptions from '@/components/admin/product-options';
import { useAlert } from '@/components/alert';
import { GbaShellDmg } from '@/images';
import { useEffect, useState } from 'react';
import Button from '@/components/button';
import axios from 'axios';



interface Product {
    _id: string;
    name: string;
    price_initial: number;
    option_id: Array<{
        option_type: string;
        sub_categories: Array<{
            id: string;
            color_hexadecimal: string;
        }>;
    }>;
    option_type: string;
}

export default function Products() {

    const { showAlert } = useAlert();

    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ name: '', price_initial: 0 });


    // Get products
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${process.env.API_URL}/products`);
            setProducts(res.data);
                         
        } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
            showAlert("Erreur lors de la récupération des produits.");
        }
    };

    // Create a new product
    const createProduct = async () => {
        try {
            if (!newProduct.name || newProduct.price_initial <= 0) {
                showAlert("Le nom et le prix doivent être valides.", "error");
                return;
            }
            
            const res = await axios.post(`${process.env.API_URL}/products`, {
                name: newProduct.name,
                price_initial: newProduct.price_initial,
            });

            // Display a success message
            showAlert("Produit créé avec succès.", "success");
            // Add dynamically the new product
            setProducts([...products, res.data]);
            // Reset the form
            setNewProduct({ name: '', price_initial: 0 });

        } catch (error) {
            console.error("Erreur lors de la création du produit :", error);
            showAlert("Erreur lors de la création du produit.", "error");
        }
    };

    // Delete a product
    const deleteProduct = async (id: string) => {
        try {
            await axios.delete(`${process.env.API_URL}/products/${id}`);

            // Display a success message
            showAlert("Produit supprimé avec succès.", "success");
            // Remove dynamically the deleted product
            setProducts(prevProducts => prevProducts.filter(product => product._id !== id));

        } catch (error) {
            console.error("Erreur lors de la suppression du produit :", error);
            showAlert("Erreur lors de la suppression du produit.", "error");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="flex flex-wrap gap-2 mb-10">
            {products.map((product: Product) => (
                <div key={product._id} className="bg-[--white] p-5 rounded-xl w-full md:w-[calc((100%/2)-0.34rem)] lg:w-[calc((100%/3)-0.34rem)]">

                    <div className="flex gap-5 mb-5">
                        <div className="relative aspect-square">
                            <Image src={GbaShellDmg} width={150} height={50} alt={product.name} />
                        </div>
        
                        <div className="w-full flex flex-col gap-1">
        
                            <input type="text" placeholder="Nom du produit" className="p-2 rounded text-lg font-semibold bg-slate-100" value={product.name} />
                            <input type="text" placeholder="Prix du produit" className="p-2 rounded bg-slate-100" value={product.price_initial} />
                            <button className="w-[30px] underline text-sm my-1 text-gray-400" onClick={() => deleteProduct(product._id)}>
                                Supprimer
                            </button>
                        </div>
                    </div>
        
                    <div className="">
                        <h2 className="font-semibold mb-2">Options</h2>
                        <ProductOptions options={product.option_id} productId={product._id} />
                    </div>
        
                </div>
            ))}

            <div className="bg-[--white] p-5 flex flex-col gap-2 rounded-xl w-full md:w-[calc((100%/2)-0.34rem)] lg:w-[calc((100%/3)-0.34rem)]">
                <h2 className="font-semibold text-xl">Nouveau produit</h2>
                <input
                    type="text"
                    placeholder="Nom du produit"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="border p-2 mr-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Prix initial"
                    value={newProduct.price_initial}
                    onChange={(e) => setNewProduct({ ...newProduct, price_initial: parseFloat(e.target.value) })}
                    className="border p-2 mr-2 rounded"
                    min="0"
                />
                <div>
                    <Button 
                        onClick={() => createProduct()}
                        content="Créer"
                        size="small"
                    />
                </div>
            </div>
        </div>
    );
}