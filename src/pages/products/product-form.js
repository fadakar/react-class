import React, {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./product-form.module.css";
import Modal from "../../components/modal/modal";

export const ProductForm = ({product, onSave}) => {
    const titleRef = useRef();
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
    });

    const [dataSpanshot, setDataSnapshot] = useState(data);
    const [isDiscardConfirmShow, setIsDiscardConfirmShow] = useState(false);


    useEffect(() => {
        setData(product);
        setDataSnapshot(product);
    }, [product]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSave(data);
    };

    const onTitleChangeHandler = (e) => {
        // console.log(document.getElementById("title").value);
        // console.log(titleRef.current.value);
        // console.log(e.target.value);
        setData({...data, title: e.target.value});
    };

    const onChangeHandler = (e) => {
        // console.log(e.target.name)

        setData({...data, [e.target.name]: e.target.value});
    };

    const onNumberChangeHandler = (e) => {
        setData({...data, [e.target.name]: parseFloat(e.target.value)});
    };

    const onCancelHandler = (force = false) => {
        console.log({ d: isFormDirty(), f: force })
        if (isFormDirty() && !force) {
            setIsDiscardConfirmShow(true);
        } else {
            navigate(-1);
        }
    };

    const isFormDirty = () => {
        return data !== dataSpanshot;
    };

    return (
        <form className={styles["product-form"]} onSubmit={onSubmitHandler}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={onTitleChangeHandler}
                ref={titleRef}
            />

            <label htmlFor="price">Price</label>
            <input
                type="text"
                id="price"
                name="price"
                value={data.price}
                onChange={onNumberChangeHandler}
            />

            <label htmlFor="discount-percentage">Discount Percentage</label>
            <input
                type="text"
                id="discount-percentage"
                name="discountPercentage"
                value={data.discountPercentage}
                onChange={onNumberChangeHandler}
            />

            <label htmlFor="rating">Rating</label>
            <input
                type="text"
                id="rating"
                name="rating"
                value={data.rating}
                onChange={onNumberChangeHandler}
            />

            <label htmlFor="stock">Stock</label>
            <input
                type="text"
                id="stock"
                name="stock"
                value={data.stock}
                onChange={onNumberChangeHandler}
            />

            <label htmlFor="brand">Brand</label>
            <input
                type="text"
                id="brand"
                name="brand"
                value={data.brand}
                onChange={onChangeHandler}
            />

            <label htmlFor="category">Category</label>
            <input
                type="text"
                id="category"
                name="category"
                value={data.category}
                onChange={onChangeHandler}
            />

            <label htmlFor="description">Description</label>
            <textarea
                type="text"
                id="description"
                name="description"
                rows={4}
                value={data.description}
                onChange={onChangeHandler}
            />

            <div className={styles["footer"]}>
                <button type="submit" className={styles["save-button"]}>
                    Save
                </button>
                <button type="button" className={styles["cancel-button"]} onClick={onCancelHandler.bind(this,false)}>
                    Cancel
                </button>
            </div>

            <Modal isShow={isDiscardConfirmShow}
                   onReject={() => setIsDiscardConfirmShow(false)}
                   onAccept={() => onCancelHandler(true)}
                   title='Product Discard'>
                Are you sure to discard form changes ?
            </Modal>
        </form>

    );
};
