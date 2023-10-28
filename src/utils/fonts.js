import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/Iransans/fonts/woff2/IRANSansWeb(FaNum).woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Iransans/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Iransans/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Iransans/fonts/woff2/IRANSansWeb(FaNum)_Black.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const josefSans = localFont({
  src: [
    {
      path: "../../public/fonts/Josef/josefinsans400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Josef/josefinsans500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Josef/josefinsans600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Josef/josefinsans700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
