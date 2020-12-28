import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const con = await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      ` MongoDB Connected: `.inverse.green + ` ${con.connection.host}`
    );
  } catch (error) {
    console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
    process.exit(1);
  }
};
