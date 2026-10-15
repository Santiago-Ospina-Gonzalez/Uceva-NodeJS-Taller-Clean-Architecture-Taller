import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { CustomError } from '../../infrastructure/web/erros/custom.error';

export class GetAllOrdersUseCase {
  constructor(private readonly repository: OrderRepository) {}

  execute(countOrders: number): Promise<Order[]> {
    if (!Number.isInteger(countOrders) || countOrders < 1 || countOrders > 100) {
      return Promise.reject(CustomError.badRequest('countOrders debe ser un entero entre 1 y 100'));
    }
    return this.repository.getAll(countOrders);
  }
}
