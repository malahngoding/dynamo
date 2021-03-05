import Link from "next/link";
import { Box } from "src/design/block";
import { ChevronLeftIcon } from "src/design/icon";
import { Button } from "src/design/button";
import { styled } from "stitches.config";

interface BackBlockProps {
  to: string;
}

export const BackBlock = (props: BackBlockProps): JSX.Element => {
  const Alpha = styled("a", { marginBottom: "$1" });
  return (
    <Box css={{ marginTop: "-4em" }}>
      <Link href={props.to}>
        <Alpha>
          <Button color="white" rounded={true}>
            <ChevronLeftIcon />
          </Button>
        </Alpha>
      </Link>
    </Box>
  );
};
