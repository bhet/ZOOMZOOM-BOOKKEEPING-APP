
export function sumForcash(item){
  let total = 0;
  for(let key in item){
    if(typeof item[key] === "number"){
      total += item[key]
    }
  }
  return total
}
