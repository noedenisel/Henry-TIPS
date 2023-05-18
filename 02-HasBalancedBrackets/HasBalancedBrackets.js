// * Fuerza bruta
// function HasBalancedBrackets(string) {
//   //Tu código aquí:
//   console.log(string);
  
//   const validOpeningBrackets = ['{','[','(']
//   const validClosedBrackets = ['}',']',')']

//   const openBrackets = [];

//   for (let i = 0; i < string.length; i++) {
//       const bracket = string[i]
//       console.log(bracket);
//       if(validOpeningBrackets.includes(bracket)){
//         console.log(bracket);
//         openBrackets.push(bracket)
//       }
//       if(validClosedBrackets.includes(bracket)){
//         console.log(bracket);
//         const i = validClosedBrackets.indexOf(bracket)
//         console.log(i);
//         const bracketBrother = validOpeningBrackets[i]
//         console.log(bracketBrother);
//         console.log(openBrackets);
//         const lastOpen = openBrackets[openBrackets.length-1]
//         if(lastOpen === bracketBrother){
//           openBrackets.pop()
//         }
//         else return false
//       }

    
//   }
//   if(!openBrackets.length) return true
//   return false
// }

// * Segunda Opción -> con objeto...
// function HasBalancedBrackets(string){
//   const openBrackets = [];
//   //diccionario:
//   const validBrackets = {
//     '{':'}',
//     '[':']',
//     '(':')'
//   }
//   for (let i = 0; i < string.length; i++) {
//     const bracket = string[i];;
//     if(validBrackets[bracket]) openBrackets.push(bracket)
//     else{
//       const lastOpen = openBrackets[openBrackets.length-1]
//       if(validBrackets[lastOpen] === bracket) openBrackets.pop()
//       else return false
//     }
//   }
//   if(!openBrackets.length) return true
//     return false
// }

// * Tercera Opción -> for..of
function HasBalancedBrackets(string){
    const openBrackets = [];
  //diccionario:
  const validBrackets = {
    '{':'}',
    '[':']',
    '(':')'
  }
  for (const bracket of string) {
    if(validBrackets[bracket]) openBrackets.push(bracket)
    else if(validBrackets[openBrackets.pop()] !== bracket) return false;
  }
  // return openBrackets.length ? false : true
  return !openBrackets.length
}

// ? Complejidad O(n)


  console.log(HasBalancedBrackets("{[]()}"))//(true);
  console.log(HasBalancedBrackets("{[(])}"))//(false);
  console.log(HasBalancedBrackets("{[("))//(false);
  console.log(HasBalancedBrackets("{[([{()[]{}}])]}"))//(true);
  console.log(HasBalancedBrackets("{[]}}"))//(false);


module.exports = HasBalancedBrackets;
