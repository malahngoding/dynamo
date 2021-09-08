/* eslint-disable prettier/prettier */

export const HiSulthanComponent = (props) => {
  if (props.sulthan === 'sulthan') {
    return <></>
  }
  return (
    <div>
      <p>Hi Sulthan dan {props.sulthan}</p>
    </div>
  )
}
