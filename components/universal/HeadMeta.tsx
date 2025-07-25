import Head from "next/head";

interface HeadMetaProps {
  title: string;
  description: string;
  follow?: "follow" | "nofollow";
  index?: "index" | "noindex";
  locale?: string;
  type?: string;
  url?: string;
  image?: string;
  updatedAt?: string;
}

const HeadMeta = ({
  title,
  description,
  follow = "follow",
  index = "index",
  locale = "en_US",
  type = "website",
  url = "",
  image = "/default-og.jpg",
  updatedAt,
}: HeadMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={`${follow}, ${index}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Evim Istanbul group" />
      {updatedAt && <meta property="og:updated_time" content={updatedAt} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Evim Istanbul group" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default HeadMeta;
