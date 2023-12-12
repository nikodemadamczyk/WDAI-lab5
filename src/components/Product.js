import React from 'react';

function Product({ product, onEdit }) {
    return (
        <tr>
            <td><img src={product.thumbnail} className="img-fluid" alt="Product"/></td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>
                <button onClick={() => onEdit(product)} className="btn btn-info">Edytuj</button>
            </td>
        </tr>
    );
}

export default Product;
