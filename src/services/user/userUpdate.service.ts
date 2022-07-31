import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { hash } from "bcrypt";
import { User } from "../../entities/user.entity";
import { UserUp } from "../../interfaces/user";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
}: UserUp): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError("Not found any user with this id", 409);
  }

  if (password) {
    const hashedPassword = await hash(password, 8);
    password ? (user.password = hashedPassword) : user.password;
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;
  user.updated_at = new Date();

  await userRepository.save(user);

  return user;
};

export default userUpdateService;
