function isOpposite(s1, s2){
  //coding here...
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;
  
  return s1.split('').every((char, i) => {
    return char !== s2[i] && char.toLowerCase() === s2[i].toLowerCase();
  });
}
