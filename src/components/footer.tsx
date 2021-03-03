import { Box } from "src/design/block";
import { Logo } from "src/design/branding";
import {
  Paragraph,
  TitleSecondary,
  TitleTertiary,
} from "src/design/typography";
import { styled } from "stitches.config";
import Link from "next/link";
import { GithubIcon, InstagramIcon, YoutubeIcon } from "src/design/icon";
import { Spacer } from "src/design/spacer";

const FooterBox = styled("footer", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderTop: `2px solid $black800`,
  padding: `0 $1`,
  flexWrap: "wrap",
  sm: {
    padding: `0 $1`,
  },
  md: {
    padding: `0 $2`,
  },
});

const footerMenuItems = [
  {
    footerGroupName: "Study",
    members: [
      {
        title: "Guide",
        url: "/guide",
      },
      {
        title: "Snippets",
        url: "/snippets",
      },
      {
        title: "Flash Cards",
        url: "/flash-cards",
      },
    ],
  },
  {
    footerGroupName: "Camps",
    members: [
      {
        title: "Awesome Noob",
        url: "/awesome-noob",
      },
      {
        title: "Full Stack",
        url: "/full-stack",
      },
      {
        title: "Project",
        url: "/projects",
      },
    ],
  },
  {
    footerGroupName: "Services",
    members: [
      {
        title: "Tutors",
        url: "/tutors",
      },
      {
        title: "Workshops",
        url: "/workshops",
      },
      {
        title: "Development",
        url: "/development",
      },
    ],
  },
  {
    footerGroupName: "Ours",
    members: [
      {
        title: "About US",
        url: "/about-us",
      },
      {
        title: "Help & FAQs",
        url: "/frequently-asked-questions",
      },
      {
        title: "Terms and Condition",
        url: "/terms-and-condition",
      },
      {
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
];

export const Footer = (): JSX.Element => {
  return (
    <FooterBox>
      <Box
        css={{
          maxWidth: "1280px",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          md: {
            justifyContent: "space-between",
            flexDirection: "row",
          },
        }}
      >
        <Box
          direction="column"
          css={{ maxWidth: "20ch", alignItems: "flex-start", marginTop: "$2" }}
        >
          <Logo scale={1.8} />
          <Spacer />
          <TitleSecondary css={{ fontWeight: 700 }}>
            Malah Ngoding
          </TitleSecondary>
          <Paragraph css={{ fontSize: "13px", fontWeight: 500 }}>
            Lupa Makan, Lupa Tidur, Malah Ngoding
          </Paragraph>
        </Box>
        {footerMenuItems.map((footerGroup) => (
          <Box
            key={footerGroup.footerGroupName}
            direction="column"
            css={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: "$2",
            }}
          >
            <TitleTertiary css={{ fontWeight: 700 }}>
              {footerGroup.footerGroupName}
            </TitleTertiary>
            {footerGroup.members.map((items) => (
              <FooterNavLink href={items.url} key={items.url}>
                {items.title}
              </FooterNavLink>
            ))}
          </Box>
        ))}
      </Box>
      <Box css={{ margin: "$2" }}>
        <a
          href="https://github.com/malahngoding/"
          target="_blank"
          rel="noreferrer"
          aria-label="Malah Ngoding Github"
        >
          <GithubIcon />
        </a>
        <Spacer />
        <a
          href="https://www.instagram.com/malahngoding/"
          target="_blank"
          rel="noreferrer"
          aria-label="Malah Ngoding Instagram"
        >
          <InstagramIcon />
        </a>
        <Spacer />
        <a
          href="https://www.youtube.com/channel/UCKMCYwl48GRxkKP0c92GOJQ?view_as=subscriber?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
          aria-label="Malah Ngoding Youtube"
        >
          <YoutubeIcon />
        </a>
      </Box>
      <Box css={{ fontSize: "$0", marginBottom: "$5" }}>
        <span>
          <strong>©2021 Malah Ngoding.</strong> All Rights Reserved.
        </span>
      </Box>
    </FooterBox>
  );
};

interface FooterNavLinkProps {
  href: string;
  children: string;
}

const FooterNavLink = (props: FooterNavLinkProps): JSX.Element => {
  const Hyper = styled("a", {
    fontSize: "14px",
    margin: "$0 0",
    ":hover": { textDecoration: "underline", cursor: "pointer" },
  });
  return (
    <Link href={props.href}>
      <Hyper>{props.children}</Hyper>
    </Link>
  );
};
