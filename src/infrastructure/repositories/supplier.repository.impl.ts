import { Supplier } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/repositories/supplier.repository';
import { SupplierDatasource } from '../datasources/supplier.datasource';

export class SupplierRepositoryImpl extends SupplierRepository {
  constructor(private readonly datasource: SupplierDatasource) { super(); }
  getAll(countSuppliers: number): Promise<Supplier[]> {
    return this.datasource.getAll(countSuppliers);
  }
}
