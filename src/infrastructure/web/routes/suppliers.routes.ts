import { Router } from 'express';
import { GetAllSuppliersUseCase } from '../../../application/usecases/get-all-suppliers.usecase';
import { SupplierDatasource } from '../../datasources/supplier.datasource';
import { SupplierRepositoryImpl } from '../../repositories/supplier.repository.impl';
import { SuppliersController } from '../controllers/suppliers.controller';

export class SuppliersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new SuppliersController(
      new GetAllSuppliersUseCase(new SupplierRepositoryImpl(new SupplierDatasource()))
    );
    /**
     * @openapi
     * /api/suppliers/{countSuppliers}:
     *   get:
     *     summary: Obtener proveedores
     *     tags: [Suppliers]
     *     parameters:
     *       - in: path
     *         name: countSuppliers
     *         required: true
     *         schema: { type: integer, minimum: 1, maximum: 100 }
     *     responses:
     *       200: { description: Proveedores generados }
     *       400: { description: Parámetro inválido }
     */
    router.get('/:countSuppliers', controller.getAll);
    return router;
  }
}
