import React, { useEffect, useState } from "react";

const Form = ({ products, categories, store }) => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: null,
        category_id: 0,
    });
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: "",
        category_id: "",
    });
    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorPrice, setErrorPrice] = useState("");
    const [errorCategoryId, setErrorCategoryId] = useState("");
    const handleChange = (event) => {
        setData((prevState) => {
            return {
                ...prevState,
                [event.target.name]:
                    event.target.type === "number"
                        ? parseFloat(event.target.value)
                        : event.target.value,
            };
        });
    };
    const isNumber = (str) => {
        var pattern = /^\d+\.?\d*$/;
        return pattern.test(str); // returns a boolean
    };
    const emptyData = () => {
        setData({
            name: "",
            description: "",
            price: 0,
            category_id: 0,
        });
    };
    const submitForm = async (e) => {
        e.preventDefault();
        setErrorName("");
        setErrorDescription("");
        setErrorPrice("");
        setErrorCategoryId("");

        if (data.name === "") {
            setErrorName("Please Enter a Name");
        }
        if (data.description === "") {
            setErrorDescription("Please Enter a Description");
        }
        if (data.price === 0 || !isNumber(data.price)) {
            setErrorPrice("Please Enter a valid price");
        }
        if (data.category_id === 0 || data.category_id === null) {
            setErrorCategoryId("Please select a category");
        }
        if (
            data.name !== "" &&
            data.description !== "" &&
            (data.price !== 0 || isNumber(data.price)) &&
            (parseFloat(data.category_id) !== 0)
        ) {
            console.log("no error");
            const storeReturn = await store(data);
            console.log(storeReturn);
            if (storeReturn) {
                console.log("here");
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category_id: 0,
                });
            }
        }
    };
    return (
        <form className="mt-4" onSubmit={submitForm}>
            <div class="mb-3">
                <label for="name" class="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control w-50"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                {errorName !== "" ? (
                    <div id="emailHelp" class="form-text text-danger">
                        {errorName}
                    </div>
                ) : null}
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">
                    Description
                </label>
                <input
                    type="text"
                    className="form-control w-50"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                />
                {errorDescription !== "" ? (
                    <div id="emailHelp" class="form-text text-danger">
                        {errorDescription}
                    </div>
                ) : null}
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">
                    Price
                </label>
                <input
                    type="number"
                    className="form-control w-50"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={data.price}
                />
                {errorPrice !== "" ? (
                    <div id="emailHelp" class="form-text text-danger">
                        {errorPrice}
                    </div>
                ) : null}
            </div>
            <div class="mb-3">
                <label for="category_id" class="form-label">
                    Category
                </label>
                <select
                    className="form-control w-50"
                    id="category_id"
                    name="category_id"
                    onChange={handleChange}
                    value={data.category_id}
                >
                    <option disabled selected value="0">
                        Choose Category
                    </option>
                    {categories.map((category, i) => (
                        <option key={i} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errorCategoryId !== "" ? (
                    <div id="emailHelp" class="form-text text-danger">
                        {errorCategoryId}
                    </div>
                ) : null}
            </div>

            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
