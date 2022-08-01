String.prototype.changeCase = function(toUpperCase = false, inventedFirstSymbolCase = false ) {
  let symbolsUpper = {}; 
  let symbolsLower = {}; 
  
  function add(a, b, symbols) {
    symbols[String.fromCharCode(a)] = String.fromCharCode(b);
  }
  
  function addRange(start, end, offset) {
    for (let i = start; i <= end; ++i) {
      add(i + offset, i, symbolsUpper);
      add(i, i+ offset, symbolsLower);
    }
  }

  function setSymbolCase(symbols, symbol){
    return symbols[symbol] || symbol;
  }
  
  function setCase(symbols, str, result =''){
    for (let i = 0, l = str.length; i < l; ++i) {
      result += setSymbolCase(symbols, str[i])
    }
    return result;
  }
  
  addRange(65, 90, 32);
  addRange(1040, 1071, 32);
  add(1105, 1025, symbolsUpper);
  add(1105, 1025, symbolsLower);
  
  let result = '';
  let str = this;
  
  if(inventedFirstSymbolCase){
    if(toUpperCase)
      result += setSymbolCase(symbolsLower, str[0])
    else
      result += setSymbolCase(symbolsUpper, str[0])
    str=str.slice(1)
  }
  
  if(toUpperCase)
    result = setCase(symbolsUpper, str, result);
  else
    result = setCase(symbolsLower, str, result);
  
  return result;
};

