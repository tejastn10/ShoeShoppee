import { Request, Response } from "express";

import { Order } from "./../models";

export const postNewOrder = async (req: Request, res: Response) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = await req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Items in the Order");
  } else {
    const order = new Order({
      user: req.body.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
};
