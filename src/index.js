
  module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
   
    let rules = /\(\)|\|\||\[\]|\{\}|[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;
    while(str = str.replace(rules,'')){ 
      if(arr == 0) return true; 
      if(str.length == arr) return false;
      arr = str.length; 
    }
    return true;
  } 




  