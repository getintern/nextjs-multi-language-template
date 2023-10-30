"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AbsoluteCenter,
  useToast,
  Box,
  Button,
  Container,
  Divider,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import useFormValidation from "@/app/hooks/useReactHookForm";
import ErrorValidation from "../elements/ErrorValidation";
import useCheckDir from "@/app/hooks/useCheckDir";
import ButtonSubmit from "../elements/ButtonSubmit";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import {
  PiEyeClosedDuotone,
  PiUserDuotone,
  PiEyeDuotone,
} from "react-icons/pi";

import styles from "./HomePageTemp.module.css";

const RegisterPageTemp = () => {
  const t = useTranslations("Register");
  const checkDir = useCheckDir();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const toast = useToast({
    position: "top-right",
    isClosable: true,
    duration: 3000,
    containerStyle: {
      marginTop: "40px",
    },
  });

  // handle show password
  const handleShowPassword = () => setShow(!show);

  const bg = useColorModeValue("#f7fafc", "#2d3748");

  const { handleSubmit, register, errors, control, Controller, watch } =
    useFormValidation();

  //TODO Submit handler for Register
  const onSubmit = async (values) => {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.message) {
      toast({
        title: checkDir === "ltr" ? "Account created." : data.message,
        description:
          checkDir === "ltr"
            ? "We've created your account for you."
            : "الان می توانید وارد حساب کاربری خود بشوید",
        status: "success",
      });
      router.push(checkDir === "ltr" ? "/en" : "/fa");
    } else if (data.status === 422) {
      toast({
        title: checkDir === "ltr" ? "Account Already Exist" : data.error,
        status: "warning",
      });
    } else {
      toast({
        title: checkDir === "ltr" ? "Something Wrong , try again" : data.error,
        status: "warning",
      });
    }

    console.log(data);
  };

  return (
    <Container maxW="xl" mt={20}>
      <h1 className={styles.title}>{t("title")} </h1>
      <div className={styles.formContiner}>
        <h2 className={styles.titleOfFroum}>{t("formTitle")}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex columnGap={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <div>
                  <FormLabel fontWeight={700} fontSize={13} htmlFor="firstName">
                    {t("firstNameInput.name")}
                  </FormLabel>
                  <InputGroup className={errors.email && styles.ErrorBorder}>
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
                      {...field}
                      id="firstName"
                      pr={checkDir === "ltr" ? "" : "40px"}
                      placeholder={t("firstNameInput.name")}
                      {...register("firstName", {
                        required: t("requiredMessage"),
                        validate: {
                          matchPattern: (v) =>
                            /^[a-zA-Z0-9_آ-ی]+$/u.test(v) ||
                            t("firstNameInput.matchPattern"),
                        },
                      })}
                    />
                  </InputGroup>
                  <ErrorValidation
                    errorMessage={errors.firstName && errors.firstName.message}
                  />
                </div>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <div>
                  <FormLabel fontWeight={700} fontSize={13} htmlFor="lastName">
                    {t("lastNameInput.name")}
                  </FormLabel>
                  <InputGroup className={errors.email && styles.ErrorBorder}>
                    {checkDir === "ltr" ? (
                      <InputLeftElement pointerEvents="none">
                        <PiUserDuotone />
                      </InputLeftElement>
                    ) : (
                      <InputRightElement pointerEvents="none">
                        <PiUserDuotone />
                      </InputRightElement>
                    )}
                    <Input
                      {...field}
                      id="lastName"
                      pr={checkDir === "ltr" ? "" : "40px"}
                      placeholder={t("lastNameInput.name")}
                      {...register("lastName", {
                        required: t("requiredMessage"),
                        validate: {
                          matchPattern: (v) =>
                            /^[a-zA-Z0-9_آ-ی]+$/u.test(v) ||
                            t("firstNameInput.matchPattern"),
                        },
                      })}
                    />
                  </InputGroup>
                  <ErrorValidation
                    errorMessage={errors.lastName && errors.lastName.message}
                  />
                </div>
              )}
            />
          </Flex>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <FormLabel fontWeight={700} fontSize={13} htmlFor="email">
                  {t("emailInput.name")}
                </FormLabel>
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
                    placeholder={t("emailInput.name")}
                    {...register("email", {
                      required: t("requiredMessage"),
                      validate: {
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) || t("emailInput.matchPattern"),
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
            render={({ field }) => (
              <div>
                <FormLabel fontWeight={700} fontSize={13} htmlFor="password">
                  {t("passwordInput.name")}
                </FormLabel>
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
                          {show ? <PiEyeClosedDuotone /> : <PiEyeDuotone />}
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
                          {show ? <PiEyeClosedDuotone /> : <PiEyeDuotone />}
                        </Button>
                      </InputLeftElement>
                    </>
                  )}
                  <Input
                    {...field}
                    id="password"
                    type={show ? "text" : "password"}
                    px="40px"
                    placeholder={t("passwordInput.name")}
                    {...register("password", {
                      required: t("requiredMessage"),
                      minLength: {
                        value: 4,
                        message: t("passwordInput.minLength"),
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <div>
                <FormLabel
                  fontWeight={700}
                  fontSize={13}
                  htmlFor="confirmPassword"
                >
                  {t("confirmPassword.name")}
                </FormLabel>
                <InputGroup
                  className={errors.confirmPassword && styles.ErrorBorder}
                >
                  {checkDir === "ltr" ? (
                    <>
                      <InputLeftElement pointerEvents="none">
                        <RiLockPasswordLine />
                      </InputLeftElement>
                    </>
                  ) : (
                    <>
                      <InputRightElement pointerEvents="none">
                        <RiLockPasswordLine />
                      </InputRightElement>
                    </>
                  )}
                  <Input
                    {...field}
                    id="confirmPassword"
                    type={show ? "text" : "password"}
                    px="40px"
                    placeholder={t("confirmPassword.name")}
                    {...register("confirmPassword", {
                      required: t("requiredMessage"),
                      validate: (val) => {
                        if (watch("password") != val) {
                          return t("confirmPassword.matchPassword");
                        }
                      },
                    })}
                  />
                </InputGroup>
                <ErrorValidation
                  errorMessage={
                    errors.confirmPassword && errors.confirmPassword.message
                  }
                />
              </div>
            )}
          />
          <ButtonSubmit
            isLoading={loading}
            englishTitle="Register"
            persianTitle="عضویت"
          />
        </form>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg={bg} px="4">
            {t("createAccount")}
          </AbsoluteCenter>
        </Box>
        <Text fontSize={14} textAlign="center">
          {checkDir === "ltr"
            ? "Already Have Account?"
            : "از قبل حساب کاربری داشتی؟"}
          <Link
            className={styles.link}
            href={checkDir === "ltr" ? "/en" : "/fa"}
          >
            <span className={styles.link__span}>
              {checkDir === "ltr" ? "Sign In" : "ورود به حساب"}
            </span>
          </Link>
        </Text>
      </div>

      {/* <h1>{t("title")}</h1>; */}
    </Container>
  );
};

export default RegisterPageTemp;
