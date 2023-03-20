import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCT = [
  {
    id: "m1",
    name: "Jacket",
    description: "Denim Jacker from 80s",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Shirt",
    description: "Fresh oversize tshirt",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Hat",
    description: "Baseball hat",
    price: 12.99,
  },
  {
    id: "m4",
    name: "shoe",
    description: "Best way to walk",
    price: 18.99,
  },
];

const AvailableProducts = () => {
  const producsList = DUMMY_PRODUCT.map((product) => (
    <ProductItem
      key={product.id}
      id= {product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{producsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
