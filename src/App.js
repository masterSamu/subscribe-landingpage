import "./App.css";
import Form from "./components/Forms/Form";
import Testemonial from "./components/Testemonial";
import inflationImage from "./resources/inflation.png";
import piggyBankImage from "./resources/piggy-bank-color.png";
import decreaseImage from "./resources/decrease.png";


function App() {
  return (
    <div>
      <main>
        <div className="container first-section">
          <div className="info-container">
            <h1>Make more money</h1>
            <p>We give you weekly tips how to turn your ideas to profit</p>
          </div>
          <div className="form-container">
            <p>Subscribe newsletter</p>
            <Form />
          </div>
        </div>
        <div className="container second-section">
          <h2>Key figures from our customers</h2>
          <div className="container testemonial-container">
            <Testemonial
              image={inflationImage}
              headline="15 % increase"
              text="in sales"
            />
            <Testemonial
              image={piggyBankImage}
              headline="8 % increase"
              text="in profits"
            />
            <Testemonial
              image={decreaseImage}
              headline="10 % decrease"
              text="in time spent on work"
            />
          </div>
        </div>
      </main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/inflation"
          title="inflation icons"
        >
          Inflation icons created by lutfix - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/piggy-bank"
          title="piggy-bank icons"
        >
          Piggy-bank icons created by Freepik - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/loss" title="loss icons">
          Loss icons created by Iconjam - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
