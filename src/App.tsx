import "./App.css";
import { Card } from "./components/card/Card";
import { Disclaimer } from "./components/Disclaimer";
import { Links } from "./components/Links";
import { Share } from "./components/Share";

// TODO: Add information about how severe the allergy is
// TODO: Add SEO tags
// TODO: Add more languages
// TODO: Translate all texts
// TODO: Add more allergies and make it possible to get them from a more hidden menu, keeping the important one in sight

function App() {
  return (
    <div className="App flex flex-col gap-16">
      <Card />
      <Share />
      <Disclaimer />
      <Links />
    </div>
  );
}

export default App;
