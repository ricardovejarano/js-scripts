setImmediate(function A() {
    setImmediate(function B() {
      console.log(1);
      setImmediate(function D() { console.log(2); });
      setImmediate(function E() { console.log(3); });
    });
    setImmediate(function C() {
        console.log(4);
      setImmediate(function F() { console.log(5); });
      setImmediate(function G() { console.log(6); });
    });
  });
  
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0)
  
  // 'TIMEOUT FIRED' 1 4 2 3 5 6
  // OR
  // 1 'TIMEOUT FIRED' 4 2 3 5 6