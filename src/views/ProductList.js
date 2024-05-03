import React from "react";
import { useState } from "react";

function ProductList() {
  const product = JSON.parse(localStorage.getItem("products"));

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const email = loggedInUser.email;

  const addToCart = (product) => {
    const count = JSON.parse(localStorage.getItem("CartProductQuntity"));
    let isProductInCart = count.some(item => item[product.id]);         
    console.log(count);

    if (isProductInCart) {
      count.forEach(item => {
          if (item[product.id]) {
              item[product.id] += 1;
          }
      });
  } else {
      count.push({ [product.id]: 1 });
      count.forEach(item => {
        if (item[product.id]) {
            item[product.id] += 1;
        }
    });

  }
  localStorage.setItem("CartProductQuntity", JSON.stringify(count));
    if (!isProductInCart){
    const carts = JSON.parse(localStorage.getItem('ProductCart'));
    carts.push(product);
    localStorage.setItem('ProductCart', JSON.stringify(carts));
    }
    

  }

  // const c = [];
  // localStorage.setItem("CartProductQuntity", JSON.stringify(c));

  return (  
    <div className="p-6 m- grid grid-cols-4">
      {product.map((item) => (
        <div className="card w-96 bg-base-100 shadow-xl p-3 m-3 border rounded-md z" key = {item.key}>
          <div>
            <h2 className="my-3">{item.title}</h2>
            <p className="my-3"> Price: {item.price}</p>
            <h2 className="my-3">{item.description}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary shadow-md border rounded-sm p-2 bg-gray-200" onClick={() =>
                        addToCart({
                          description: item.description,
                          id:item.id,
                          price: item.price,
                          title: item.title,
                          email: email
                        })
                      }>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
