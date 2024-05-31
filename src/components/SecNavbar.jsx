import CountdownTimer from "./CountdownTimer"
function SecNavbar() {
  return (
<div
  className="-mt-[50px] h-[50px]  sm:px-4 py-3 flex flex-row justify-center"
>
  <span className='relative '>
    <CountdownTimer />
  </span>
</div>
  )
}
export default SecNavbar