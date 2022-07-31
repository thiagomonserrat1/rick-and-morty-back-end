import { error } from "console";
import { Request, Response } from "express";
import favoriteListService from "../../services/favorite/favoriteList.service";

const favoriteListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const favorite = await favoriteListService(id);
    return res.status(200).send(favorite);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default favoriteListController;
