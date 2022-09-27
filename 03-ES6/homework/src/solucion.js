var traverseDomAndCollectElements = function(matchFunc, startEl) {
    var resultSet = [];
    if (typeof startEl === "undefined") {
      startEl = document.body;
    } 
  };

  var selectorTypeMatcher = function(selector) {
    console.log(selector)
    if (selector.startsWith(".")) return ("class");
    if (selector.startsWith("#")) return("id");
    if (!selector.startsWith("." ) && selector.includes(".")) return ("tag.class");
    return "tag";
  };

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

  var $ = function(selector) {
    var elements;
    var selectorMatchFunc = matchFunctionMaker(selector);
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
  };
  
  var type = selectorTypeMatcher('#pagetxitle');
  console.log(type)//.toEqual("id");
  var type1 = selectorTypeMatcher('.image');
  console.log(type1)//.toEqual("class");
  var type2 = selectorTypeMatcher('img.thumbnail');
  console.log(type2)//.toEqual("tag.class");
  var type3 = selectorTypeMatcher('div');
  console.log(type3)//.toEqual("tag");

  const element = "da.hola" 
  let aux = element.split(".");
  console.log(aux)

  var selector = "#price";
  var matcher = matchFunctionMaker(selector);
  var sampleDivEl = document.createElement("DIV");
  sampleDivEl.id = "price"; // el elemento tiene tres distintas clases en él
  console.log(matcher(sampleDivEl))//.toEqual(true);
  var selector1 = "#price";
  console.log(selector1)
  var matcher1 = matchFunctionMaker(selector1);
  var sampleDivEl1 = document.createElement("DIV");
  sampleDivEl.id = "logo"; // el elemento tiene tres distintas clases en él
  console.log(matcher1(sampleDivEl1))//.toEqual(false);
//   var selector = ".heading";
//   var matcher = matchFunctionMaker(selector);
//   var sampleDivEl = document.createElement("DIV");
//   sampleDivEl.className = "heading";
//   console.log(matcher(sampleDivEl))//.toEqual(true);
//   var selector = ".heading";
//   var matcher = matchFunctionMaker(selector);
//   var sampleEl = document.createElement("H1");
//   sampleEl.className = "lead heading lightback"; // el elemento tiene tres distintas clases en él
//   console.log(matcher(sampleEl))//.toEqual(true);
//   var selector = ".photo";
//   var matcher = matchFunctionMaker(selector);
//   var sampleEl = document.createElement("H1");
//   sampleEl.className = "photos lightback abstract"; // el elemento tiene tres distintas clases en él
//   console.log(matcher(sampleEl))//.toEqual(false);
//   var selector = 'div';
//   var matcher = matchFunctionMaker(selector);
//   var sampleDivEl = document.createElement("div");
//   console.log(matcher(sampleDivEl))//.toEqual(true);
//   var selector = "img.thumbnail";
//   var matcher = matchFunctionMaker(selector);
//   var sampleDivEl = document.createElement("img");
//   sampleDivEl.className = "thumbnail lead lightback"; // el elemento tiene tres distintas clases
//   console.log(matcher(sampleDivEl))//.toEqual(true);
//   var selector = "img.photo";
//   var matcher = matchFunctionMaker(selector);
//   var sampleEl = document.createElement("div");
//   sampleEl.className = "photos lightback abstract"; // el elemento tiene tres distintas clases
//   console.log(matcher(sampleEl))//.toEqual(false);

  var elements;
  elements = $('body');
  console.log(elements[0].tagName.toLowerCase()).toEqual("body");

//   elements = $('#pagetxitle');
//   console.log(elements.length).toEqual(1);
//   elements = $('#pagetxitle');
//   console.log(elements[0].innerHTML).toEqual("My Photos");
//   elements = $('h2');
//   console.log(elements.length).toEqual(3);
//   elements = $('.photo');
//   console.log(elements.length).toEqual(4);
//   elements = $('div > img');
//   console.log(elements.length).toEqual(7);
//   elements = $('body > img');
//   console.log(elements.length).toEqual(0);
//   elements = $('body p');
//   console.log(elements.length).toEqual(2);
//   elements = $('body img');
//   console.log(elements.length).toEqual(7);