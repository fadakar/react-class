import React from "react";
import { BasePage } from "../../components/base-page";
import { ProductForm } from "./product-form";

const ProductEditPage = () => {
  const editProduct = {
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
  };

  const updateProduct = (product) => {
    console.log(product)
  }

  return (
    <BasePage title={"Edit Product"}>
      <ProductForm product={editProduct} onSave={updateProduct}/>
    </BasePage>
  );
};

export default ProductEditPage;
