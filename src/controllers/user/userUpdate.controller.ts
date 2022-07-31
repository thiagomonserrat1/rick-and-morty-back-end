import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const userUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await userUpdateService({
      id,
      name,
      email,
      password,
    });

    return res.json(instanceToPlain(user));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;
