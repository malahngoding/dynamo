import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import GuideLayout from "components/guide";

interface GuidePost {
  path: {
    slug: string;
  };
}
const GuidePost: NextPage<GuidePost> = (props: GuidePost) => {
  return (
    <GuideLayout pageTitle={props.path.slug}>{props.path.slug}</GuideLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      path: context.params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "ssg-ssr",
      },
    },
    {
      params: {
        slug: "pre-rendering",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
};

export default GuidePost;
