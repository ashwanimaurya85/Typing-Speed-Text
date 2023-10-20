import Select from "react-select";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ThemeOptions } from "../utils/ThemeOptions";
import { useTheme } from "../context/ThemeContext";
const Footer = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (e) => {
    localStorage.setItem("theme", JSON.stringify(e.value));
    setTheme(e.value);
  };
  return (
    <div className="footer">
      <div className="links">
        <a href="https://github.com/ashwanimaurya85/Typing-Speed-Text" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/ashwani-kumar-48b28721a/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/Ashwani89142771" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/ashwani.maurya.1213986/" target="_blank">
          <InstagramIcon />
        </a>
      </div>
      <div className="select-theme">
        {" "}
        Select Theme:
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? theme.color : theme.textBoxColor,
              backgroundColor: theme.background,
              color: "white",
            }),

            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: theme.background,
            }),

            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: state.isFocused ? theme.color : theme.background,
              color: state.isFocused ? theme.background : theme.color,
              cursor: "pointer",
            }),
          }}
          value={theme}
          options={ThemeOptions}
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
};

export default Footer;
