function initializr (modules = {}, el = document.body) {
  const {controller, action} = el.dataset;

  execute("common", "initialize");
  execute(controller, "initialize");
  execute(controller, action);

  function execute(controllerName, actionName) {
    if (!controllerName || !actionName) return;

    const module = modules[controllerName];

    if (!module) {
      console.warn(`Module: ${controllerName} does not exist`);
      return;
    }

    const action = module[actionName];

    if (typeof action !== "function") {
      console.warn(`Action: ${actionName} is not a function`);
      return;
    }

    action();
  }
}
