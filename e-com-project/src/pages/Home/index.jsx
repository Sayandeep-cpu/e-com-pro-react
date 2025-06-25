import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useState } from 'react';
import { getAllProducts } from "../../api/getAllProducts";
import { useCart } from "../../context/cart-context";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory";

export const Home= () => {

    const [products, setProducts ] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory , setSelectedCategory] = useState("All");
    const { cart } = useCart();

    console.log({cart});

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            const categories = await getAllCategories();
            const updatedCategories = [...categories, {id: '1a', name: 'All'}]
            setProducts(products);
            setCategories(updatedCategories);
        })()
    }, []);
 
    const onCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    const filterByCategories = getProductsByCategory(products , selectedCategory);

    return(
        <>
            <Navbar />
            <main className="pt-8">
                <div className="flex gap-4 justify-center mb-4">
                    {
                        categories?.length > 0 && categories.map(category => <div className=
                        " bg-yellow-700 font-semibold rounded-full p-5 hover: cursor-pointer" onClick={() => 
                            onCategoryClick(category.name)}>{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                {
                        filterByCategories?.length > 0 ? filterByCategories.map((product) => <ProductCard key={product.id}
                         product={product}/>) : <h2>No Products Found, Please select another category</h2>
                }   
                </div>
            </main>
        </>
    )
}