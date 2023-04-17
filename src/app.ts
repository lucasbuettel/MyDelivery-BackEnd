import express from "express";
import cors from "cors";
import authenticationRouter from "./routers/authentication-router";
import addressRouter from "./routers/address-router";
import productsRouter from "./routers/products-router";
import cartRouter from "./routers/cart-router";

const app = express();

app.use(cors());
app.use(express.json())
app.use('/user', authenticationRouter);
app.use('/address', addressRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

export default app;