import { Request, Response } from 'express';
import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';
import { HandleError } from '../erros/handle.error';

export class CategoriesController {
  constructor(private readonly useCase: GetAllCategoriesUseCase) {}
  getAll = (req: Request, res: Response): void => {
    this.useCase.execute(Number(req.params.countCategories))
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
