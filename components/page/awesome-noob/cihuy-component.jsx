// Cara 2
export const CihuyComponent = (props) => {
  return (
    <div className="min-h-screen">
      {/* pasti children namanya kalau bentuknya */}
      <div>{props.children}</div>
    </div>
  )
}

export const CihuyComponent2 = () => {
  return (
    <div className="min-h-screen">
      <div>Cihuy 2</div>
    </div>
  )
}

export const CihuyButton = (props) => {
  // props itu bisa berupa string, number, array, object, component lain lagic
  console.log(props.list)
  return (
    <button
      className={`${props.color} border-black border-2 ${
        props.isRounded === true ? 'rounded-lg' : 'rounded-none'
      }`}
    >
      {props.children}
      {props.ngeng}
    </button>
  )
}
