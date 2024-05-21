
function Dummy() {
  return (
    <div>
<marquee  direction="up" onMouseOver={(e)=>{e.target.stop()}} onMouseOut={(e)=>{e.target.start()}} style={{ color: 'red', fontSize: '3em' }} >Test</marquee>

    </div>
  )
}

export default Dummy