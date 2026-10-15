import { Router } from 'express';
import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';
import { CategoryDatasource } from '../../datasources/category.datasource';
import { CategoryRepositoryImpl } from '../../repositories/category.repository.impl';
import { CategoriesController } from '../controllers/categories.controller';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController(
      new GetAllCategoriesUseCase(new CategoryRepositoryImpl(new CategoryDatasource()))
    );
    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtener categorías
     *     tags: [Categories]
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema: { type: integer, minimum: 1, maximum: 100 }
     *     responses:
     *       200: { description: Categorías generadas }
     *       400: { description: Parámetro inválido }
     */
    router.get('/:countCategories', controller.getAll);
    return router;
  }
}
