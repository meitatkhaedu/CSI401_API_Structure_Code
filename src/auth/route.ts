import express, { Request, Response } from "express";

export const auth = express();

interface responseObject {
  code: string;
  status: string;
  data: object;
}

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: User sign-in
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully signed in
 *       401:
 *         description: Unauthorized
 */
auth.post("/signin", (req: Request, res: Response) => {
  const headers: any = req.headers;
  const response: responseObject = {
    code: "Success-01-0001",
    status: "Sucess",
    data: {},
  };

  if (headers["x-application-key"] !== "ssp") {
    response.code = "Error-01-0001";
    response.status = "Error";
    response.data = { message: "x-application-key is require." };
    return res.status(401).json(response);
  }

  return res.status(200).json(response);
});

/**
 * @swagger
 * /auth/signout:
 *   post:
 *     summary: User sign-out
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Successfully signed in
 *       401:
 *         description: Unauthorized
 */
auth.get("/signout", (req: Request, res: Response) => {
  const response: responseObject = {
    code: "Success-01-0001",
    status: "OK",
    data: {
      message: "Signout",
    },
  };

  return res.status(200).send(response);
});
