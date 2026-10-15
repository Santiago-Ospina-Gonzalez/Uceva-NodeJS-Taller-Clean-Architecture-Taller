import { faker } from '@faker-js/faker';
import { Supplier } from '../../domain/models/supplier.model';

export class SupplierDatasource {
  async getAll(count: number): Promise<Supplier[]> {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.company.name(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    }));
  }
}
