import express, { Request, Response } from "express";

export const member = express();

interface responseSuccess {
  code: string;
  status: string;
  data: object;
}

interface responseError {
  code: string;
  status: string;
  message: object;
}

member.post("/register", (req: Request, res: Response) => {
  const response: responseSuccess = {
    code: "Success-01-0001",
    status: "OK",
    data: {},
  };

  res.status(200).send(response);
});
