import { NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "src/design/block";
import { Paragraph, TitlePrimary } from "src/design/typography";
import { Post } from "src/layouts/post";

const GuidePost: NextPage = () => {
  const router = useRouter();
  return (
    <Post title={router.asPath}>
      <Box css={{ justifyContent: "space-between" }}>
        <Box direction="column" css={{ maxWidth: 720, padding: "$2" }}>
          <TitlePrimary>
            Native ESM 時代のフロントエンドビルドツールの動向
          </TitlePrimary>
          <Paragraph>
            モダンブラウザは Native ESM を備えているので、開発時は高速な
            localhost アクセスを頼って直接 import
            する、外部ライブラリだけ事前にコンパイルしておく、という手法が流行ってきている。プロダクション用は今まで通りビルドする。
          </Paragraph>
          <Paragraph>
            webpack
            はすべてを一つにバンドルするためにメモリ上にファイルの実体と依存グラフを持っているが、これによりメモリと
            CPU
            を圧迫する問題があった。特に巨大なリポジトリではそれが顕著になる。
          </Paragraph>
        </Box>
        <Box direction="column" css={{ display: "flex" }}>
          <Paragraph>
            モダンブラウザは Native ESM を備えているので、開発時は高速な
            localhost アクセスを頼って直接 import
            する、外部ライブラリだけ事前にコンパイルしておく、という手法が流行ってきている。プロダクション用は今まで通りビルドする。
          </Paragraph>
          <Paragraph>
            webpack
            はすべてを一つにバンドルするためにメモリ上にファイルの実体と依存グラフを持っているが、これによりメモリと
            CPU
            を圧迫する問題があった。特に巨大なリポジトリではそれが顕著になる。
          </Paragraph>
        </Box>
      </Box>
    </Post>
  );
};

export default GuidePost;
