import classes from "./Footer.module.css";
import Controls from "./controls/Controls";
import Filters from "./filters/Filters";

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <Controls />
      <Filters />
    </footer>
  );
};

export default Footer;
