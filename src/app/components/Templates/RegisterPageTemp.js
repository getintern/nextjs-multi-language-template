"use client";
import { useEffect, useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import useFormValidation from "@/app/hooks/useReactHookForm";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./HomePageTemp.module.css";
import Link from "next/link";

const onSubmit = async (values) => {
  console.log(values);
};

const RegisterPageTemp = () => {
  const [checkDir, setCheckDir] = useState("ltr");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const htmlDocument = document.documentElement; // <html> element
    setCheckDir(htmlDocument.dir);
  }, []);

  // handle show password
  const handleShowPassword = () => setShow(!show);

  const bg = useColorModeValue("#f7fafc", "#2d3748");

  const { handleSubmit, register, errors, control, Controller } =
    useFormValidation();
  const t = useTranslations("Index");
  return (
    <Container maxW="xl" mt={20}>
      <h1 className={styles.title}>organize your favorite list </h1>
      <div className={styles.formContiner}>
        <h2 className={styles.titleOfFroum}>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormControl {...field} isInvalid={errors.firstName}>
                <FormLabel htmlFor="firstName">firstName</FormLabel>
                <InputGroup>
                  {checkDir === "ltr" ? (
                    <InputLeftElement pointerEvents="none">
                      <BsFillPersonFill />
                    </InputLeftElement>
                  ) : (
                    <InputRightElement pointerEvents="none">
                      <BsFillPersonFill />
                    </InputRightElement>
                  )}
                  <Input
                    id="firstName"
                    pr={checkDir === "ltr" ? "" : "40px"}
                    placeholder="firstName"
                    {...register("firstName", {
                      required: "This is required",
                      validate: {
                        minLength: (v) =>
                          v.length > 4 ||
                          "The email should have at most 4 characters",
                        matchPattern: (v) =>
                          /^[a-zA-Z0-9_]+$/.test(v) || "please contain name",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "این فیلد اجباری است",
              minLength: {
                value: 3,
                message: "لطفا بیشتر از ۲ حرف وارد کنید",
              },
            }}
            render={({ field }) => (
              <FormControl mt={4} {...field} isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <InputGroup>
                  {checkDir === "ltr" ? (
                    <InputLeftElement pointerEvents="none">
                      <IoIosMail />
                    </InputLeftElement>
                  ) : (
                    <InputRightElement pointerEvents="none">
                      <IoIosMail />
                    </InputRightElement>
                  )}
                  <Input
                    id="email"
                    pr={checkDir === "ltr" ? "" : "40px"}
                    placeholder="email"
                    {...register("email", {
                      required: "This is required",
                      validate: {
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "این فیلد اجباری است",
              validate: {
                minLength: (v) =>
                  v.length > 4 || "Password should be more than 4 character",
              },
            }}
            render={({ field }) => (
              <FormControl mt={4} {...field} isInvalid={errors.password}>
                <FormLabel htmlFor="password">password</FormLabel>
                <InputGroup>
                  {checkDir === "ltr" ? (
                    <>
                      <InputLeftElement pointerEvents="none">
                        <RiLockPasswordFill />
                      </InputLeftElement>
                      <InputRightElement>
                        <Button
                          size="sm"
                          p="2px 5px"
                          mr={1}
                          onClick={handleShowPassword}
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </>
                  ) : (
                    <>
                      <InputRightElement pointerEvents="none">
                        <RiLockPasswordFill />
                      </InputRightElement>
                      <InputLeftElement>
                        <Button
                          size="sm"
                          p="2px 5px"
                          ml={1}
                          onClick={handleShowPassword}
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputLeftElement>
                    </>
                  )}
                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    px="40px"
                    placeholder="password"
                    {...register("password", {
                      required: "This is required",

                      minLength: {
                        value: 6,
                        message: "Password Should more than 6 character",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
          <Button display="block" mx="auto" mt={4} type="submit">
            submit
          </Button>
        </form>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg={bg} px="4">
            Create Account
          </AbsoluteCenter>
        </Box>
        <div>
          Already Have an account?
          <Link
            className={styles.link}
            href={checkDir === "ltr" ? "/en" : "/fa"}
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* <h1>{t("title")}</h1>; */}
    </Container>
  );
};

export default RegisterPageTemp;
