import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../domain/models/order.model';

export class OrderDatasource {
  async getAll(count: number): Promise<Order[]> {
    const statuses: OrderStatus[] = ['Pendiente', 'Enviado', 'Entregado'];
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      customer: faker.person.fullName(),
      total: Number(faker.commerce.price({ min: 20, max: 1000, dec: 2 })),
      status: faker.helpers.arrayElement(statuses),
    }));
  }
}
