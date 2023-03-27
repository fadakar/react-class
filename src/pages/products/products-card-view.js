import {useState} from "react";
import {Link} from "react-router-dom";
import AddNewPanel from "../../components/add-new-panel/add-new-panel";
import {Card} from "./card/card";
import {CardFooter} from "./card/card-footer";
import {CardText} from "./card/card-text";
import {CardTitle} from "./card/card-title";
import {CardWrapper} from "./card/card-wrapper";
import Modal from "../../components/modal/modal";

const ProductsCardView = ({products , onDelete}) => {
    const [isConfirmShow, setIsConfirmShow ] = useState(false);
    const [deleteId, setDeleteId ] = useState(undefined);

    const deleteClickHandler = (id) => {
        setDeleteId(id);
        setIsConfirmShow(true);
    };

    const onDeleteAcceptHandler = (id) => {
        setIsConfirmShow(false);
        onDelete && onDelete(id);
    };

    return (
        <div>
            <AddNewPanel/>
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
                                <span className="material-symbols-outlined" onClick={deleteClickHandler.bind(this, product.id)}>delete</span>
                            </button>
                        </CardFooter>
                    </Card>
                ))}

                <Modal isShow={isConfirmShow}
                       id={deleteId}
                       onReject={() => setIsConfirmShow(false)}
                       onAccept={onDeleteAcceptHandler}
                       title='Delete Product'>
                    Are you sure to delete product ?
                </Modal>
            </CardWrapper>
        </div>
    );
};

export default ProductsCardView;
