import "./App.scss";
import { Navbar, Feed } from "./containers";
import { HomeScreenProfile } from "./components";

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="app__app-main-container">
            <div className="app__app-main-grid">
               <Feed />
               <HomeScreenProfile />
            </div>
         </div>
      </div>
   );
}

export default App;
