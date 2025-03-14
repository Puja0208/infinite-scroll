import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;
function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        LIMIT * currentPage
      }`
    );
    const jsonData = await data.json();
    console.log(jsonData.total / LIMIT);
    setProducts(jsonData.products);
    setNoOfPages(parseInt(jsonData.total / LIMIT));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              description={product.description}
              discountPercentage={product.discountPercentage}
            />
          );
        })}
      </div>
      <div className="p-10 m-10 cursor-pointer">
        {currentPage > 0 && (
          <span
            className="font-bold"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={"p-4 " + (pN === currentPage && "font-bold underline")}
            key={pN}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="font-bold"
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
}

export default Pagination;
