import CountdownTimer from "./CountdownTimer"
function SecNavbar() {
  return (
<div
  className=" h-[50px]  sm:px-4 py-3 flex flex-row justify-center -mt-[50px] "
>
  <span className='relative '>
    <CountdownTimer />
  </span>
</div>
  )
}
export default SecNavbar