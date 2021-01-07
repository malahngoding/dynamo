import { NextPage } from "next";
import { Page } from "components/page";
import {
  ContentHeading,
  Title,
  Splinter,
  ActivationCTA,
  InLineBranding,
} from "@malahngoding/instead";

const FAQ: NextPage = () => {
  return (
    <Page pageTitle="FAQ">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Help & FAQs</Splinter>
        <Title center>Bantuan dan Pertanyaan</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <ContentHeading>
            Apa itu <InLineBranding />?
          </ContentHeading>
          <p className="py-6">
            <InLineBranding /> merupakan platform pembelajaran praktis untuk
            para pengembang aplikasi web dan mobile, kami berharap platform ini
            bisa menjadi media untuk membantu sobat <InLineBranding /> belajar
            dan mengembangkan diri.
          </p>
          <ContentHeading>
            Berapa biaya untuk <InLineBranding /> ?
          </ContentHeading>
          <p className="py-6">
            Semua konten <InLineBranding /> yang berada didalam menu
            `&quot`Study`&quot` diberikan selalu gratis baik kepada pengunjung
            dan sobat <InLineBranding /> (yakni akun terdaftar di platform ini).
          </p>
          <p className="py-6">
            Untuk bentuk kerjasama dalam layanan <InLineBranding /> yang lain
            akan berlaku sesuai kontrak untuk masing - masing perjanjian yang
            akan dibuat.
          </p>
          <ContentHeading>
            Bagaimana melapor kesalahan/error pada konten kami dan bug pada
            platform kami?
          </ContentHeading>
          <p className="py-6">
            Kamu bisa langsung melaporkan baik ke form dibawah atau dengan
            langsung berkontribusi pada source code kami yang tersedia secara
            open source pada{" "}
            <a
              href="https://github.com/malahngoding/monolith"
              target="_blank"
              rel="noreferrer"
              aria-label="Malah Ngoding Majestic Monolith"
              className="underline"
            >
              laman github kami
            </a>
          </p>
        </div>
      </div>
      <ActivationCTA />
    </Page>
  );
};

export default FAQ;
