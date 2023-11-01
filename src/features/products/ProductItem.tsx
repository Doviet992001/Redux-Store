import { Col } from "antd";
import styles from "./Product.module.css";

type Props = {
  title: string;
  price: number;
  image: string;
  isFreeShipping: boolean;
  onAdd: Function 
};

const ProductItem = ({ title, price, image, isFreeShipping,onAdd  }: Props) => {
  return (
    <Col span={6}>
      <div className={styles.container}>
        {isFreeShipping === true && (
          <p className={styles.label}>Free shipping</p>
        )}
        <img className={styles.image} src={image} alt="" />
        <div className={styles.title}>{title}</div>
        <p>${price}</p>
        <button
          onClick={() => onAdd()}
          className={styles.button}
        >
          Add to cart
        </button>
      </div>
    </Col>
  );
};

export default ProductItem;
