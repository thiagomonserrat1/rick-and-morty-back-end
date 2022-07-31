import { string } from "yup";
import { AppDataSource } from "../../data-source";
import { Favorites } from "../../entities/favorite";
import { User } from "../../entities/user.entity";
import { IDeleteFavorite } from "../../interfaces/favorite";
import { AppError } from "../../errors/AppError";

const favoriteDeleteService = async ({ id, charId }: IDeleteFavorite) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.id === id);
  if (!account) {
    throw new AppError("User not found", 401);
  }

  const favorite = account.favorites;
  console.log(charId);

  const charDelete = favorite.findIndex((char) => char.char_id == charId);
  console.log(charDelete);
  if (charDelete === -1) {
    throw new AppError("Char not found", 401);
  }
  favorite.splice(charDelete, 1);
  account.favorites = [...favorite];

  await userRepository.save(account);

  return account;
};

export default favoriteDeleteService;
