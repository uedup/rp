import "./index.css";

type PType = {
  product: {
    id: number;
    name: string;
  };
};
const Product = (props: PType) => {
  const { product } = props;
  return <div className="product">{product.name}</div>;
};

export default Product;
