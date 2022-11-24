import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorFilterAction, changeStatusFilterAction } from "../../../redux/reducers/filtersSlice";
import classes from "./Filters.module.css";

const Filters = () => {
  const status = useSelector((state) => state.filters.status);

  const dispatch = useDispatch();

  const handleChangeStatusFilter = (event) => {
    dispatch(changeStatusFilterAction(event.target.name));
  };

  const handleChangeColorFilter = (event) => {
    dispatch(changeColorFilterAction(event.target.name, event.target.checked));
  };

  return (
    <Fragment>
      <section>
        <h4>Filter by Status</h4>
        <div className={classes.statusFilter}>
          <input
            type="checkbox"
            id="allStatus"
            name="all"
            checked={status === "all" ? true : false}
            onChange={handleChangeStatusFilter}
            className={classes.statusCheckInput}
          />
          <label htmlFor="allStatus">All</label>
        </div>
        <div className={classes.statusFilter}>
          <input
            type="checkbox"
            id="activeStatus"
            name="active"
            checked={status === "active" ? true : false}
            onChange={handleChangeStatusFilter}
            className={classes.statusCheckInput}
          />
          <label htmlFor="activeStatus">Active</label>
        </div>
        <div className={classes.statusFilter}>
          <input
            type="checkbox"
            id="completedStatus"
            name="completed"
            checked={status === "completed" ? true : false}
            onChange={handleChangeStatusFilter}
            className={classes.statusCheckInput}
          />
          <label htmlFor="completedStatus">Completed</label>
        </div>
      </section>
      <section>
        <h4>Filter by Colors</h4>
        <div className={classes.colorCheckInputContainer}>
          <input type="checkbox" id="greenColor" name="green" onChange={handleChangeColorFilter} />
          <label htmlFor="greenColor">
            <span className={classes.colorLabel} />
            Green
          </label>
        </div>
        <div className={classes.colorCheckInputContainer}>
          <input type="checkbox" id="blueColor" name="blue" onChange={handleChangeColorFilter} />
          <label htmlFor="blueColor">
            <span className={classes.colorLabel} />
            Blue
          </label>
        </div>
        <div className={classes.colorCheckInputContainer}>
          <input type="checkbox" id="orangeColor" name="orange" onChange={handleChangeColorFilter} />
          <label htmlFor="orangeColor">
            <span className={classes.colorLabel} />
            Orange
          </label>
        </div>
        <div className={classes.colorCheckInputContainer}>
          <input type="checkbox" id="purpleColor" name="purple" onChange={handleChangeColorFilter} />
          <label htmlFor="purpleColor">
            <span className={classes.colorLabel} />
            Purple
          </label>
        </div>
        <div className={classes.colorCheckInputContainer}>
          <input type="checkbox" id="redColor" name="red" onChange={handleChangeColorFilter} />
          <label htmlFor="redColor">
            <span className={classes.colorLabel} />
            Red
          </label>
        </div>
      </section>
    </Fragment>
  );
};

export default Filters;
