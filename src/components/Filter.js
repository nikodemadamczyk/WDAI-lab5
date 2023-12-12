import React, { useState } from 'react';

function Filter({ onFilter, onSort }) {
    const [filterInput, setFilterInput] = useState('');

    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
    };

    const handleFilterClick = () => {
        onFilter(filterInput);
    };

    return (
        <div className="row mb-3">
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Filter products..."
                    value={filterInput}
                    onChange={handleFilterChange}
                />
            </div>
            <div className="col-auto">
                <button className="btn btn-primary" onClick={handleFilterClick}>Filter</button>
            </div>
            <div className="col-auto">
                <button className="btn btn-secondary" onClick={onSort}>Sort by name</button>
            </div>
        </div>
    );
}

export default Filter;
