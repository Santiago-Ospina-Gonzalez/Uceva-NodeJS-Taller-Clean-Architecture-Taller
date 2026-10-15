import { faker } from '@faker-js/faker';
import { Category } from '../../domain/models/category.model';

export class CategoryDatasource {
  async getAll(count: number): Promise<Category[]> {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
    }));
  }
}
