import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import AboutUS from './components/AboutUs';
import ExecutivesPage from './pages/executives';
import ActivitiesPage from './pages/activites';
import IBRTPage from './pages/ibrt';
import MedpreneurPage from './pages/medpreneur';
import Home from './pages/index';
import PresidentSpeechPage from './pages/president-speech';
function App() {
  return (
    <Router className="App">
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/aboutus" component={AboutUS} exact />
      <Route path="/executives" component={ExecutivesPage} exact />
      <Route path="/activities" component={ActivitiesPage} exact />
      <Route path="/ibrt" component={IBRTPage} exact />
      <Route path="/medpreneur" component={MedpreneurPage} exact />
      <Route path="/president-speech" component={PresidentSpeechPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
