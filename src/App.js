import './App.css';
import { useState } from 'react';
import { StringClaculator } from "./StringClaculator"

function App() {

  const [formData , setFormData] = useState("")
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setResult(StringClaculator(formData));
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };
  return (
    <div className="App">
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Enter numbers"
        />
        <button type="submit">Calculate</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <h2>Sum: {result}</h2>}
    </div>
  );
}

export default App;
