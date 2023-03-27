import React from "react";
import { Link } from "react-router-dom";
import AddNewPanel from "../../components/add-new-panel/add-new-panel";
import { Card } from "./card/card";
import { CardFooter } from "./card/card-footer";
import { CardText } from "./card/card-text";
import { CardTitle } from "./card/card-title";
import { CardWrapper } from "./card/card-wrapper";

const ProductsCardView = ({ products }) => {
  return (
    <div>
      <AddNewPanel />
      <CardWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <CardTitle>{product.title}</CardTitle>
            <CardText>{product.description}</CardText>
            <CardText>
              Price: {product.price}{" "}
              <span className="material-symbols-outlined">attach_money</span>
            </CardText>

            <CardFooter>
              <Link to={'edit/' + product.id}>
                <span className="material-symbols-outlined">edit</span>
              </Link>
              <button>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </CardFooter>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
};

export default ProductsCardView;
