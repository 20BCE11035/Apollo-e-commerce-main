import express from "express";
import { orderControllers } from "./order.controller";
import { validate } from "../../middleware/validate";
import { getAllOrdersSchemaValidate, orderSchemaZodValidation } from "./order.zod.validation";


const router = express.Router();

// will call controller functions 
router.post(
  "/",
  validate(orderSchemaZodValidation),
  orderControllers.createOrder
);
router.get(
  "/",
  validate(getAllOrdersSchemaValidate),
  orderControllers.getAllOrders
);

export const OrderRoutes = router;
