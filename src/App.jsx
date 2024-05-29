import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation";
import Location from "./pages/Location";
import Registration from "./pages/Registration";
import Souvenir from "./pages/Souvenir";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
// import Committee from "./pages/Committee";
import CommonNews from "./pages/CommonNews";
import PaperDetails from "./pages/Papers";
import IntCommittee from "./pages/IntCommittee";
import OtherCommittee from "./pages/OtherCommittee";
import NaCommittee from "./pages/NationalCommittee";
import MainCommittee from "./pages/OrganisingTeam";
import TechCommittee from "./pages/TechCommittee";
function App() {
    const confid ="664cca585f685bd4d93815b9";
  return (
    <>

      < Routes >
        <Route path="/" element={<Home confId={confid} />} />
        <Route path="sponsorship" element={<Sponsors />} />
        <Route path="events" element={<Events />} />
        <Route path="location" element={<Location confid={confid}  />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="souvenir" element={<Souvenir />} />
        <Route path="registration" element={<Registration />} />
        <Route path="committee" element={<IntCommittee confid={confid} />} />
        <Route path="committee/international" element={<IntCommittee confid={confid} />} />
        <Route path="committee/national" element={<NaCommittee confid={confid} />} />
        <Route path="committee/technical" element={<TechCommittee confid={confid} />} />
        <Route path="committee/others" element={<OtherCommittee confid={confid} />} />
      
        <Route path="committee/main" element={<MainCommittee confid={confid} />} />
        
        <Route path="paperdetails" element={<PaperDetails confid={confid} />} />
        
        <Route path="news/:newsid" element={<CommonNews /> } />
      </Routes >
    </>
  );
}

export default App;


