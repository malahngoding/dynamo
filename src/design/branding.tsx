interface LogoProps {
  scale?: number;
}
export const Logo = (props: LogoProps): JSX.Element => {
  let drill: number;
  if (props.scale) {
    drill = props.scale;
  } else {
    drill = 1;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: `calc(32px * ${drill})`,
        width: `calc(48px * ${drill})`,
        border: "4px solid #18191F",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100%",
          backgroundColor: "#474A57",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flex: 2,
          borderLeft: "4px solid #18191F",
          backgroundColor: "#ffffff",
          height: "100%",
        }}
      ></div>
    </div>
  );
};
