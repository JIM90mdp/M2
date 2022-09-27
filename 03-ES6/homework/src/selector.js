var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  const result = matchFunc(startEl)
    if (result) {
      resultSet.push(startEl)
    }
  
  for (const child of startEl.children){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,child));
    // const result = traverseDomAndCollectElements(matchFunc,child)  //Otra forma de hacer la linea de arriba.
    // resultSet = [...resultSet, ...result]
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
/*
| Tipo de Selector | Ejemplo de selector de string | selectorTypeMatcher devuelve |
|------------------|-------------------------------|------------------------------|
| id               | '#savebox'                    | 'id'                         |
| class name       | '.red'                        | 'class'                      |
| element tag      | 'div'                         | 'tag'                        |
| tag with class   | 'div.red'                     | 'tag.class'                  |
*/


var selectorTypeMatcher = function(selector) {
  if (selector.startsWith(".")) return ("class");
  if (selector.startsWith("#")) return("id");
  if (!selector.startsWith("." ) && selector.includes(".")) return ("tag.class");
  return "tag";
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = element => element.id === selector.substring(1);
  } else if (selectorType === "class") {
    matchFunction = element => `.${element.className}` === selector || element.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
    matchFunction = element => {
      let aux = selector.split(".");
      if(element.className === aux[1] || element.classList.contains(aux[1]) ) return true; return false;
      // element.className === aux[1] ? true : element.classList.contains(aux[1]) ? true : false;
    }
  //   matchFunction = function(element) {
  //   let aux = selector.split(".")
  //   if(element.className === aux[1] || element.classList.contains(aux[1]) ) return true; return false;
  // }
    // matchFunction = (element) => `${element.className}` === aux[1];
  } else if (selectorType === "tag") {
    var matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

var $ = function(selector) { //"#profe"
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


