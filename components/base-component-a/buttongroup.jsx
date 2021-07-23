export function ButtonGroup1(props) {
  const { tittle, color = "bg-white" } = props;
  return (
    <div>
      <button
        className={`w-[155px] h-[60px] ${color} p-2 text-center font-black border-2 rounded-lg`}
      >
        {tittle}
      </button>
    </div>
  );
}
export function LongButton(props) {
    const { tittle, color = "bg-black" } = props;
    return (
      <div>
        <button
          className={`w-[327px] h-[60px] ${color} p-2 text-center font-black border-2 rounded-lg`}
        >
          {tittle}
        </button>
      </div>
    );
  }
