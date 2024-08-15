import './App.css';
import { useState } from 'react';
import { StringClaculator } from "./StringClaculator"
import { Card, CardContent , TextField , Button, Grid , Typography} from '@mui/material';

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
      <Card>
        <h1>String Calculator</h1>
        <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item sm={8}>
            <TextField
          type="text"
          variant="outlined" 
          fullWidth
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          label="Enter numbers"
        />
            </Grid>
            <Grid item sm={8} container justifyContent="flex-end">
            <Button type="submit" variant="contained">Calculate</Button>
            </Grid>
            <Grid item sm={8} container justifyContent="center">
            <Typography variant="h1" component="h2">
            {error ? <p style={{ color: 'red' }}>{error}</p> : <h6>Sum: {result}</h6>}
</Typography>
            
            </Grid>
          </Grid>
      </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
