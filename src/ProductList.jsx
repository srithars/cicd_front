import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List KLU</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> | {p.email} | {p.addr}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
