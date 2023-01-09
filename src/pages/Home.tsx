import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import ProductList from "../components/ProductList";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <ProductList />
      </Container>
    </section>
  );
};

export default Home;
