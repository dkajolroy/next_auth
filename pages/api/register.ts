import { RegisterBodyReq } from "@/utils/serverInterface";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../config/dbConfig";
import UserModel from "../../models/userModel";
import { hash } from "bcrypt-ts";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.send("Danger Route");
  }
  if (req.method === "POST") {
    const { name, email, password }: RegisterBodyReq = req.body;
    if (!name || !email || !password)
      return res
        .status(403)
        .send({ message: "Please enter valid information !" });

    const alreadyExists = await UserModel.findOne({ email });
    if (alreadyExists)
      return res.status(403).send({ message: "User already exist !" });
    const bcryptPassword = await hash(password, 10);
    const user = await UserModel.create({
      ...req.body,
      password: bcryptPassword,
    });
    return res.status(200).send({
      message: "Registration successfully",
      user,
    });
  }
};

export default dbConnect(register);
