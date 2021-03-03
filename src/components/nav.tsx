import Link from "next/link";
import { styled } from "stitches.config";
import { Logo } from "src/design/branding";
import { Box } from "src/design/block";
import { Button } from "src/design/button";
import { Fragment, useState } from "react";
import { useLockBodyScroll } from "src/hooks/useScroll";
import { Spacer } from "src/design/spacer";
import { BurgerIcon, CrossIcon } from "src/design/icon";

const Navigation = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "$4",
  borderBottom: `2px solid $black800`,
  padding: `0 $1`,
  sm: {
    padding: `0 $1`,
  },
  md: {
    padding: `0 $2`,
  },
});

const arrayLink = [
  { href: "/study", title: "Study", color: "$blue" },
  { href: "/camps", title: "Camps", color: "$pink" },
  { href: "/about-us", title: "About Us", color: "$green" },
];

export const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Navigation>
        <Link href="/">
          <a>
            <Logo scale={1.2} />
          </a>
        </Link>
        <Box
          direction="row"
          css={{ gap: "$1", display: "none", sm: { display: "flex" } }}
        >
          {arrayLink.map((item) => (
            <Fragment key={item.title}>
              <NavLink href={item.href} color={item.color}>
                {item.title}
              </NavLink>
            </Fragment>
          ))}
        </Box>
        <Box direction="row" css={{ display: "none", sm: { display: "flex" } }}>
          <Button color="blue">Daftar</Button>
          <Spacer />
          <Button color="white">Masuk</Button>
        </Box>
        <Box
          css={{ display: "flex", sm: { display: "none" } }}
          onClick={() => setIsOpen(true)}
        >
          <Burger />
        </Box>
      </Navigation>
      {isOpen ? <NavSheet handler={setIsOpen} /> : <></>}
    </Fragment>
  );
};

interface NavSheetProps {
  handler: (props: boolean) => void;
}
const NavSheet = (props: NavSheetProps) => {
  useLockBodyScroll();
  return (
    <Box
      css={{
        top: 0,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        background: "$yellow100",
        padding: "$1",
      }}
    >
      <Box direction="column" css={{ gap: "$1" }}>
        <Button
          color="white"
          rounded={true}
          onClick={() => props.handler(false)}
        >
          <CrossIcon />
        </Button>
        <Spacer />
        {arrayLink.map((item) => (
          <Fragment key={item.title}>
            <NavLink href={item.href} color={item.color}>
              {item.title}
            </NavLink>
          </Fragment>
        ))}
        <Spacer />
        <Box>
          <Button color="blue">Sign Up</Button>
          <Spacer />
          <Button color="white">Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

interface NavLinkProps {
  href: string;
  children: string;
  color: string;
}

const NavLink = (props: NavLinkProps): JSX.Element => {
  const Hyper = styled("a", {
    fontWeight: 700,
    ":hover": { color: props.color, cursor: "pointer" },
  });
  return (
    <Link href={props.href}>
      <Hyper>{props.children}</Hyper>
    </Link>
  );
};

const Burger = () => {
  const Menu = styled("div", {
    ":hover": {
      cursor: "pointer",
    },
  });
  return (
    <Menu>
      <BurgerIcon />
    </Menu>
  );
};
