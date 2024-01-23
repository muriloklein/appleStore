import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  ProductType,
  fetchProduct,
  fetchProducts,
} from "../../Services/Products";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "../../Components/Header";
import { Container } from "reactstrap";
import ProductDetails from "../../Components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const product = await fetchProduct(id);

    return {
      props: {
        product,
      },
    };
  }

  return {
    redirect: {
      destination: "/Products",
      permanent: false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

{
  /*aaaaa*/
}

const Product: NextPage = (props: {
  children?: ReactNode;
  product?: ProductType;
}) => {
  return (
    <>
      <Head>
        <title>{props.product?.name}</title>
        <meta name="description" content={props.product?.description} />
      </Head>
      <Header />
      <Container className="mt-5 text-center">
        <ProductDetails product={props.product!}></ProductDetails>
      </Container>
    </>
  );
};

export default Product;
