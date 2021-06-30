  function numbersonly(e){
      var unicode=e.charCode? e.charCode : e.keyCode
      if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
          if (unicode<48||unicode>57) //if not a number
              return false //disable key press
      }
  }

  function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}