import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder ,userOrders,verifyOrder,updateStatus} from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware,userOrders)
orderRouter.post("/list", listOrders)
orderRouter.post("/status", updateStatus)


export default orderRouter;

//OK