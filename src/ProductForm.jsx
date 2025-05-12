import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onInsert }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    email: '',
    addr: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8081/insert', product);
      alert(res.data);
      setProduct({ id: '', name: '', email: '', addr: '' }); // clear form
      onInsert(); // refresh list
    } catch (err) {
      console.error('Insert Error:', err);
      alert('Insert Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="id" placeholder="ID" value={product.id} onChange={handleChange} required /><br />
      <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required /><br />
      <input type="email" name="email" placeholder="Email" value={product.email} onChange={handleChange} required /><br />
      <input type="text" name="addr" placeholder="Address" value={product.addr} onChange={handleChange} required /><br />
      <button type="submit">Insert</button>
    </form>
  );
}

export default ProductForm;
