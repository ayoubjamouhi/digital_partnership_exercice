import React from "react";

const Table = ({products}) => {
    console.log(products)
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    return (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.category !== undefined ? product.category.name: 'No Category'}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
