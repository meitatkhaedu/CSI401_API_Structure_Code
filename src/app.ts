import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { member } from "./member/route";
import { auth } from "./auth/route";
import { income } from "./income/route";
import { useSwagger } from "../middleware/swagger";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/auth", auth);

app.use("/member", member);

app.use("/income", income);

useSwagger(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
