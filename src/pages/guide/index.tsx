import { NextPage } from "next";
import Link from "next/link";

import { BackBlock } from "src/components/compund";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  BackgroundColorSetter,
  Box,
} from "src/design/block";
import { Spacer } from "src/design/spacer";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleTertiary,
} from "src/design/typography";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

const guideData: GuideCardProps[] = [
  {
    url: "/1",
    title: "Mempersiapkan perangkat lunak untuk malah ngoding",
    emoji: "🚙",
    date: "05 January 2021",
  },
  {
    url: "/2",
    title: "Mengapa belajar membuat program?",
    emoji: "🦜",
    date: "03 January 2021",
  },
  {
    url: "/3",
    title: "Apakah membuat program cocok untuk saya?",
    emoji: "🚚",
    date: "01 January 2021",
  },
];

const Guide: NextPage = () => {
  const heading = "Pandu Memandu";
  const splinter = "Guide";
  return (
    <Base title={heading}>
      <BackgroundColorSetter color="blue">
        <WallOfTextBlock>
          <SplinterBox>
            <Splinter>{splinter}</Splinter>
          </SplinterBox>
          <HeadingBox>
            <HeadingSecondary>{heading}</HeadingSecondary>
          </HeadingBox>
        </WallOfTextBlock>
        <BackBlock to="/study" />
        <Spacer css={{ height: "$2" }} />
        <GuideWrapper>
          {guideData.map((item) => (
            <GuideCard key={item.url} {...item} />
          ))}
        </GuideWrapper>
      </BackgroundColorSetter>
    </Base>
  );
};

const GuideWrapper = styled("article", {
  maxWidth: "960px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(310px, 2fr))",
  margin: "auto",
  padding: "$1 $1 $5 $1",
  gridGap: "$0",
  md: {
    padding: "$1 $1 $5 $1",
  },
});

interface GuideCardProps {
  url: string;
  title: string;
  date: string;
  emoji: string;
}

const GuideCard = (props: GuideCardProps): JSX.Element => {
  const Card = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  const Left = styled("div", {
    backgroundColor: "$light",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    padding: "$0",
    height: "96px",

    width: "96px",
    borderRadius: "16px",
  });

  const Right = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "$1",
  });

  const AuthorDetails = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  });

  const AuthorAvatar = styled("img", {
    width: 32,
    height: 32,
    borderRadius: "999999px",
    border: "1px solid $dark500",
  });

  return (
    <Link href={props.url}>
      <a>
        <Card>
          <Left>{props.emoji}</Left>
          <Right>
            <TitleTertiary
              css={{
                fontWeight: 600,
                color: "$dark800",
                ":hover": {
                  color: "$dark",
                },
              }}
            >
              {props.title}
            </TitleTertiary>
            <Spacer />
            <Link href="/about-us">
              <a>
                <AuthorDetails>
                  <AuthorAvatar src="https://avatars.githubusercontent.com/u/76316824?s=400&u=7b3af4ed4cb10cf8034ca7da4c48021bf482f219&v=4" />
                  <Box
                    css={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginLeft: "$1",
                    }}
                  >
                    <Paragraph
                      css={{
                        fontSize: "$0",
                        fontWeight: 700,
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Untung So Andryanto
                    </Paragraph>
                    <Paragraph css={{ fontSize: "$0" }}>{props.date}</Paragraph>
                  </Box>
                </AuthorDetails>
              </a>
            </Link>
          </Right>
        </Card>
      </a>
    </Link>
  );
};

export default Guide;
