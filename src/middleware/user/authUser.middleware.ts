import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import jwt from "jsonwebtoken";
import { IToken } from "../../interfaces/user";
import console from "console";

interface RequestWithUserRole extends Request {
  userEmail?: Record<string, any>;
}
const authTokenMiddleware = (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    const errorCatched = new AppError("Missing authorization token", 401);
    return handleError(errorCatched, res);
  }
  token = token.replace("Bearer ", "");
  console.log(token);
  const secretKey = process.env.POSTGRES_SECRET_KEY || "secret";

  jwt.verify(token as string, secretKey as string, (err: any, decoded: any) => {
    if (err) {
      const errorCatched = new AppError("Invalid Token", 401);
      handleError(errorCatched, res);
      return;
    }
  });
  const decoded = jwt.verify(token, secretKey) as IToken;

  req.userEmail = {
    email: decoded.email,
  };

  next();
};
export default authTokenMiddleware;
