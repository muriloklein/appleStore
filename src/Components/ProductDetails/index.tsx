"use client";
import { useState } from "react";
import { ProductType } from "../../Services/Products";
import { Button, Col, Row } from "reactstrap";
import Image from "next/image";
import SuccessToast from "../SuccessToast";
import { UseCart } from "../../Hooks/UseCart";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = UseCart();

  return (
    <Row className="g-5 mt-3">
      <Col lg={6}>
        <div style={{ overflowX: "scroll" }}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={350}
            width={450}
          ></Image>
        </div>
      </Col>
      <Col lg={6}>
        <h1>{product.name}</h1>
        <h2 className="text-muted">R$ {product.price}</h2>
        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>
        <p className="text-muted">Em estoque: {product.inStock}</p>
        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product);
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          Compre agora
        </Button>
        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        ></SuccessToast>
      </Col>
    </Row>
  );
};

export default ProductDetails;
