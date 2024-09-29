"use client";

import { useEffect, useState } from 'react';
import Svg from '@/components/svg';
import axios from 'axios';
import ProductCard from '@/components/admin/product-card';
import { useAlert } from '@/components/alert';


export default function Home() {

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

    interface Subcategory {
        color_name: string;
        color_hexadecimal: string;
        option_id: string;
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ name: '', price_initial: 0 });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { showAlert } = useAlert();


    // Récupération des produits (GET)
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${process.env.API_URL}/products`);
            setProducts(res.data);
            console.log(res.data);
                         
        } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
            setErrorMessage("Erreur lors de la récupération des produits.");
        }
    };

    // Création d'un produit (POST)
    const createProduct = async () => {
        try {
            if (!newProduct.name || newProduct.price_initial <= 0) {
                setErrorMessage("Le nom et le prix doivent être valides.");
                showAlert("Le nom et le prix doivent être valides.", "error");
                return;
            }
            
            const res = await axios.post(`${process.env.API_URL}/products`, {
                name: newProduct.name,
                price_initial: newProduct.price_initial,
            });

            
            setProducts([...products, res.data]);
            setNewProduct({ name: '', price_initial: 0 });
            setErrorMessage(null);
        } catch (error) {
            console.error("Erreur lors de la création du produit :", error);
            setErrorMessage("Erreur lors de la création du produit.");
        }
    };

    // Suppression d'un produit (DELETE)
    const deleteProduct = async (id: string) => {
        try {
            await axios.delete(`${process.env.API_URL}/products/${id}`);
            setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression du produit :", error);
            setErrorMessage("Erreur lors de la suppression du produit.");
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="wrapper">
            <h2 className="text-3xl font-bold pt-8 pb-4">Products</h2>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex flex-col rounded-xl overflow-hidden">

                <div className="flex flex-wrap gap-2">
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} deleteProduct={deleteProduct} />
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-lg mb-2">Créer un produit</h3>
                <div className="bg-[--white] p-5 flex items-center gap-2 rounded-xl">
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
                    <button onClick={createProduct} className="bg-blue-500 rounded-full text-white py-2 px-4">Créer</button>
                </div>
            </div>
        </div>
    );
}