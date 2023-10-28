"use client";

import { Container } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import "./HomePageTemp.css";

const HomePageTemp = () => {
  const t = useTranslations("Index");
  return (
    <Container maxW="xl">
      <form>
        <h2>Register</h2>
        <input placeholder="Email" />
        <input placeholder="password" />
      </form>
      {/* <h1>{t("title")}</h1>; */}
    </Container>
  );
};

export default HomePageTemp;
