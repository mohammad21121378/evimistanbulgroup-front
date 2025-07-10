import { useTranslations } from "next-intl";

export function useHighlights() {
  const t = useTranslations("Highlights");

  return [
    {
      title: t("investment"),
      image: "3.jpg",
      bgColor: "bg-pink-600",
    },
    {
      title: t("installment"),
      image: "2.jpg",
      bgColor: "bg-fuchsia-600",
    },
    {
      title: t("citizenship"),
      image: "1.jpg",
      bgColor: "bg-rose-600",
    },
    {
      title: t("earlyStage"),
      image: "4.jpg",
      bgColor: "bg-red-500",
    },
  ];
}
