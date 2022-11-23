var Module = (function() {
  var _privateHey = "Hey";

  function _privateMethod() {
    console.log( _privateHey );
  }

  return {
    publicMethod: () => {_privateMethod();}
  }
})()