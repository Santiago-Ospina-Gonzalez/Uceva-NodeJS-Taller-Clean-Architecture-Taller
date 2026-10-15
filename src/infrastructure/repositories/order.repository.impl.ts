import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { OrderDatasource } from '../datasources/order.datasource';

export class OrderRepositoryImpl extends OrderRepository {
  constructor(private readonly datasource: OrderDatasource) { super(); }
  getAll(countOrders: number): Promise<Order[]> {
    return this.datasource.getAll(countOrders);
  }
}
