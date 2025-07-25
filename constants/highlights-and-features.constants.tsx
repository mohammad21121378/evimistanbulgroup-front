import { useTranslations } from "next-intl";

export function useHighlights() {
  const t = useTranslations("Highlights");

  return [
    {
      id: "183.188",
      title: t("investment"),
      image: "3.jpg",
      bgColor: "bg-[#CC2D4A]",
    },
    {
      id: "183.190",
      title: t("installment"),
      image: "2.jpg",
      bgColor: "bg-[#BC1A6E]",
    },
    {
      id: "184.193",
      title: t("citizenship"),
      image: "1.jpg",
      bgColor: "bg-[#DE3151]",
    },
    {
      id: "187.207",
      title: t("earlyStage"),
      image: "4.jpg",
      bgColor: "bg-[#D93B30]",
    },
  ];
}
