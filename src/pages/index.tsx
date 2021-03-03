import { NextPage } from "next";
import { Block } from "src/design/block";
import {
  HeadingPrimary,
  HeadingSecondary,
  TitlePrimary,
  TitleSecondary,
  Paragraph,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Home: NextPage = () => {
  return (
    <Base title="Hello World!">
      <Block>
        <HeadingPrimary>Hello Heading Primary!</HeadingPrimary>
        <HeadingSecondary>Hello Heading Secondary!</HeadingSecondary>
        <TitlePrimary>
          Modulz January update: Pages, Inspector, redesigned property panels,
          enhanced color tool, distance measurement, rulers, and more.
        </TitlePrimary>
        <Paragraph>
          Just before Christmas, we launched the latest Modulz release to our
          existing beta users. Today, we&apos;re inviting hundreds more from our
          waitlist, so check your email! Since launching in December, we&apos;ve
          released many exciting features.
        </Paragraph>
        <TitleSecondary>Pages</TitleSecondary>
        <Paragraph>
          If you&apos;re the opposite of someone like me—and you like to keep
          your files organised—you can now do so by creating Pages within each
          Document.
        </Paragraph>
      </Block>
    </Base>
  );
};

export default Home;
