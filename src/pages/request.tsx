/* eslint-disable no-console */
import { NextPage } from "next";
import { useState } from "react";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  Div,
} from "src/design/block";
import { Button } from "src/design/button";
import { Spacer } from "src/design/spacer";
import {
  HeadingSecondary,
  TitlePrimary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { supabase } from "src/hooks/useSupabase";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

const Request: NextPage = () => {
  const heading = "Tumbuh Bersama Pengguna";
  const splinter = "Request Feature";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <TitlePrimary>Halo Semua! 👋</TitlePrimary>
        <Paragraph css={{ marginTop: "$2" }}>
          Silahkan request materi/fitur/apapun yang bisa ditambahkan kedalam
          platform kita. <strong>MALAH NGODING</strong> percaya bahwa membangun
          platform adalah dari pengguna dan untuk pengguna. Ayo bantu{" "}
          <strong>MALAH NGODING</strong> dan mari berkembang bersama-sama!
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>Mad Respect!</Paragraph>
        <Paragraph css={{ fontWeight: 1000 }}>Malah Ngoding Squad</Paragraph>
        <Form />
      </WallOfTextBlock>
    </Base>
  );
};

const Form = () => {
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleInput = async (
    description: string,
    category: string,
  ): Promise<any> => {
    const { data, error } = await supabase
      .from("request")
      .insert([{ description: description, category: category }]);
    setCategory("");
    setDescription("");
    console.info(data, error);
  };

  return (
    <Div
      css={{
        margin: "$5 0",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <HeadingSecondary>Request</HeadingSecondary>
      <Spacer />
      <TitleSecondary>Mau apa?</TitleSecondary>
      <Spacer />
      <StyledSelect
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <StyledOption disabled value={category}>
          Pilih
        </StyledOption>
        <StyledOption value="feature">Feature</StyledOption>
        <StyledOption value="article">Article</StyledOption>
        <StyledOption value="bertanya">Bertanya</StyledOption>
      </StyledSelect>
      <Spacer />
      <TitleSecondary>Deskripsikan</TitleSecondary>
      <Spacer />
      <StyledInput
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Spacer />
      <Button color="white" onClick={() => handleInput(description, category)}>
        Submit
      </Button>
    </Div>
  );
};

const StyledSelect = styled("select", {
  border: "2px solid $dark800",
  backgroundColor: "transparent",
  padding: "0 $1 0 0",
  maxWidth: "320px",
});
const StyledOption = styled("option", {
  border: "2px solid $dark800",
});
const StyledInput = styled("textarea", {
  border: "2px solid $dark800",
  borderRadius: "8px",
});

export default Request;
