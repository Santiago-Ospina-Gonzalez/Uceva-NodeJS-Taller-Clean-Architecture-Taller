import { Request, Response } from 'express';
import { GetAllOrdersUseCase } from '../../../application/usecases/get-all-orders.usecase';
import { HandleError } from '../erros/handle.error';

export class OrdersController {
  constructor(private readonly useCase: GetAllOrdersUseCase) {}
  getAll = (req: Request, res: Response): void => {
    this.useCase.execute(Number(req.params.countOrders))
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
