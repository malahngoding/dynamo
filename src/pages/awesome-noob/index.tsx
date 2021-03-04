import { NextPage } from "next";
import { UnderConstructions } from "src/components/underconstructions";
import { WallOfTextBlock, SplinterBox, HeadingBox } from "src/design/block";
import { HeadingSecondary, Splinter } from "src/design/typography";
import { Base } from "src/layouts/base";

const Noob: NextPage = () => {
  const heading = "eMang Adventure";
  const splinter = "Awesome Noob";
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

export default Noob;
