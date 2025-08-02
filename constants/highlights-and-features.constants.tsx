import { useTranslations } from "next-intl";

export function useHighlights() {
  const t = useTranslations("Highlights");

  return [
    {
      id: "feat-value-investment-tags[best-for-investment]",
      title: t("investment"),
      image: "3.jpg",
      bgColor: "bg-[#CC2D4A]",
    },
    {
      id: "feat-value-investment-tags[installment-available]",
      title: t("installment"),
      image: "2.jpg",
      bgColor: "bg-[#BC1A6E]",
    },
    {
      id: "feat-citizenship-tags[approved-for-citizenship]",
      title: t("citizenship"),
      image: "1.jpg",
      bgColor: "bg-[#DE3151]",
    },
    {
      id: "feat-urgency-tags[early-stage-project]",
      title: t("earlyStage"),
      image: "4.jpg",
      bgColor: "bg-[#D93B30]",
    },
  ];
}

