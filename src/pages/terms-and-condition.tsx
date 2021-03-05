import { NextPage } from "next";
import { WallOfTextBlock, SplinterBox, HeadingBox } from "src/design/block";
import {
  HeadingSecondary,
  TitleSecondary,
  Paragraph,
  Splinter,
} from "src/design/typography";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

const Terms: NextPage = () => {
  const heading = "Syarat dan Ketentuan";
  const splinter = "Terms & Conditon";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <TitleSecondary>1 Januari 2021</TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Terima kasih telah mengunjungi <strong>MALAHNGODING</strong> sebuah
          platform pembelajaran praktis untuk para pengembang aplikasi berbasis
          web dan mobile dengan model full online learning. Pada halaman ini
          akan dijelaskan ketentuan-ketentuan terkait dengan{" "}
          <strong>MALAHNGODING</strong>. Dengan Kamu menggunakan platform{" "}
          <strong>MALAHNGODING</strong>, maka Kamu telah setuju dan patuh dengan
          Ketentuan Penggunaan platform ini. Bila Kamu tidak setuju dengan
          Ketentuan Penggunaan platform yang dijelaskan, maka Kamu tidak
          diperkenankan menggunakan platform ini.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Ketentuan Penggunaan ini berlaku terhadap seluruh pengguna dan
          pengunjung platform dan aplikasi <strong>MALAHNGODING</strong>. Setiap
          pengguna fitur, konten, dan produk yang disediakan oleh{" "}
          <strong>MALAHNGODING</strong>(<strong>malahngoding</strong>.com” atau
          “kami”) untuk selanjutnya secara bersama-sama akan disebut sebagai
          “Pengguna”, “Pelanggan” atau “Kamu”.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Ketentuan Penggunaan ini dapat diubah, dimodifikasi, ditambah, atau
          diamandemen dari waktu ke waktu berdasarkan kebijakan kami, dan dengan
          tanpa adanya pemberitahuan terlebih dahulu kepada Kamu. Kamu setuju
          dan menerima kewajiban Kamu untuk memeriksa Ketentuan Penggunaan ini
          secara rutin pada platform kami.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          AKSES PLATFORM
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Dalam penggunaan platform ini, terdapat beberapa area dengan akses
          yang dibatasi sesuai dengan hak/lisensi Kamu. Tim{" "}
          <strong>MALAHNGODING</strong> memiliki hak untuk membatasi akses
          sebagian maupun keseluruhan platform, sesuai dengan kebijakan yang
          berlaku selama tidak mempengaruhi keamanan dan kenyamanan layanan{" "}
          <strong>MALAHNGODING</strong>.com. Penggunaan email dan password
          merupakan sepenuhnya hak dan tanggung jawab pengguna sekaligus pemilik
          akun dan password. Semua aktivitas dan penggunaan terkait pemilik user
          dan ID akan menjadi tanggung jawab pemilik yang terdaftar dalam
          database <strong>MALAHNGODING</strong>.com dan database pihak ke-tiga.
          Tim <strong>MALAHNGODING</strong>.com memiliki wewenang untuk mengubah
          atau menonaktifkan email terkait apabila di kemudian hari terdapat
          pelanggaran Ketentuan Penggunaan atau atas permintaan pemilik ID.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          JAMINAN LAYANAN
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Setiap layanan termasuk dan tidak terbatas yang berhubungan kepada
          perangkat lunak, konten, informasi rahasia, dan teknologi atau materi
          lain apapun yang disediakan oleh <strong>MALAHNGODING</strong>.com
          kepada pelanggan/pengguna platform diberikan sebagaimana adanya dan
          tanpa jaminan dalam bentuk apapun.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Penggunaan platform ini dengan segala risiko yang mungkin terjadi
          adalah sepenuhnya tanggung jawab pelanggan/pengguna platform. Konten
          dalam platform ini tersedia sebagaimana adanya dan sebagaimana
          tersedia tanpa adanya jaminan apapun termasuk dengan jaminan terkait
          untuk keperluan bisnis di luar dari pembayaran langganan. Tidak ada
          jaminan bahwa <strong>MALAHNGODING</strong>.com akan selalu bebas
          gangguan atau bebas dari kesalahan lainnya, dan juga tidak ada jaminan
          terhadap apapun hasil yang didapatkan dari menggunakan platform ini
          seperti dan tidak terbatas hanya untuk jaminan diterima kerja.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Platform ini dapat berisi testimoni/komen/saran oleh pengguna produk
          dan/atau layanan kami. Kesaksian ini mencerminkan pengalaman dan opini
          dari pengguna tersebut. Namun, pengalaman itu bersifat pribadi bagi
          pengguna tertentu, dan mungkin tidak selalu mewakili semua pengguna
          produk dan/atau layanan kami. Kami tidak mengklaim, dan Kamu tidak
          boleh berasumsi, bahwa semua pengguna akan memiliki pengalaman yang
          sama. Hasil individual Kamu dapat bervariasi. Kesaksian di platform
          disampaikan dalam berbagai bentuk seperti teks, audio dan/atau video,
          dan ditinjau oleh kami sebelum diposting. Mereka muncul di platform
          kata demi kata seperti yang diberikan oleh pengguna, kecuali untuk
          koreksi tata bahasa atau kesalahan pengetikan. Beberapa testimoni
          mungkin telah dipersingkat demi singkatnya, di mana testimonial
          lengkap berisi informasi asing yang tidak relevan bagi masyarakat
          umum.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Pandangan dan pendapat yang terkandung dalam testimoni sepenuhnya
          menjadi milik pengguna individu dan tidak mencerminkan pandangan dan
          pendapat <strong>MALAHNGODING</strong>.com.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Penyedia Layanan lainnya yang tergabung dalam MALAHNGODING.com
          termasuk dan tidak terbatas kepada afiliasi, pemasok dan/atau pemberi
          lisensi pihak ketiga tidak menjamin atau menyatakan bahwa perangkat
          lunak dan/atau layanan yang disediakan tidak akan terganggu, tanpa
          kesalahan.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Segala Layanan/Lisensi/Konten yang berhubungan dengan penyedia lainnya
          yang tergabung dalam MALAHNGODING.com tidak menjadi tanggung jawab
          MALAHNGODING.com jika terjadi kesalahan/kerugian terhadap
          pengguna/pelanggan.{" "}
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          MALAHNGODING.com tidak bertanggung jawab terhadap kerugian yang
          didapatkan dari penggunaan platform dan layanan melalui platform kami.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Kode sumber MALAHNGODING tersedia dan terbuka untuk umum pada
          penyimpanan repository yang di kelola oleh pihak ke-tiga secara
          online. Siapapun dapat melihat, memberikan komentar, dan berkontribusi
          langsung dalam pengembangannya.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          JAMINAN PRIVASI
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Kami berkomitmen untuk menjaga keamanan dan kerahasiaan data pribadi
          yang diberikan Pengguna saat mengakses dan menggunakan Platform (“Data
          Pribadi”). Dalam hal ini, Data Pribadi diberikan oleh Pengguna secara
          sadar dan tanpa adanya tekanan atau paksaan dari pihak manapun, serta
          ikut bertanggung jawab penuh dalam menjaga kerahasiaan Data Pribadi
          tersebut.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Keamanan dan kerahasiaan akun Kamu, termasuk namun tidak terbatas pada
          seluruh data pribadi yang Kamu berikan kepada kami melalui formulir
          pendaftaran pada Platform kami, sepenuhnya merupakan tanggung jawab
          pribadi Kamu. Segala kerugian dan risiko yang timbul akibat atau
          sehubungan dengan kelalaian Kamu dalam menjaga keamanan dan
          kerahasiaan akun Kamu ditanggung oleh Kamu sendiri.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          PENGEMBANGAN PLATFORM
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          MALAHNGODING berhak untuk melakukan pengembangan, perubahan, dan/atau
          penyesuaian isi dan layanan platform secara tetap ataupun untuk waktu
          tertentu, dengan atau tanpa adanya pemberitahuan sebelumnya kepada
          pengguna platform.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Pengembangan platform dilakukan secara terbuka dan siapapun dapat ikut
          berkontribusi dalam prosesnya.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          ATURAN PENGGUNAAN
        </TitleSecondary>
        <Paragraph>
          <strong>Aturan untuk Semua Pengguna</strong>
        </Paragraph>
        <Paragraph>
          Ketika Kamu membuka platform dan layanan <strong>MALAHNGODING</strong>
          , Kamu menyetujui aturan berikut :
        </Paragraph>
        <ListItem>
          <li>
            Kamu akan menggunakan Layanan hanya untuk tujuan yang sah dan setuju
            untuk tidak menggunakan Layanan dengan cara apa pun yang akan
            melanggar penggunaan atau hak pengguna lain mana pun.
          </li>
          <li>
            Setiap penggunaan layanan akan dan harus tunduk pada semua hukum dan
            peraturan yang berlaku, dan Kamu bertanggung jawab sepenuhnya atas
            substansi komunikasi yang Kamu buat melalui Layanan.
          </li>
          <li>
            Kamu tidak akan mengunggah materi apa pun yang dilindungi hak cipta,
            merek dagang, atau kepemilikan pada Layanan tanpa izin tertulis dari
            pemilik. Kamu tidak akan memposting konten apapun yang melanggar hak
            paten, merek dagang, rahasia dagang, hak cipta, hak publisitas, atau
            kekayaan intelektual lainnya dan/atau hak kepemilikan dari pihak
            manapun.
          </li>
          <li>
            Kamu memahami bahwa setiap Kelas / Camps tersedia untuk umum dan
            bisa dilihat/diakses dan dibeli oleh siapapun
          </li>
          <li>
            Kamu setuju bahwa Kamu tidak akan terlibat dalam perilaku apapun
            yang merupakan produk iklan dan marketing yang tidak sah atau tidak
            diminta, sampah (junk mail) atau email massal (juga dikenal sebagai
            `&amp;quot`spam`&amp;quot`), surat berantai, segala bentuk
            permintaan ajakan tidak sah lainnya, atau segala bentuk lotere atau
            perjudian.
          </li>
          <li>
            Kamu tidak akan membagikan konten dari Layanan dengan siapa pun yang
            tidak memiliki lisensi atau hak untuk mengakses konten.
          </li>
          <li>
            Kamu tidak akan mengunggah, membagikan, memposting,
            mendistribusikan, atau mengambil bagian dalam perilaku apa pun yang
            melanggar hukum, mengancam, melecehkan, melecehkan, memfitnah,
            menipu, menipu, menipu, melanggar privasi orang lain, menyiksa,
            mengandung deskripsi atau akun eksplisit atau grafik tindakan
            seksual (termasuk tetapi tidak terbatas pada bahasa seksual yang
            bersifat kasar atau mengancam yang ditujukan pada individu atau
            kelompok individu lain), atau melanggar aturan atau kebijakan kami.
          </li>
          <li>
            Kamu tidak akan mengambil bagian dalam perilaku apa pun yang
            mengorbankan, melecehkan, merendahkan, atau mengintimidasi individu
            atau kelompok individu berdasarkan agama, gender, orientasi seksual,
            ras, etnis, usia, atau cacat.
          </li>
          <li>
            Kamu tidak akan berbagi virus perangkat lunak atau kode komputer,
            file, atau program lain apa pun yang dirancang atau dimaksudkan
            untuk mengganggu, merusak, atau membatasi berfungsinya perangkat
            lunak, perangkat keras, atau peralatan telekomunikasi apa pun atau
            merusak atau mendapatkan akses tidak sah ke sembarang data atau
            informasi lain dari pihak ketiga mana pun.
          </li>
          <li>
            Kamu tidak akan menyamar sebagai orang atau entitas lain, termasuk
            karyawan atau perwakilan kami.
          </li>
          <li>
            Kamu tidak akan menggunakan akun Kamu untuk melanggar keamanan akun
            lain atau mencoba untuk mendapatkan akses tidak sah ke jaringan atau
            server lain. Tidak semua bagian Layanan dapat tersedia untuk Kamu
            atau pengguna Layanan resmi lainnya. Kamu tidak akan mengganggu
            penggunaan dan kesenangan orang lain terhadap Layanan. Pengguna yang
            melanggar sistem atau keamanan jaringan dapat dikenai tanggung jawab
            pidana atau perdata.
          </li>
        </ListItem>
        <Paragraph>
          <strong>Aturan Khusus untuk Sobat MALAHNGODING</strong>
        </Paragraph>
        <Paragraph>
          Saat Kamu mendaftar di Platform dan Layanan{" "}
          <strong>MALAHNGODING</strong>, Kamu menyetujui aturan berikut :
        </Paragraph>
        <ListItem>
          <li>
            Kamu akan menerima semua syarat dan ketentuan termasuk kebijakan
            tidak ada pengembalian uang (no-refund policy) yang tercantum dalam
            Layanan ketika Kamu setuju untuk mendaftar atau mengakses seluruh
            Layanan <strong>MALAHNGODING</strong>
            termasuk mendaftar di Kelas / Camps dalam
            <strong>MALAHNGODING</strong>
          </li>
          <li>
            Kamu akan mengikuti semua aturan yang ditetapkan oleh seorang mentor
            sehubungan dengan Kelas / Camps, dan Kamu tidak akan mengambil
            tindakan apa pun untuk mengganggu mentor atau siswa lain dalam Kelas
            / Camps.
          </li>
          <li>
            Kamu dapat mengakses konten Kelas / Camps hanya untuk informasi dan
            penggunaan pribadi Kamu.
          </li>
          <li>
            Kamu tidak akan menyalin materi atau teknik apapun untuk keperluan
            Kelas / Camps Kamu sendiri atau orang lain, atau untuk mengganggu
            Kelas / Camps atau hubungan berkelanjutan mentor dengan siswa yang
            berpartisipasi dalam Kelas / Camps tersebut.
          </li>
          <li>
            <strong>MALAHNGODING</strong> berhak untuk menghapus atau
            menangguhkan akun Kamu jika Kamu melanggar aturan kami, atau kapan
            saja dan dengan alasan apa pun.
          </li>
        </ListItem>
        <Paragraph>
          <strong>Aturan Tidak Ada Pengembalian Uang (No-refund Policy)</strong>
        </Paragraph>
        <Paragraph>
          Biaya berlangganan dan biaya lain yang berlaku tidak dapat diubah,
          dibatalkan, dikembalikan, ditukar atau dialihkan ke orang/pihak lain
          dalam keadaan apapun termasuk keadaan kahar. Pembayaran tidak dapat
          dikembalikan dan tidak ada pengembalian uang atau kredit yang telah
          dibayarkan untuk Kelas / Camps yang telah sebagian digunakan.{" "}
          <strong>MALAHNGODING</strong> tidak bertanggung jawab atau
          berkewajiban atas pengembalian uang untuk Kelas / Camps atau pembelian
          lainnya pada Layanan.
        </Paragraph>
        <Paragraph>
          <strong>Perubahan Harga</strong>
        </Paragraph>
        <Paragraph>
          Kami berhak untuk menyesuaikan harga untuk layanan kami, atau
          komponennya dengan cara apa pun dan kapan saja. / Camps atau pembelian
          lainnya pada Layanan.
        </Paragraph>
        <Paragraph>
          <strong>Aturan Lain</strong>
        </Paragraph>
        <Paragraph>
          <strong>MALAHNGODING</strong> juga memiliki layanan tutor pemrograman,
          workshop, dan pengembangan perangkat lunak. Aturan yang mengikat
          terhadap jasa tersebut akan di jelaskan pada masing - masing kontrak
          untuk jasa tersebut dan tidak terikat terhadap aturan yang ditampilkan
          di halaman ini.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          HAK KEKAYAAN INTELEKTUAL
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Seluruh isi dan konten yang diterbitkan dalam platform{" "}
          <strong>MALAHNGODING</strong> merupakan hak cipta dari{" "}
          <strong>MALAHNGODING</strong>.com. Penggunaan isi dan konten platform
          harus tunduk dan mengacu kepada Ketentuan Penggunaan ini. Isi konten
          dalam <strong>MALAHNGODING</strong>(modul, video, materi dan soal)
          hanya boleh digunakan secara utuh apa adanya tanpa ada perubahan,
          untuk kebutuhan penggunaan pribadi dan non-komersial. Dilarang untuk
          melakukan pengunduhan (download) dan penggunaan lainnya yang melanggar
          aturan Ketentuan Penggunaan.
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          KEADAAN KAHAR ( FORCE MAJEURE )
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Platform Kami dapat diinterupsi oleh kejadian di luar kewenangan atau
          kontrol Kami (“Keadaan Kahar”), termasuk namun tidak terbatas pada
          bencana alam, gangguan listrik, gangguan telekomunikasi, kebijakan
          pemerintah, wabah virus dan lain-lain. Kamu setuju untuk membebaskan
          Kami dari setiap tuntutan dan tanggung jawab, jika Kami tidak dapat
          memfasilitasi Layanan, termasuk memenuhi instruksi yang Kamu berikan
          melalui Platform, baik sebagian maupun seluruhnya, karena suatu
          Keadaan Kahar
        </Paragraph>
        <TitleSecondary css={{ fontWeight: "bold", margin: "$2 0 $0 0" }}>
          PELANGGARAN HUKUM
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$2" }}>
          Kamu hanya dapat menggunakan platform ini jika tidak bertentangan
          dengan atau melanggar peraturan perundang-undangan yang berlaku.
          Dengan menggunakan Platform, Kamu menerima tanggungjawab penuh bahwa
          penggunaan atau akses Kamu ke Platform tidak melanggar peraturan
          perundang-undangan yang berlaku. Untuk melaksanakan ketentuan ini,
          kami memiliki hak untuk menolak keanggotaan, atau menangguhkan atau
          menghentikan akun Kamu segera dan tanpa pemberitahuan sebelumnya atas
          kebijakan kami sendiri.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Ketentuan Penggunaan ini diatur berdasarkan dan ditafsirkan sesuai
          dengan hukum Republik Indonesia. Kamu setuju bahwa setiap dan seluruh
          sengketa yang timbul dari atau sehubungan dengan Ketentuan Penggunaan
          ini (“Sengketa”) akan diupayakan untuk diselesaikan secara damai.
          Dalam hal penyelesaian secara damai tidak dapat dicapai dalam jangka
          waktu yang ditentukan, maka akan dilakukan mediasi oleh Pihak Ketiga
          yang akan ditunjuk secara bersama oleh Para Pihak. Jika Selanjutnya
          penyelesaian sengketa tidak dapat tercapai maka Kamu setuju untuk
          tunduk kepada wilayah hukum non-eksklusif Pengadilan Kota Tangerang
          Selatan.
        </Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default Terms;

const ListItem = styled("ol", {
  listStyleType: "decimal",
  marginLeft: "$2",
  textAlign: "left",
  li: {
    paddingLeft: "$0",
    margin: "$0 0",
  },
});