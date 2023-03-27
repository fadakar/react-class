import React, { useEffect, useState } from "react";
import { BasePage } from "../../components/base-page";
import ProductsCardView from "./products-card-view";

import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const ProductsPage = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + "/products").then((response) => {
      console.log(response);
      setProductList(response.data);
    });
  }, []);

  
  return (
    <BasePage BasePage title={"Products"}>
      {productList.length > 0 ? (
        <ProductsCardView products={productList} />
      ) : (
        <p>List is Empty</p>
      )}
    </BasePage>
  );
};

export default ProductsPage;
