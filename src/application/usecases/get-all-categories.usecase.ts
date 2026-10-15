import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CustomError } from '../../infrastructure/web/erros/custom.error';

export class GetAllCategoriesUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  execute(countCategories: number): Promise<Category[]> {
    if (!Number.isInteger(countCategories) || countCategories < 1 || countCategories > 100) {
      return Promise.reject(CustomError.badRequest('countCategories debe ser un entero entre 1 y 100'));
    }
    return this.repository.getAll(countCategories);
  }
}
