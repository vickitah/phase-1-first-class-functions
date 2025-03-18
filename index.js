function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      return "I'm a named function!";
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      return "I'm an anonymous function!";
    };
  }
  