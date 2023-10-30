import User from "@/app/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email, password);
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کتید");

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) throw new Error("حساب کاربری موجود نیست");

        const isValidPassword = await verifyPassword(password, user.password);
        console.log(isValidPassword);
        if (!isValidPassword) throw new Error("نام کاربری یا پسورد اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
