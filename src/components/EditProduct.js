import React, { useState } from 'react';

function EditProduct({ product, onSave }) {
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(product.id, title, description);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Tytuł</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Opis</label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Zapisz zmiany</button>
        </form>
    );
}

export default EditProduct;
