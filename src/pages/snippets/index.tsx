import { NextPage } from "next";
import Link from "next/link";
import { BackBlock } from "src/components/compund";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  BackgroundColorSetter,
} from "src/design/block";
import { RadicalCard } from "src/design/card";
import { HeadingSecondary, Paragraph, Splinter } from "src/design/typography";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

interface Snippet {
  url: string;
  title: string;
  language: string;
}

const snippetDataList: Snippet[] = [
  {
    url: "/",
    title: "Variable pada javascript",
    language: "JS",
  },
  {
    url: "/",
    title: "Console pada javascript",
    language: "JS",
  },
  {
    url: "/",
    title: "If/else, yang mana ya?",
    language: "JS",
  },
];

const Snippets: NextPage = () => {
  const heading = "Potong Memotong";
  const splinter = "Snippets";
  return (
    <Base title={heading}>
      <BackgroundColorSetter color="pink">
        <WallOfTextBlock>
          <SplinterBox>
            <Splinter>{splinter}</Splinter>
          </SplinterBox>
          <HeadingBox>
            <HeadingSecondary>{heading}</HeadingSecondary>
          </HeadingBox>
        </WallOfTextBlock>
        <BackBlock to="/study" />
        <SnippetWrapper>
          {snippetDataList.map((snippetData) => (
            <Snippet key={snippetData.title} {...snippetData} />
          ))}
        </SnippetWrapper>
      </BackgroundColorSetter>
    </Base>
  );
};

const SnippetWrapper = styled("div", {
  maxWidth: "840px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  margin: "auto",
  padding: "$1 $0 $5 $0",
  gridGap: "$0",
  md: {
    padding: "$1 $1 $5 $1",
  },
});

const Snippet = (props: Snippet): JSX.Element => {
  const getColor = (language: string): string => {
    if (language === "JS") {
      return "$yellow800";
    } else if (language === "React") {
      return "$blue800";
    } else {
      return "$light";
    }
  };
  return (
    <Link href={props.url}>
      <a>
        <RadicalCard
          butNot
          css={{
            padding: "$1",
            backgroundColor: getColor(props.language),
            justifyContent: "flex-start",
          }}
        >
          <HeadingSecondary>{props.language}</HeadingSecondary>
          <Paragraph>{props.title}</Paragraph>
        </RadicalCard>
      </a>
    </Link>
  );
};

export default Snippets;
