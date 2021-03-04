import { NextPage } from "next";
import { UnderConstructions } from "src/components/underconstructions";
import { WallOfTextBlock, SplinterBox, HeadingBox } from "src/design/block";
import { HeadingSecondary, Splinter } from "src/design/typography";
import { Base } from "src/layouts/base";

const FullStack: NextPage = () => {
  const heading = "Front End + Back End = ?";
  const splinter = "Full Stack";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
      </WallOfTextBlock>
      <UnderConstructions compact />
    </Base>
  );
};

export default FullStack;
