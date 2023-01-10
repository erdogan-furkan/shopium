import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import ProductList from "../components/ProductList";

const Cart = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>Cart</Container>
    </section>
  );
};

export default Cart;
