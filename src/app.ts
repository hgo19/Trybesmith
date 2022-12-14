import express from 'express';
import productRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';
import LoginRoute from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);
app.use('/login', LoginRoute);

export default app;
