import React from 'react'
import { useState } from 'react';

function Cart() {
    const productCart = [];
    const [quantities, setQuantities] = useState({});

    function findIndexByKey(array, key) {
      for (let i = 0; i < array.length; i++) {
          if (key in array[i]) {
              return i;
          }
      }
      return -1; 
  }

    const increment = (itemId) => {
      const count = JSON.parse(localStorage.getItem("CartProductQuntity"));
        count.forEach(item => {
            if (item[itemId]) {
                item[itemId] += 1;
            }
        });
    localStorage.setItem("CartProductQuntity", JSON.stringify(count));
    };
  
    const decrement = (itemId) => {
      const count = JSON.parse(localStorage.getItem("CartProductQuntity"));
      const index = count.findIndex(item => item[itemId]);

      const i = findIndexByKey(count, itemId);
      const v = i !== -1 ? Object.values(count[i])[0] : undefined;
        count.forEach(item => {
            if (item[itemId]) {
                item[itemId] -= 1;
            }
        });

        if (v == 0){
          const productCart = JSON.parse(localStorage.getItem('ProductCart')) || [];
            const updatedProductCart = productCart.filter(product => product.id !== itemId);
            localStorage.setItem('ProductCart', JSON.stringify(updatedProductCart));
        }
    localStorage.setItem("CartProductQuntity", JSON.stringify(count));
    };
   
  

    const q = JSON.parse(localStorage.getItem("CartProductQuntity"));

  const iP1 = findIndexByKey(q, 'p1');
  const iP2 = findIndexByKey(q, 'p2');

  const vP1 = iP1 !== -1 ? Object.values(q[iP1])[0] : undefined;
  const vP2 = iP2 !== -1 ? Object.values(q[iP2])[0] : undefined;


    // localStorage.setItem("ProductCart", JSON.stringify(productCart))

  
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const email = user.email;

    const productP = JSON.parse(localStorage.getItem("ProductCart"));
    const product = productP.filter(product => product.email === email);



  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-black">
           {product.map((item) => (
        <div className="card w-96 bg-gray-700 text-white shadow-xl p-3 m-3 border rounded-md z" key = {item.key}>
          <div>
            <div className='flex flex-row'>
            <h2 className="my-3 text-xl">{item.title}</h2>
            <h2 className="my-3 ml-28 text-xl">${item.id === 'p1' ? (item.price)*(vP1) : item.id === 'p2' ? (item.price)*(vP2) : ''}</h2>
            <h2 className="my-5 ml-2 text-sm italic">(${item.price}/item)</h2>
            </div>
            <div className="flex flex-row">
            <h2>{item.id === 'p1' ? vP1 : item.id === 'p2' ? vP2 : ''}</h2>
              <button className="shadow-md border-white p-2 ml-60" onClick = {() => decrement(item.id)}>-</button>
              <button className="shadow-md border-white rounded-xs  p-2 ml-4" onClick = {() => increment(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart
