import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CommonNews from "./pages/CommonNews";
import './App.css'

import CommonTemplate from "./pages/CommonTemplate";
import RegistrationFee from "./pages/Registration/RegistrationFee";

function App() {
   const confid="6884bd85959ec9c788efbba3";
  return (
    <>

<div id="content ">
      < Routes >
      {/* https://xceed.nitj.ac.in/conferencemodule/commontemplate/671fb502dbcf15e8ac081476 */}
      
        <Route path="/" element={<Home confId={confid} />} />
        {/* <Route path="localcommittee" element={<CommontemplateCommittee pageid="682c2dbe4f0ddcc436b90e88" />} /> */}
        <Route path="news/:newsid" element={<CommonNews /> } />
        {/* <Route path="commontemplate" element={<IntCommittee />} /> */}
        {/* Registration fees are kept here, from the EAIC 2027 flyer, rather than in the conference module */}
        <Route path="/6885a873959ec9c788f12867" element={<RegistrationFee />} />
        <Route path="/:templateid" element={<CommonTemplate confid={confid} />} />


      </Routes >
      </div>
    </>
  );
}

export default App;


