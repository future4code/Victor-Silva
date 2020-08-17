import { Response } from 'express';

const errorHandler = (
      error: Error | string,
      res: Response,
      statusCode = 400
) => {
      return res.status(statusCode).json({ message: error });
};

export default errorHandler;
