import { Request, Response } from 'express';
import { GetAllSuppliersUseCase } from '../../../application/usecases/get-all-suppliers.usecase';
import { HandleError } from '../erros/handle.error';

export class SuppliersController {
  constructor(private readonly useCase: GetAllSuppliersUseCase) {}
  getAll = (req: Request, res: Response): void => {
    this.useCase.execute(Number(req.params.countSuppliers))
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
