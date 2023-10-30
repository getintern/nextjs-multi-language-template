"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import useFormValidation from "@/app/hooks/useReactHookForm";
import { IoIosMail } from "react-icons/io";

import { RiLockPasswordFill } from "react-icons/ri";
import useCheckDir from "@/app/hooks/useCheckDir";
import ButtonSubmit from "../elements/ButtonSubmit";
import ErrorValidation from "../elements/ErrorValidation";
import styles from "./HomePageTemp.module.css";
import { PiEyeClosedDuotone, PiEyeDuotone } from "react-icons/pi";

const HomePageTemp = () => {
  const t = useTranslations("Login");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkDir = useCheckDir();
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

  const { handleSubmit, register, errors, control, Controller } =
    useFormValidation();

  const onSubmit = async (values) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setLoading(false);
    console.log(res)
    if (res.ok) {
      toast({
        title: checkDir === "ltr" ? "login successfully." : res.message,
        status: "success",
      });
      router.push(checkDir === "ltr" ? "/en/dashboard" : "/fa/dashboard");
    } else {
      toast({
        title: checkDir === "ltr" ? "Something Wrong , try again" : res.error,
        status: "warning",
      });
    }
  };

  return (
    <Container maxW="xl" mt={20}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.formContiner}>
        <h2 className={styles.titleOfFroum}>{t("formTitle")}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
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
              rules={{
                required: true,
                minLength: {
                  value: 4,
                },
              }}
              render={({ field }) => (
                <div>
                  <FormLabel fontWeight={700} fontSize={13} htmlFor="password">
                    {t("passwordInput.name")}
                  </FormLabel>
                  <InputGroup className={errors.email && styles.ErrorBorder}>
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
          </>
          <ButtonSubmit
            isLoading={loading}
            persianTitle="ورود به حساب"
            englishTitle="Login"
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
            ? "Dont Have an account?"
            : "همین الان حساب کاربری بساز!"}
          <Link
            className={styles.link}
            href={checkDir === "ltr" ? "en/register" : "fa/register"}
          >
            <span className={styles.link__span}>
              {checkDir === "ltr" ? "SignUp" : "ساخت اکانت"}
            </span>
          </Link>
        </Text>
      </div>
    </Container>
  );
};

export default HomePageTemp;
