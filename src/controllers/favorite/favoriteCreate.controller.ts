import { Response, Request } from "express";
import favoriteCreateService from "../../services/favorite/favoriteCreate.service";

const favoriteCreateController = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const {
      char_id,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
      created,
    } = req.body;

    const newFavorite = await favoriteCreateService({
      user_id,
      char_id,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
      created,
    });

    return res.status(201).send(newFavorite);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default favoriteCreateController;
