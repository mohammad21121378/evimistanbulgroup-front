import InsightDetailsCategory from "@/screens/our-insights/pages/InsightDetailsCategory";

interface Props {
  params: {
    category: string;
  };
}

export default function Page({ params }: Props) {
  return <InsightDetailsCategory category={params.category} />;
}
