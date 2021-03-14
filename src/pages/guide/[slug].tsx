import { NextPage } from "next";
import { Box, Div } from "src/design/block";
import { Paragraph, TitlePrimary } from "src/design/typography";
import { Post } from "src/layouts/post";
import { Clock, Calendar } from "react-feather";

const response = {
  title: "Native ESM 時代のフロントエンドビルドツールの動向",
  publishDate: "2021/3/9",
  readTime: "5 min",
  emoji: "🤓",
  author: "Untung So Andryanto",
};

const GuidePost: NextPage = () => {
  return (
    <Post title="Native ESM 時代のフロントエンドビルドツールの動向">
      <Box
        direction="column"
        css={{
          backgroundColor: "$blue100",
          padding: "$2 $0",
        }}
      >
        <Box direction="column" css={{ maxWidth: 640, textAlign: "center" }}>
          <TitlePrimary css={{ fontSize: "$5" }}>{response.emoji}</TitlePrimary>
          <TitlePrimary>{response.title}</TitlePrimary>
          <Box css={{ margin: "$1" }}>
            <Box css={{ margin: "0 $1" }}>
              <Calendar />
              <Div css={{ marginLeft: "$0" }}>{response.publishDate}</Div>
            </Box>
            <Box css={{ margin: "0 $1" }}>
              <Clock />
              <Div css={{ marginLeft: "$0" }}>{response.readTime}</Div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Div
        css={{
          maxWidth: 1080,
          margin: "auto",
        }}
      >
        <Div
          css={{
            display: "flex",
            flexDirection: "column",
            margin: "$5 $1",
            md: { flexDirection: "row" },
          }}
        >
          <Div css={{ display: "flex", flexDirection: "column" }}>
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
          </Div>
          <Div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              padding: "0 $1",
              md: { width: 480 },
            }}
          >
            <Div css={{ fontSize: "$0" }}>{response.author}</Div>
            <Div css={{ fontSize: "$0" }}>Topics</Div>
          </Div>
        </Div>
      </Div>
    </Post>
  );
};

export default GuidePost;
