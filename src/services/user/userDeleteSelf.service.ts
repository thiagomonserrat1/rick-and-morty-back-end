import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserDelete } from "../../interfaces/user";

const userDeleteSelfService = async ({ id }: UserDelete) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.id === id);

  await userRepository.delete(account!.id);
  return true;
};

export default userDeleteSelfService;
