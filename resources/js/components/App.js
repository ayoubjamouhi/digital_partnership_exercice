import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Table from "./Table";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await window.axios.get("/api/products");
                console.log(response);
                if (response.data.success) {
                    setProducts(response.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        loadProducts();
        const loadCategories = async () => {
            try {
                const response = await window.axios.get("/api/categories");
                console.log(response);
                if (response.data.success) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        loadCategories();
    }, []);
    const store = async (data) => {
        try {
            const response = await window.axios.post("/api/products", data);
            console.log("response", response);
            if (response.data.success) {
                const newProducts = [...products];
                newProducts.unshift(response.data.data);
                toast("Product has been added successfully")
                setProducts(newProducts);
                return true;
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="mt-4">
            <div className="container">
                <h1>Digital Partnership Application</h1>
                <Form
                    products={products}
                    categories={categories}
                    store={store}
                />
                <h1 className="mt-4">Products</h1>
                <Table products={products} />
                <ToastContainer />
            </div>
        </div>
    );
}

export default App;
console.log(document.getElementById("app"));
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
