import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectedPercentage>How did you like the service?</SelectedPercentage>
      <SelectedPercentage>
        How did your Friend liked the service?
      </SelectedPercentage>
      <Output />
      <Reset>Reset</Reset>
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectedPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was Okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20"> Absolutetly amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h3>You pay X ($A+$B tip)</h3>;
}

function Reset({ children }) {
  return <button>{children}</button>;
}
