import "./styles.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Login } from "./Components/Login";
import { ThemeContext } from "./Context/ThemeProvider";
import { useContext } from "react";

export default function App() {
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  return (
    <div
      className="App"
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background
      }}
    >
      <h2>React Auth Context</h2>
      <Header />
      <Body />
      <Login />
    </div>
  );
}
