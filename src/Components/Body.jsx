import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";

const Body = () => {
  const [isAuth] = useContext(AppContext);
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  if (isAuth) {
    return (
      <>
        <div
          style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background
          }}
        >
          <div>
            <h1>Welcome back to DashBoard dear User</h1>
          </div>
          <div>
            <h2>We are here to Serve you Tell us what we can do for you</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h3>Please login to continue with the site</h3>
      </div>
    );
  }
};
export default Body;
