import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";
import { Nav } from "src/components/nav";
import { Footer } from "src/components/footer";
import { Button } from "src/design/button";
import { useRouter } from "next/router";
import { Box } from "src/design/block";
import { Spacer } from "src/design/spacer";
import { ChevronLeft } from "react-feather";

interface PostLayoutProps {
  children: ReactNode;
  title: string;
}

export const Post = (props: PostLayoutProps): ReactElement => {
  const router = useRouter();
  const handleBack = () => {
    return router.back();
  };
  const handleNext = () => {
    return router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>{props.title} - Malah Ngoding</title>
      </Head>
      <Nav />
      <Fragment>{props.children}</Fragment>
      <Box css={{ margin: "$1 0 $5 0" }}>
        <Button color="white" rounded={true} onClick={handleBack}>
          <ChevronLeft />
        </Button>
        <Spacer />
        <Button color="white" onClick={handleNext}>
          <Box>
            <span>Random Article</span>
          </Box>
        </Button>
      </Box>
      <Footer />
    </Fragment>
  );
};
