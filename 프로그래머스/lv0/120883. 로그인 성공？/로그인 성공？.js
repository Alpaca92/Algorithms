function solution(id_pw, db) {
  const [id, pw] = id_pw;
  let result = "fail";

  for(let i = 0; i < db.length; ++i) {
    const [dbid, dbpw] = db[i];
    if (id !== dbid) continue;
      
    if (pw === dbpw) {
        result = "login";
    } else {
        result = "wrong pw";
    }
  }
    
  return result;
}