"use client";
import { useState } from "react";
import { ProductType } from "../../Services/Products";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import SuccessToast from "../SuccessToast";
import { UseCart } from "../../Hooks/UseCart";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { id, name, imageUrl, price } = product;
  const { addProduct } = UseCart();

  return (
    <>
      <Card>
        <Link href={`/products/${id}`}>
          <Image
            className="card-img-top"
            src={imageUrl}
            alt={name}
            height={200}
            width={600}
          />
        </Link>
        <CardBody>
          <Link href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
            R$ {price}
          </CardSubtitle>

          <Button
            color="dark"
            className="pb-2"
            block
            onClick={() => {
              addProduct(product);
              setToastIsOpen(true);
              setTimeout(() => {
                setToastIsOpen(false);
              }, 1000 * 3);
            }}
          >
            Adicionar ao carrinho{" "}
          </Button>
        </CardBody>
      </Card>
      <SuccessToast
        toastIsOpen={toastIsOpen}
        setToastIsOpen={setToastIsOpen}
      ></SuccessToast>
    </>
  );
};

export default ProductCard;
