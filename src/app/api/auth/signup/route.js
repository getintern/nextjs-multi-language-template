import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, email, password } = await req.json();
    console.log("backEnd get Firstname:", firstName);

    if (!firstName || !lastName || !email || !password)
      return NextResponse.json(
        { error: "لطفا اطلاعات درست را ارسال کنید" },
        { status: 422 }
      );

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return NextResponse.json(
        { error: "این حساب کاربری موجود است", status: 422 },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    const createdNewUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log(createdNewUser);

    return NextResponse.json(
      { message: "حساب کاربری ساخته شد", status: 201 },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
