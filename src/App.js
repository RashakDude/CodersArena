import React,{useReducer,createContext} from 'react';
import QuestionBox from './Pages/QuestionBox';
import JoinPage from "./Pages/JoinPage";
import {reducer} from './Reducer/info';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import SessionExpired from './Pages/SessionExpired';
import EndTest from './Pages/EndFight';
import NavBar from "./Components/Navbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const initialState={
  name:"",
  qID:"",
  joinID:"",
  points:0,
  won:""
}

export const InfoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
		<InfoContext.Provider value={{ state, dispatch }}>
			<Router>
				<>
					<ReactNotification />
					<NavBar />
					<Route exact path="/" component={JoinPage} />
					<PrivateRoute exact path="/fight">
						<QuestionBox />
					</PrivateRoute>
					<PrivateRoute exact path="/end">
						<EndTest />
					</PrivateRoute>
					<Route exact path="/expired" component={SessionExpired} />
				</>
			</Router>
		</InfoContext.Provider>
  );
}

export default App;


				
//<QuestionBox qID="6037c8517ca56a1fb45fa829"/>
				