import express, { Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";
import RouteNotFoundHandler from "./app/middleware/routeErrorHandle";

const app = express();

// parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/products", productRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is Running!",
  });
});

app.use(RouteNotFoundHandler);
export default app;
