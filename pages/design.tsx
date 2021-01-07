import { NextPage } from "next";
import { Page } from "components/page";
import {
  Logo,
  InLineBranding,
  InLineBrandingEvent,
  ActivationCTA,
  ActivationCTASimple,
  Button,
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
  ButtonPink,
  // Card,
  // ContentHeading,
  // ContentSubHeading,
  TextInput,
  // PeopleA,
  // PeopleB,
  // PeopleC,
  Title,
  TitleWhite,
  Subtitle,
  Splinter,
} from "@malahngoding/instead";
import { ReactElement } from "react";

const DesignPage: NextPage = () => {
  return (
    <Page pageTitle="Design">
      <section className="flex flex-col p-4 md:py-8 lg:px-32">
        <Title>Design System</Title>
        <TitleWhite>Malah Ngoding</TitleWhite>
      </section>
      <TypographySection />
      <ColorSection />
      <TextSection />
      <ButtonSection />
      <InputSection />
      <BrandingSection />
    </Page>
  );
};

const TypographySection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>typography</Splinter>
      <Subtitle>Primary Typeface</Subtitle>
      <h1 className="text-4xl font-black">Montserrat</h1>
      <div className="h-4"></div>
      <Subtitle>Font Weight</Subtitle>
      {["font-black", "font-bold", "font-normal"].map((item, index) => (
        <span key={`${item}-${index}`}>
          <h1>{item}</h1>
          <h1 className={`text-2xl ${item}`}>
            Malah Ngoding merupakan platform pembelajaran praktis untuk para
            pengembang aplikasi web dan mobile 1234567890 !@#$%^&*()
          </h1>
        </span>
      ))}
    </section>
  );
};

const ColorSection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>colors</Splinter>
      <Subtitle>White</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-white border-black border-2 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Black</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-black border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-black-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-black-700 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-black-500 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-black-300 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-black-100 border-black border-2 m-1 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Blue</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-blue border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-blue-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-blue-100 border-black border-2 m-1 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Yellow</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-yellow border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-yellow-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-yellow-100 border-black border-2 m-1 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Pink</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-pink border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-pink-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-pink-100 border-black border-2 m-1 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Green</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-green border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-green-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-green-100 border-black border-2 m-1 rounded-xl" />
      </div>
      <div className="h-4" />
      <Subtitle>Red</Subtitle>
      <div className="flex flex-row flex-wrap items-center content-center">
        <div className="h-20 w-20 bg-red border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-red-800 border-black border-2 m-1 rounded-xl" />
        <div className="h-20 w-20 bg-red-100 border-black border-2 m-1 rounded-xl" />
      </div>
    </section>
  );
};

const TextSection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>text</Splinter>
      <Subtitle>Title</Subtitle>
      <Title>Hello world!</Title>
      <div className="h-4" />
      <Subtitle>TitleWhite</Subtitle>
      <TitleWhite>Hello world!</TitleWhite>
      <div className="h-4" />
      <Subtitle>Subtitle</Subtitle>
      <Subtitle>Hello world!</Subtitle>
      <div className="h-4" />
      <Subtitle>Splinter</Subtitle>
      <Splinter>Hello world!</Splinter>
      <div className="h-4" />
    </section>
  );
};

const ButtonSection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>button</Splinter>
      <Subtitle>Button</Subtitle>
      <Button>Action</Button>
      <div className="h-4" />
      <Subtitle>Primary Button</Subtitle>
      <ButtonPrimary>Submit</ButtonPrimary>
      <div className="h-4" />
      <Subtitle>Warning Button</Subtitle>
      <ButtonWarning>Sure?</ButtonWarning>
      <div className="h-4" />
      <Subtitle>Danger Button</Subtitle>
      <ButtonDanger>Delete</ButtonDanger>
      <div className="h-4" />
      <Subtitle>Pink Button</Subtitle>
      <ButtonPink>Call to Action</ButtonPink>
      <div className="h-4" />
    </section>
  );
};

const InputSection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>input</Splinter>
      <Subtitle>Text Input</Subtitle>
      <TextInput placeholder="Please fill in the blank..." />
      <div className="h-4" />
    </section>
  );
};

const BrandingSection = (): ReactElement => {
  return (
    <section className="flex flex-col p-4 md:py-8 lg:px-32">
      <Splinter>branding</Splinter>
      <Subtitle>Logo</Subtitle>
      <Logo size={3} />
      <div className="h-4" />
      <Subtitle>Logo with name</Subtitle>
      <Logo size={1.2} />
      <h1 className="font-bold text-2xl my-4">Malah Ngoding</h1>
      <div className="h-4" />
      <div className="h-4" />
      <Subtitle>In Line Branding</Subtitle>
      <InLineBranding />
      <div className="h-4" />
      <Subtitle>In Line Event</Subtitle>
      <InLineBrandingEvent />
      <div className="h-4" />
      <Subtitle>Call to Action</Subtitle>
      <ActivationCTA />
      <div className="h-4" />
      <Subtitle>Simpler Call to Action</Subtitle>
      <ActivationCTASimple />
      <div className="h-4" />
    </section>
  );
};

export default DesignPage;
