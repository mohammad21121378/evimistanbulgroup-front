import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import ContentTopPage from "@/components/content-top-page";

type Props ={
  data: {
    title: string;
    subTitle?: string;
    description?: string;
  }
}

export default function Introduction({data}: Props) {

  const {title, subTitle, description} = data;

  const BreadcrumbItems = [
    {
      label: 'Our Services',
      href: '/our-services'
    },
    {
      label: title
    }
  ]

  return (
    <div className="container mt-36">
      <Breadcrumb items={BreadcrumbItems} />
      <ContentTopPage
        title={title}
        subTitle={subTitle}
        description={description}
      />
    </div>
  );
}
