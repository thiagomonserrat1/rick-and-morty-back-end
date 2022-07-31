import { AppDataSource } from "../../data-source";
import { Favorites } from "../../entities/favorite";
import { ICreateFavorite } from "../../interfaces/favorite";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const favoriteCreateService = async ({
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
}: ICreateFavorite) => {
  const favoriteRepository = AppDataSource.getRepository(Favorites);
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.id === user_id);
  console.log(user);

  const fave = await favoriteRepository.find();

  const fav = fave.find((fav) => fav.char_id === char_id);

  if (!user) {
    throw new AppError("Username not fund", 404);
  }

  if (!fav) {
    const favorite = favoriteRepository.create({
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
    await favoriteRepository.save(favorite);
    user?.favorites.push(favorite);
    userRepository.save(user);

    return favorite;
  } else if (fav) {
    await favoriteRepository.save(fav);
    user?.favorites.push(fav);
    userRepository.save(user);
    return fav;
  }
};

export default favoriteCreateService;
