"use client";

import { useEffect, useState } from 'react';
import Svg from '../_components/svg';
import axios from 'axios';

export default function Home() {

    const API_URL = process.env.NEXT_PUBLIC_URL_API_PROD || 'http://localhost:3001/api';


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

    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState({ name: '', price_initial: 0 });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Récupération des produits (GET)
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${API_URL}/products`);
            setProducts(res.data);
            console.log(res.data);
                         
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
            setErrorMessage("Erreur lors de la récupération des produits.");
        }
    };

    // Création d'un produit (POST)
    const createProduct = async () => {
        try {
            if (!newProduct.name || newProduct.price_initial <= 0) {
                setErrorMessage("Le nom et le prix doivent être valides.");
                return;
            }
            
            const res = await axios.post(`${API_URL}/products`, {
                name: newProduct.name,
                price_initial: newProduct.price_initial,
            });

            setProducts([...products, res.data]);
            setNewProduct({ name: '', price_initial: 0 });
            setErrorMessage(null);
        } catch (error) {
            console.error("Erreur lors de la création du produit:", error);
            setErrorMessage("Erreur lors de la création du produit.");
        }
    };

    // Suppression d'un produit (DELETE)
    const deleteProduct = async (id: string) => {
        try {
            await axios.delete(`${API_URL}/products/${id}`);
            setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression du produit:", error);
            setErrorMessage("Erreur lors de la suppression du produit.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="wrapper">
            <h2 className="text-xl py-4">Products</h2>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex flex-col rounded-xl overflow-hidden">
                <div className="bg-[--white] p-5 flex gap-5">
                    <span className="font-semibold w-1/6">Nom</span>
                    <span className="font-semibold w-1/6">Prix</span>
                    <span className="font-semibold w-1/6">Pads</span>
                    <span className="font-semibold w-1/6">Button</span>
                    <span className="font-semibold w-1/6">Shells</span>
                    <span className="font-semibold w-1/6">Ips</span>
                    <span className="w-[30px]"></span>
                </div>

                {products.map(product => (
                    <div key={product._id} className="bg-[--white] p-5 flex items-center gap-5">
                        <h2 className="w-1/6">{product.name}</h2>
                        <p className="w-1/6">{product.price_initial}€</p>
                        <div className="w-1/6 flex gap-1">
                            {product.option_id.map((cat) => {
                                if (cat.option_type === 'Pads') {
                                    return cat.sub_categories.map((sub) => (
                                        <div key={sub.id} className="rounded-full w-[20px] aspect-square" style={{backgroundColor: sub.color_hexadecimal }}></div>
                                    ));
                                }
                                return null;
                            })}
                        </div>
                        <div className="w-1/6 flex gap-1">
                            {product.option_id.map((cat) => {
                                if (cat.option_type === 'Button') {
                                    return cat.sub_categories.map((sub) => (
                                        <div key={sub.id} className="rounded-full w-[20px] aspect-square" style={{backgroundColor: sub.color_hexadecimal }}></div>
                                    ));
                                }
                                return null;
                            })}
                        </div>
                        <div className="w-1/6 flex gap-1">
                            {product.option_id.map((cat) => {
                                if (cat.option_type === 'Shells') {
                                    return cat.sub_categories.map((sub) => (
                                        <div key={sub.id} className="rounded-full w-[20px] aspect-square" style={{backgroundColor: sub.color_hexadecimal }}></div>
                                    ));
                                }
                                return null;
                            })}
                        </div>
                        <div className="w-1/6 flex gap-1">
                            {product.option_id.map((cat) => {
                                if (cat.option_type === 'Ips') {
                                    return cat.sub_categories.map((sub) => (
                                        <div key={sub.id} className="rounded-full w-[20px] aspect-square" style={{backgroundColor: sub.color_hexadecimal }}></div>
                                    ));
                                }
                                return null;
                            })}
                        </div>
                        <button className="w-[30px]" onClick={() => deleteProduct(product._id)}>
                            <Svg name="cross" color='red' strokeWidth="1.5" width="18" height="18" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-4">
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