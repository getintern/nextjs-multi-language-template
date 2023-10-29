"use client";
import { useTranslations } from "next-intl";
import React from "react";

const BlogPage = () => {
  const t = useTranslations("Blog");

  return (
    <div>
      <h1>{t("title")}</h1>;
    </div>
  );
};

export default BlogPage;
