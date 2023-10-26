"use client";

import { useTranslations } from "next-intl";

const HomePageTemp = () => {
  const t = useTranslations("Index");
  return (
    <div className="container">
      {/* <form>
        <h2>Register</h2>
        <input placeholder="Email" />
        <input placeholder="password" />
      </form> */}
      <h1>{t("title")}</h1>;
    </div>
  );
};

export default HomePageTemp;
