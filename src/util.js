export function checkPassword(pass, verify){
  pass = pass.trim();
  verify = verify.trim();

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  let errStr = '';
  
  if(pass !== verify) errorStr += "passwords don't match ";
  if(pass.includes(" ")) errStr += "No spaces allowed! ";
  if(pass.length < 8) errStr += "Min 8 characters";
  if(!specialChars.test(pass)) errStr += "Special character";

  return errStr? {error: errStr, status: false}: {status: true};
};

export function capitalize(word){
  console.log(word);
  word = word.split("");
  word[0] = word[0].toUpperCase();
  return word.join("");
}