import React from 'react'
import { useState } from 'react';

function Cart() {
    const productCart = [];
    const [quantities, setQuantities] = useState({});

    const increment = (itemId) => {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 0) + 1
      }));
    };
  
    const decrement = (itemId) => {
      if (quantities[itemId] && quantities[itemId] > 0) {
        setQuantities(prevQuantities => ({
          ...prevQuantities,
          [itemId]: prevQuantities[itemId] - 1
        }));
      }
    };
   
  

    const q = localStorage.getItem("CartProductQuntity");
    console.log(q);
    console.log(q["p1"]);
    console.log(quantities);


    // localStorage.setItem("ProductCart", JSON.stringify(productCart))

    // const p = {
    //     id: 'p1',
    //     price:126,
    //     title: 'Man Perfume',
    //     description: 'Denver - Hamilton',
    //   }
    
    // localStorage.setItem("ProductCart", JSON.stringify(p));

    // const carts = JSON.parse(localStorage.getItem('ProductCart'))
    // console.log(carts);
    // carts.push(p)
    // localStorage.setItem('ProductCart', JSON.stringify(carts));

    const removeItem = () => {

    }
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const email = user.email;

    const productP = JSON.parse(localStorage.getItem("ProductCart"));
    // console.log(productP);
    const product = productP.filter(product => product.email === email);
    // console.log(product);


  return (
    <div className="flex items-center justify-center py-8">
      <div className="bg-black">
           {product.map((item) => (
        <div className="card w-96 bg-gray-700 text-white shadow-xl p-3 m-3 border rounded-md z" key = {item.key}>
          <div>
            <div className='flex flex-row'>
            <h2 className="my-3 text-xl">{item.title}</h2>
            <h2 className="my-3 ml-28 text-xl">${(item.price)*(q[item.id])}</h2>
            <h2 className="my-5 ml-2 text-sm italic">(${item.price}/item)</h2>
            </div>
            {/* <h2 className="my-3">{item.description}</h2> */}

            <div className="flex flex-row">
              <h2>{q[item.id]}</h2>
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
