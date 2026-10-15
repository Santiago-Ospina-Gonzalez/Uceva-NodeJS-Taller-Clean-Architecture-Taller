import { Supplier } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/repositories/supplier.repository';
import { CustomError } from '../../infrastructure/web/erros/custom.error';

export class GetAllSuppliersUseCase {
  constructor(private readonly repository: SupplierRepository) {}

  execute(countSuppliers: number): Promise<Supplier[]> {
    if (!Number.isInteger(countSuppliers) || countSuppliers < 1 || countSuppliers > 100) {
      return Promise.reject(CustomError.badRequest('countSuppliers debe ser un entero entre 1 y 100'));
    }
    return this.repository.getAll(countSuppliers);
  }
}
