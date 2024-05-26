
export default {

parsedInfo : (info)=>{;

   // First, check if the input is a string containing only digits via regex.
   const isNumeric = /^[0-9]+$/.test(info);
    
   // If it is not a numeric string or is negative or has more than 6 digits, returns false.
   if (!isNumeric || parseInt(info, 10) < 0 || info.length > 6) {
       return false;
   }

   const infoP = parseInt(info, 10);
   return infoP;
},


 gcd : (a, b) => {
  while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
},
};