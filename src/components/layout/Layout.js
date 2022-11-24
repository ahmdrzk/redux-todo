import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Redux Fundamentals Example</h1>
      </header>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
