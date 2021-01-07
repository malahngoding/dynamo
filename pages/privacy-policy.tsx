import { NextPage } from "next";
import { Page } from "components/page";
import { Splinter, Title, InLineBranding } from "@malahngoding/instead";

const PrivacyPolicy: NextPage = () => {
  return (
    <Page pageTitle="Kebijakan Privasi">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Privacy Policy</Splinter>
        <Title center>Kebijakan Privasi</Title>
        <h1 className="font-bold">7 Desember 2020</h1>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <p className="py-6">
            <InLineBranding /> menyadari pentingnya keamanan data pribadi setiap
            pengguna platform <InLineBranding />. Data pribadi beserta catatan
            aktivitas pengguna akan dicatat dan disimpan dalam platform{" "}
            <InLineBranding /> dan platform pihak ke tiga (Google Analytics).
            Data tersebut akan disimpan dan digunakan oleh <InLineBranding />{" "}
            dan kami berkomitmen untuk menjaga keamanan dan kerahasiaan data
            pribadi yang diberikan Pengguna saat mengakses dan menggunakan
            platform <InLineBranding />.
          </p>

          <p className="py-6">
            Data yang akan disimpan mencakup dan tidak terbatas kepada identitas
            pribadi, alamat email, dan catatan aktivitas yang dilakukan di dalam
            platform <InLineBranding />.<br />
            Kami sebagai platform berhak menggunakan data tersebut untuk :
          </p>

          <ol className="list-disc pl-6">
            <li className="py-3 ">
              Bahan riset dalam meningkatkan kualitas pengalaman dan pelayanan
              dalam menggunakan platform <InLineBranding />
            </li>
            <li className="py-3 ">
              Sumber informasi dalam melakukan sosialisasi, publikasi, ataupun
              promosi produk <InLineBranding />
            </li>
            <li className="py-3 ">
              Komunikasi secara langsung kepada para pengguna platform{" "}
              <InLineBranding />
            </li>
          </ol>

          <p className="py-6">
            Data pribadi yang diberikan oleh pengguna situs merupakan data yang
            diserahkan secara sadar dan tanpa adanya tekanan atau paksaan dari
            pihak manapun.
          </p>

          <p className="py-6">
            Keutuhan dan keamanan data pribadi, termasuk dan tidak terbatas
            kepada data account pengguna situs (email dan password), juga
            merupakan sepenuhnya tanggung jawab pengguna situs. Tim{" "}
            <InLineBranding /> tidak bertanggung jawab dan tidak dapat dimintai
            pertanggungjawaban atas penyalahgunaan data tersebut yang
            dikarenakan kelalaian oleh pengguna situs.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default PrivacyPolicy;
