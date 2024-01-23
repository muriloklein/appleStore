"use client";
import Header from "@/Components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import CartTable from "../../Components/CartTable";
import CartTotal from "../../Components/CartTotal";
import "bootstrap/dist/css/bootstrap.min.css";


const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Store Cart</title>
        <meta name="description" content="Meu Carrinho de compras" />
      </Head>
      <meta name="description" content="Carrinho de compras" />

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Carrinho</h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  );
};

export default Cart;
