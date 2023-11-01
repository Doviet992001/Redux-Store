import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import cartIcon from "./../../images/cart_icon.png";
import styles from "./Cart.module.css";
import { ICart, addToCart, removeSingleItem, removeToCart } from "./cartSlice";
import { getImageBySku, listImages } from "../products/productSlice";
type Props = {};

const Cart = (props: Props) => {
  const [cartActive, setCartActive] = useState(false);
  const cart: ICart[] = useAppSelector((state) => state.cart.carts);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0)
  const ClickCartHandler = () => {
    setCartActive((prevState) => !prevState);
  };

  const handleIncrement = (e: any) => {
    dispatch(addToCart(e));
  };

  const handlerRemove = (productId: any) => {
    dispatch(removeToCart(productId));
  };

  const handlerSingleDecrement = (e: any) => {
    dispatch(removeSingleItem(e));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => { 
    let totalPrice = 0;
    cart.map(item => {
      totalPrice = item.price * item.number + totalPrice;
    });
    setTotalPrice(totalPrice)
  };

  useEffect(() => {
    total()
  }, [total])

  return (
    <div>
      {!cartActive && (
        <div onClick={ClickCartHandler} className={styles.container}>
          <img className={styles.cart} src={cartIcon} alt="" />
          <p className={styles.quantity}>{cart.length}</p>
        </div>
      )}
      {cartActive && (
        <div className={styles.container_active}>
          <div className={styles.cart_header}>
            <img className={styles.cart_header_icon} src={cartIcon} alt="" />
            <p className={styles.cart_header_title}>Cart</p>
            <p className={styles.quantity_header}>{cart.length}</p>
          </div>

          <div className={styles.cart_body}>
            {cart.length === 0 && (
              <p className={styles.cart_body_text}>
                Add some products in the cart
                <br />
                <br />
                :)
              </p>
            )}
            <div>
              {cart.map((item) => (
                <div key={item.id} style={{ display: "flex" }}>
                  <img
                    className={styles.cart_img}
                    src={getImageBySku(item.sku, listImages) || ""}
                    alt=""
                  />
                  <div className={styles.cart_info}>
                    <p className={styles.cart_text}>{item.title}</p>
                    <p className={styles.cart_size}>
                      {item.availableSizes[0]} | {item.style}
                    </p>
                    <p className={styles.cart_quantity}>
                      Quantity: {item.number}
                    </p>
                  </div>
                  <div className={styles.cart_pay}>
                    <p
                      className={styles.cart_remove}
                      onClick={() => handlerRemove(item.id)}
                    >
                      X
                    </p>
                    <p className={styles.cart_price}>
                      $ {(item.price * item.number).toFixed(2)}
                    </p>
                    <div className={styles.cart_button}>
                      <button
                        onClick={
                          item.number <= 1
                            ? () => handlerRemove(item.id)
                            : () => handlerSingleDecrement(item)
                        }
                        className={styles.cart_remove_button}
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleIncrement(item)}
                        className={styles.cart_add_button}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.pay} >
              <div className={styles.pay_title}>SubTotal</div>
              <div className={styles.pay_total}>
                <p className={styles.pay_totalprice}>${totalPrice.toFixed(2)}</p>        
              </div>
              <button className={styles.button_checkout}>CHECKOUT</button>
            </div>
          </div>
          <div onClick={ClickCartHandler} className={styles.button}>
            <p className={styles.button_text}>X</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
