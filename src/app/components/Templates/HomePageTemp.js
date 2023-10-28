"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import useFormValidation from "@/app/hooks/useReactHookForm";

import styles from "./HomePageTemp.module.css";

const onSubmit = async (values) => {
  console.log(values);
};

const HomePageTemp = () => {
  const { handleSubmit, register, errors, control, Controller } =
    useFormValidation();
  const t = useTranslations("Index");
  return (
    <Container maxW="xl">
      <div className={styles.formContiner}>
        <h2 className={styles.titleOfFroum}>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormControl {...field} isInvalid={errors.firstName}>
                <FormLabel htmlFor="firstName">firstName</FormLabel>
                <Input
                  id="firstName"
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
                <Input
                  id="email"
                  placeholder="email"
                  {...register("email", {
                    required: "This is required",
                    validate: {
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
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
                <Input
                  id="password"
                  placeholder="password"
                  {...register("password", {
                    required: "This is required",

                    minLength: {
                      value: 6,
                      message: "Password Should more than 6 character",
                    },
                  })}
                />
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
      </div>

      {/* <h1>{t("title")}</h1>; */}
    </Container>
  );
};

export default HomePageTemp;
