import { NextPage } from "next";
import Image from "next/image";
import { Page } from "components/page";
import { Splinter, Title } from "@malahngoding/instead";

const FullStack: NextPage = () => {
  return (
    <Page pageTitle="FullStack">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Camps</Splinter>
        <Title center>Full Stack Javascript</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <Image
          src="/assets/img/taxi-programming.png"
          alt="Under Constructions"
          width={305}
          height={304}
          layout="responsive"
        />
      </div>
    </Page>
  );
};

export default FullStack;
