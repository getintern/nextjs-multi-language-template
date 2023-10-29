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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import useFormValidation from "@/app/hooks/useReactHookForm";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import useCheckDir from "@/app/hooks/useCheckDir";
import Link from "next/link";
import ButtonSubmit from "../elements/ButtonSubmit";
import ErrorValidation from "../elements/ErrorValidation";
import styles from "./HomePageTemp.module.css";

const onSubmit = async (values) => {
  console.log(values);
};

const HomePageTemp = () => {
  const [show, setShow] = useState(false);
  const checkDir = useCheckDir();

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
        <h2 className={styles.titleOfFroum}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <InputGroup className={errors.email && styles.ErrorBorder}>
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
                      {...field}
                      id="email"
                      pr={checkDir === "ltr" ? "" : "40px"}
                      placeholder="email"
                      {...register("email", {
                        required: "This is Required",
                        validate: {
                          matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              v
                            ) || "Email address must be a valid address",
                        },
                      })}
                    />
                  </InputGroup>
                  <ErrorValidation
                    errorMessage={errors.email && errors.email.message}
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
                minLength: {
                  value: 4,
                },
              }}
              render={({ field }) => (
                <div>
                  <FormLabel htmlFor="password">password</FormLabel>
                  <InputGroup className={errors.password && styles.ErrorBorder}>
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
                      {...field}
                      id="password"
                      type={show ? "text" : "password"}
                      px="40px"
                      placeholder="password"
                      {...register("password", {
                        required: "Please enter Password",
                        minLength: {
                          value: 4,
                          message: "Your Password Must be at least 4 character",
                        },
                      })}
                    />
                  </InputGroup>
                  <ErrorValidation
                    errorMessage={errors.password && errors.password.message}
                  />
                </div>
              )}
            />
          </>
          <ButtonSubmit />
        </form>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg={bg} px="4">
            Create Account
          </AbsoluteCenter>
        </Box>
        <Text fontSize={14} textAlign="center">
          Dont Have an account?
          <Link
            className={styles.link}
            href={checkDir === "ltr" ? "en/register" : "fa/register"}
          >
            <span className={styles.link__span}>Sign Up</span>
          </Link>
        </Text>
      </div>

      {/* <h1>{t("title")}</h1>; */}
    </Container>
  );
};

export default HomePageTemp;
