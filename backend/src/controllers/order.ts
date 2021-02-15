import { Request, Response } from "express";

import { Order } from "./../models";

export const postNewOrder = async (req: Request, res: Response) => {
  const {
    orderItems,
    totalItems,
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
      totalItems,
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

export const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({ user: req.body.user._id });
  res.json(orders);
};

export const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.json(orders);
};

export const getOrderById = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.isPaid = true;
    order.deliveredOn = new Date();
    order.paidOn = new Date();
    await order.save();

    res.json({ message: "Product Delivered and Amount received" });
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
};
