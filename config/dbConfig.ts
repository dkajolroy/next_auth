import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const mongoConnect =
  (handler: Function) => (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connection.readyState) {
      return handler(req, res);
    }
    const uri = process.env.MONGODB_URI;
    mongoose
      .connect(uri || "")
      .then(() => console.log("Connect success"))
      .catch((error) => console.log("Error connecting"));
    return handler(req, res);
  };

export default mongoConnect;
