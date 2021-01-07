// import Image from "next/image";
import { NextPage } from "next";
import { Page } from "components/page";
import {
  Title,
  Splinter,
  InLineBranding,
  ContentHeading,
} from "@malahngoding/instead";

const AboutUs: NextPage = () => {
  return (
    <Page pageTitle="Kebijakan Privasi">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>About Us</Splinter>
        <Title center>Malah Ngoding</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <ContentHeading>
            Halo Semua! <span className="text-3xl">👋</span>
          </ContentHeading>
          <p className="py-6">
            Selamat datang di <InLineBranding />. Kami merupakan platform
            pembelajaran praktis untuk para pengembang aplikasi web dan mobile.
            kami berharap platform ini bisa menjadi media untuk membantu sobat{" "}
            <InLineBranding /> belajar dan mengembangkan diri.
          </p>
          <p className="py-6">
            Kami percaya bahwa proses <span className="italic">ngoding</span>{" "}
            merupakan proses yang menyenangkan dan bisa dipelajari oleh siapa
            saja. Semua tergantung tujuan, apabila tujuan sudah dimiliki maka
            proses pembelajaran akan lebih terarah dan tepat sasaran.
          </p>
          <p className="py-6">
            Jadi kumpulkan semangatmu,temukan tujuanmu (bisa lewat menu project
            pada platform ini) dan siapkan waktu senggangmu untuk{" "}
            <InLineBranding />
          </p>
          <p className="py-6">
            Jangan lupa makan dan istirahat tapi <InLineBranding /> ya! 🤣🤣🤣
          </p>
        </div>
      </div>
    </Page>
  );
};

export default AboutUs;
