import Home from "./Home";

// Test variant — swaps --navy and --red site-wide via CSS variable override.
// Delete this file and the /home2 route in main.jsx when testing is done.
export default function Home2() {
  return (
    <div style={{ "--navy": "#a32035", "--red": "#10183a" }}>
      <Home />
    </div>
  );
}
