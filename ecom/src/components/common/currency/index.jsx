/* eslint-disable react/prop-types */


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
})


const Currency = ({value}) => {

  return (
    <div style={{color:"green",fontWeight: 600}} >{formatter.format(Number(value))}</div>
  )
}

export default Currency