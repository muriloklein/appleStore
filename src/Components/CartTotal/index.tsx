"use client";
import { Card, CardBody } from "reactstrap";
import { UseCart } from "../../Hooks/UseCart";

const CartTotal = () => {
  const { cart } = UseCart();

  return (
    <Card className="ms-auto" style={{ maxWidth: "20rem" }}>
      <CardBody className="d-flex justify-content-between">
        <strong>Total:</strong>
        <span>
          R$ {cart.reduce((total, product) => total + product.price, 0)}
        </span>
      </CardBody>
    </Card>
  );
};

export default CartTotal;
