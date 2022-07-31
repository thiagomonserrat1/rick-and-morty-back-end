import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const date = new Date();
    const newUser = await userCreateService({
      name,
      email,
      password,
      created_at: date,
      update_at: date,
    });

    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default userCreateController;
