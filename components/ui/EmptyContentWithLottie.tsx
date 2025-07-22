
import { FC } from "react";
import Lottie from "lottie-react";
import emptyContentJson from "@/lotties/Empty.json";

interface EmptyContentWithLottieProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const EmptyContentWithLottie: FC<EmptyContentWithLottieProps> = ({
  title = "No results found",
  subtitle = "Please change the filters or try again later.",
  action,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-10 px-4">
      <div className="size-80">
        <Lottie animationData={emptyContentJson} loop={true} />
      </div>
      <h2 className="text-3xl capitalize font-semibold text-gray-700 mb-3">{title}</h2>
      <p className="text-gray-500 text-lg font-medium mb-6 max-w-lg">{subtitle}</p>
      {action && (
        action
      )}
    </div>
  );
};

export default EmptyContentWithLottie;
