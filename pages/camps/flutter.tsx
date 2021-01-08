import { NextPage } from "next";
import Image from "next/image";
import { Page } from "components/page";
import { Splinter, Title } from "@malahngoding/instead";

const Flutter: NextPage = () => {
  return (
    <Page pageTitle="Flutter">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Camps</Splinter>
        <Title center>Hybrid Applications</Title>
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

export default Flutter;
