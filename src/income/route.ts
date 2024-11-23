import express, { Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";

export const income = express();

// Define a User interface for type safety
interface User extends Document {
  email: string;
  phoneModel: string;
}

// Schema with proper syntax
const usersSchema = new Schema<User>({
  email: { type: String, required: true },
  phoneModel: { type: String, required: true },
});

const Users = mongoose.model<User>("testUser", usersSchema);

// Establish MongoDB connection once, outside request handlers

// Route to add a new user
income.post("/add", async (req: Request, res: Response) => {
  try {
    mongoose
      .connect(`${process.env.ConnectionString}`, { dbName: "test" })
      .then(() => console.log("Database connected"))
      .catch((err) => console.error("Database connection error:", err));
    const { email, phoneModel } = req.body;
    // const dbResponse = await Users.insertMany([
    //   { email, phoneModel },
    //   { email, phoneModel },
    // ]);

    const dbResponse = await Users.find({
      email: email,
      _id: "6727096839d18fe55b55cba1",
    });

    return res.status(200).json({
      code: "Success-01-0001",
      status: "Success",
      data: dbResponse,
    });
  } catch (err) {
    return res.status(500).json({
      code: "Error-01-0001",
      status: "Error",
      data: err,
    });
  }
});

// Route to get static user info
income.post("/getInfo", (req: Request, res: Response) => {
  const { empId } = req.body;
  return res.status(200).json({
    code: "Success-01-0001",
    status: "Success",
    data: {
      empId,
      empName: "เมธัส คำจาด",
      empSalary: 400000,
      empLeave: 5,
      empLate: 1,
    },
  });
});
