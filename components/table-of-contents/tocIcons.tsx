import {
    EyeIcon,
    StarIcon,
    GraphIcon,
    DocIcon,
    GridIcon,
    MapIcon,
    ShieldIcon,
    VideoIcon,
    ImageIcon,
    PhoneIcon,
    BarsIcon,
    ArticleIcon,
  } from "./icons";
  
  export const tocIconMap: Record<string, JSX.Element> = {
    "Property Overview": <EyeIcon />,
    "Key Features and Highlights": <StarIcon />,
    "Investment and Payment": <GraphIcon />,
    "Property Description": <DocIcon />,
    "Amenities and Services": <GridIcon />,
    "Location and Lifestyle": <MapIcon />,
    "Legal and Citizenship": <ShieldIcon />,
    "360 Virtual Tour / Video": <VideoIcon />,
    "Floor Plans and Gallery": <ImageIcon />,
    "Contact and Request Info": <PhoneIcon />,
    "Similar Properties": <BarsIcon />,
    "Related Guides and Insights": <ArticleIcon />,
  };
  