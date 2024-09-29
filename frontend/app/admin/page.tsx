"use client";

import { useEffect, useState } from 'react';
import Svg from '@/components/svg';
import axios from 'axios';
import Products from '@/components/admin/products';
import { useAlert } from '@/components/alert';


export default function Admin() {



    return (
        <div className="wrapper">

            <h2 className="text-3xl font-bold pt-8 pb-4">Products</h2>
            
            <Products />

        </div>
    );
}