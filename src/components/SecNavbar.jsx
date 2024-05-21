import CountdownTimer from "./CountdownTimer"
function SecNavbar() {
  return (
        <div
              className="-mt-[50px] h-[50px] flex  justify-center  z-50  px-2 sm:px-4 lg:px-8 py-3 lg:space-x-8 "
            >
              <span className='relative '>
              <CountdownTimer />
              </span>

            </div>
  )
}
export default SecNavbar