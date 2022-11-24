const confirmTodoDeletionMiddleware = (store) => (next) => (action) => {
  if (action.type.toLowerCase().includes("delet")) {
    window.confirm("Are you sure you want to delete this?") ? next(action) : console.log("Not allowed to delete!");
  } else {
    return next(action);
  }
};

export default confirmTodoDeletionMiddleware;
