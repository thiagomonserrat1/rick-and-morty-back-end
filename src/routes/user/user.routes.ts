import { Router } from "express";
import userListController from "../../controllers/user/userList.controller";
import userCreateController from "../../controllers/user/userCreate.controller";
import userLoginController from "../../controllers/user/userLogin.controller";
import favoriteCreateController from "../../controllers/favorite/favoriteCreate.controller";
import favoriteListController from "../../controllers/favorite/favoriteList.controller";
import favoriteDeleteController from "../../controllers/favorite/favoriteDelete.controller";
import authTokenMiddleware from "../../middleware/user/authUser.middleware";
import userUpdateController from "../../controllers/user/userUpdate.controller";

const userRouter = Router();

userRouter.get("/thithi", (req, res) => {
  res.send("Hello Thithi");
});

userRouter.get("/favorites/:id", authTokenMiddleware, favoriteListController);
userRouter.get("/", userListController);
userRouter.post("/", userCreateController);
userRouter.post("/login", userLoginController);
userRouter.post(
  "/favorites/:user_id",
  authTokenMiddleware,
  favoriteCreateController
);
userRouter.delete("/:id", authTokenMiddleware, userCreateController);
userRouter.delete(
  "/favorites/:id/:char_id",
  authTokenMiddleware,
  favoriteDeleteController
);
userRouter.patch("/:id", authTokenMiddleware, userUpdateController);

export default userRouter;
