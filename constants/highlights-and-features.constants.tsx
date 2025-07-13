import { useTranslations } from "next-intl";

export function useHighlights() {
  const t = useTranslations("Highlights");

  return [
    {
      title: t("investment"),
      image: "3.jpg",
      bgColor: "bg-[#CC2D4A]",
    },
    {
      title: t("installment"),
      image: "2.jpg",
      bgColor: "bg-[#BC1A6E]",
    },
    {
      title: t("citizenship"),
      image: "1.jpg",
      bgColor: "bg-[#DE3151]",
    },
    {
      title: t("earlyStage"),
      image: "4.jpg",
      bgColor: "bg-[#D93B30]",
    },
  ];
}
