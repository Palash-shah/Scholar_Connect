import './App.css';
import Login from './component/Login';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './component/Signup';
import Home from './component/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Feedback from './component/Feedback';
import Dashboard from './admin/Dashboard';
import FeedbackAdmin from './admin/FeedbackAdmin';
import AddScholarship from './component/AddScholarship';
import UploadStudent from './admin/UploadStudent';
import UploadDisabilitlesScholar from './admin/UploadDisabilitlesScholar';
import UploadMpScholar from './admin/UploadMpScholar';
import UploadMinorityScholar from './admin/UploadMinorityScholar';
function App() {  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Feedback' element = {<Feedback/>}/>
        <Route path='/AddScholarship' element = {<AddScholarship/>} />
        <Route path='/admin' element = {<Dashboard/>}/>
        <Route path='/admin/feedbackadmin' element = {<FeedbackAdmin/>}/>
        <Route path='/admin/uploadstudent' element = {<UploadStudent/>} />
        <Route path='/admin/UploadMpScholar' element = {<UploadMpScholar/>} />
        <Route path='/admin/UploadDisabilitlesScholar' element = {<UploadDisabilitlesScholar/>} />
        <Route path='/admin/UploadMinorityScholar' element = {<UploadMinorityScholar/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
