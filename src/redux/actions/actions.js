function convertActionNameToType(actionName) {
     let myActionName= actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
      return   myActionName
  }
  
  export const actions = new Proxy(
    {},
    {
      get: function(target, prop) {
        if (target[prop] === undefined)
          return function (args) {
            return {
              type: convertActionNameToType(prop),
              payload:args
            };
            };
  
        else return target[prop];
      }
    }
  );
  
