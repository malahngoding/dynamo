import Link from "next/link";
import { ReactElement, useState } from "react";
import { Logo, Button, ButtonPrimary } from "@malahngoding/instead";

export const Nav = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="z-40 border-black-300 border-b-2 p-4 fixed top-0 bg-white w-full md:px-8 py-4">
        <div className="flex content-center items-center justify-between h-6 md:h-8">
          <Link href="/">
            <a aria-label="Malah Ngoding">
              <Logo size={1.1} />
            </a>
          </Link>
          <div className="hidden md:flex content-center items-center justify-evenly">
            <Link href="/study">
              <a className="font-bold hover:text-blue mx-6">Study</a>
            </Link>
            <Link href="/camps">
              <a className="font-bold hover:text-pink mx-6">Camps</a>
            </Link>
            <Link href="/about-us">
              <a className="font-bold hover:text-green mx-6">About Us</a>
            </Link>
          </div>
          <div className="hidden md:flex content-center items-center justify-evenly">
            <a href={`${process.env.BOX_URL}/sign-up`}>
              <ButtonPrimary>Sign Up</ButtonPrimary>
            </a>
            <a href={`${process.env.BOX_URL}/login`}>
              <Button>Login</Button>
            </a>
          </div>
          <div className="text-black md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black-100 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen ? (
        <div className="fixed top-0 w-full bg-white border-black-300 border-b-2 z-10 md:hidden">
          <div className="h-16" />
          <div className="flex flex-row content-center items-center px-4">
            <Link href="/study">
              <a className="font-bold text-blue mr-4 my-4 text-xl">Study</a>
            </Link>
            <Link href="/camps">
              <a className="font-bold text-pink mr-4 my-4 text-xl">Camps</a>
            </Link>
            <Link href="/about-us">
              <a className="font-bold text-green mr-4 my-4 text-xl">About Us</a>
            </Link>
          </div>
        </div>
      ) : (
          <></>
        )}
    </>
  );
};

export const Footer = (): ReactElement => {
  return (
    <footer className="w-full border-black-300 border-t-2 px-4 pt-4 md:px-8 lg:px-32 lg:pt-8 xl:px-64">
      <div className="flex flex-col content-center items-start justify-between md:flex-row">
        <div className="w-64">
          <Logo size={1.2} />
          <h1 className="font-bold text-2xl mt-4 mb-1">Malah Ngoding</h1>
          <p className="text-sm text-black-800">
            Malah Ngoding merupakan platform pembelajaran praktis untuk para
            pengembang aplikasi web dan mobile.
          </p>
        </div>
        <div className="flex flex-col content-start items-start mt-4 md:mt-0">
          <h1 className="font-bold text-black text-lg">Study</h1>
          <div className="h-4" />
          <Link href="/study/snippets">
            <a className="text-md py-2 sm:text-sm hover:underline">Snippets</a>
          </Link>
          <Link href="/study/guide">
            <a className="text-md py-2 sm:text-sm hover:underline">Guide</a>
          </Link>
          <Link href="/study/projects">
            <a className="text-md py-2 sm:text-sm hover:underline">Projects</a>
          </Link>
        </div>
        <div className="flex flex-col content-start items-start mt-4 md:mt-0">
          <h1 className="font-bold text-black text-lg">Camps</h1>
          <div className="h-4" />
          <Link href="/camps/fullstack">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Full Stack
            </a>
          </Link>
          <Link href="/camps/flutter">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Hybrid Applications
            </a>
          </Link>
        </div>
        <div className="flex flex-col content-start items-start mt-4 md:mt-0">
          <h1 className="font-bold text-black text-lg">Services</h1>
          <div className="h-4" />
          <Link href="/tutors">
            <a className="text-md py-2 sm:text-sm hover:underline">Tutors</a>
          </Link>
          <Link href="/workshop">
            <a className="text-md py-2 sm:text-sm hover:underline">Workshop</a>
          </Link>
          <Link href="/development">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Development
            </a>
          </Link>
        </div>
        <div className="flex flex-col content-start items-start mt-4 md:mt-0">
          <h1 className="font-bold text-black text-lg">Ours</h1>
          <div className="h-4" />
          <Link href="/design">
            <a className="text-md py-2 sm:text-sm hover:underline">Design</a>
          </Link>
          <Link href="/about-us">
            <a className="text-md py-2 sm:text-sm hover:underline">About Us</a>
          </Link>
          <Link href="/frequently-asked-question">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Help & FAQ
            </a>
          </Link>
          <Link href="/terms-and-condition">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Terms and Conditions
            </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="text-md py-2 sm:text-sm hover:underline">
              Privacy Policy
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center content-center justify-center pt-8">
        <div className="flex flex-row m-4">
          <div className="mx-4">
            <a
              href="https://github.com/malahngoding/"
              target="_blank"
              rel="noreferrer"
              aria-label="Malah Ngoding Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a
              href="https://www.youtube.com/channel/UCKMCYwl48GRxkKP0c92GOJQ?view_as=subscriber?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              aria-label="Malah Ngoding Youtub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-youtube"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
          <div className="mx-4">
            <a
              href="https://www.instagram.com/malahngoding/"
              target="_blank"
              rel="noreferrer"
              aria-label="Malah Ngoding Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-xs text-center">
          Design and Illustration by
          <br /> Various Artist from{" "}
          <a
            href="https://icons8.com/"
            target="_blank "
            className="underline"
            rel="noreferrer"
            aria-label="Icons8"
          >
            Icons8
          </a>{" "}
          & OpenPeeps by{" "}
          <a
            href="https://www.openpeeps.com/"
            target="_blank"
            className="underline"
            rel="noreferrer"
            aria-label="Open Peeps"
          >
            Pablo Stanley
          </a>{" "}
          & UIKit by{" "}
          <a
            href="https://contrauikit.com/"
            target="_blank"
            className="underline"
            rel="noreferrer"
            aria-label="Contra UI KIT"
          >
            Contra UI
          </a>
        </p>
        <div className="h-4" />
        <p className="text-xs text-center">
          <strong>©{new Date().getFullYear()} Malah Ngoding</strong>. All Rights
          Reserved.
        </p>
        <div className="h-4" />
      </div>
    </footer>
  );
};
