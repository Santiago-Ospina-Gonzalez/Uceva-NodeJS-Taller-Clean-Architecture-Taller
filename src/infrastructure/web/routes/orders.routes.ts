import { Router } from 'express';
import { GetAllOrdersUseCase } from '../../../application/usecases/get-all-orders.usecase';
import { OrderDatasource } from '../../datasources/order.datasource';
import { OrderRepositoryImpl } from '../../repositories/order.repository.impl';
import { OrdersController } from '../controllers/orders.controller';

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdersController(
      new GetAllOrdersUseCase(new OrderRepositoryImpl(new OrderDatasource()))
    );
    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtener pedidos
     *     tags: [Orders]
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema: { type: integer, minimum: 1, maximum: 100 }
     *     responses:
     *       200: { description: Pedidos generados }
     *       400: { description: Parámetro inválido }
     */
    router.get('/:countOrders', controller.getAll);
    return router;
  }
}
