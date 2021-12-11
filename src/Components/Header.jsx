import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { Login } from "./Login";
import { ThemeContext } from "../Context/ThemeProvider";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  // const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  const logInUser = () => {
    return <Login />;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          border: "1px solid gray",
          padding: "20px",
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          About
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Home
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Career
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          Our Mission
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            background: "turquoise"
          }}
        >
          {isAuth ? (
            <button
              style={{ border: "none", background: "turquoise" }}
              onClick={() => setIsAuth(false)}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              style={{ border: "none", background: "turquoise" }}
              // onClick={() => setIsAuth(true)
              onClick={logInUser}
            >
              SIGN IN
            </button>
          )}
        </div>
        <div>
          {/* <button onClick={toggleTheme}> */}
          Switch to {theme === "light" ? "dark" : "light"} Mode
          {/* </button> */}
          <label className="themeBox">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="themeSlider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
