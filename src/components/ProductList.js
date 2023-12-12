import React from 'react';
import Product from './Product';

function ProductList({ products, onEdit }) {
    return (
        <table className="table table-bordered table-striped text-center">
            <thead className="thead-dark">
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <Product key={product.id} product={product} onEdit={onEdit} />
            ))}
            </tbody>
        </table>
    );
}

export default ProductList;
