
export function checkPassword(pass, verify){

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const upperLower = /[A-Z][a-z]/;
  const num = /[0-9]/;

  let errStr = '';
  
  if(pass !== verify) errStr += "passwords don't match ";
  if(!upperLower.test(pass)) errStr += "Needs upper and lower casing "
  if(!num.test(pass)) errStr += "Needs number"
  if(pass.includes(" ")) errStr += "No spaces allowed! ";
  if(pass.length < 8) errStr += "Min 8 characters ";
  if(!specialChars.test(pass)) errStr += "Needs special character ";

  return errStr? {error: errStr, status: false}: {status: true};
}

export function capitalize(str){
  if(!str) return null;
  str = str.toLowerCase();

  if(str.split(" ").length > 1) {
    let wordArr = str.split(" ");

    wordArr = wordArr.map(word => {
      const strArr = word.split("");
      strArr.unshift(strArr.shift().toUpperCase());
      return strArr.join("");
    });

    return wordArr.join(" ");
  }else{
    const strArr = str.split("");
    strArr.unshift(strArr.shift().toUpperCase());

    return strArr.join("");
  }
}

