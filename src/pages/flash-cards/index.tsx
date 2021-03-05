import { NextPage } from "next";
import { UnderConstructions } from "src/components/underconstructions";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  BackgroundColorSetter,
} from "src/design/block";
import { HeadingSecondary, Splinter } from "src/design/typography";
import { Base } from "src/layouts/base";

const FlashCards: NextPage = () => {
  const heading = "Ingat Mengingat";
  const splinter = "Flash Cards";
  return (
    <Base title={heading}>
      <BackgroundColorSetter color="yellow">
        <WallOfTextBlock>
          <SplinterBox>
            <Splinter>{splinter}</Splinter>
          </SplinterBox>
          <HeadingBox>
            <HeadingSecondary>{heading}</HeadingSecondary>
          </HeadingBox>
        </WallOfTextBlock>
        <UnderConstructions compact />
      </BackgroundColorSetter>
    </Base>
  );
};

export default FlashCards;
