import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import favoriteDeleteService from "../../services/favorite/favoriteDelete.service";

const favoriteDeleteController = async (req: Request, res: Response) => {
  try {
    const { id, char_id } = req.params;
    const charId = Number(char_id);
    await favoriteDeleteService({ id, charId });

    res.status(204).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default favoriteDeleteController;
