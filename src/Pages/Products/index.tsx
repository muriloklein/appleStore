import Header from "../../Components/Header";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import ProductsList from "@/Components/ProductList";
import { ProductType, fetchProducts } from "../../Services/Products";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};

const Products: NextPage = (props: {
  children?: ReactNode;
  products?: ProductType[];
}) => {
  return (
    <>
      <Head>
        <title>Next Store Home</title>
      </Head>
      <meta name="description" content="Conheça nossos produtos" />

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Nossos Produtos</h1>
          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  );
};

export default Products;
