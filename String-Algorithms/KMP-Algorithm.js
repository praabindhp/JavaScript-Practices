function KMPSearch(pat, txt) {
    let M = pat.length;
    let N = txt.length;
    let lps = new Array(M).fill(0);
    let j = 0;
    computeLPSArray(pat, M, lps);
    let i = 0;
    
    while (i < N) {
      if (pat[j] === txt[i]) {
        j++;
        i++;
      }
      if (j === M) {
        console.log("Found Pattern At Index " + (i - j));
        j = lps[j - 1];
      }
      else if (i < N && pat[j] !== txt[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        }
        else {
          i = i + 1;
        }
      }
    }
  }
  
  function computeLPSArray(pat, M, lps) {
    let len = 0;
    let i = 1;
    lps[0] = 0;
    while (i < M) {
      if (pat[i] === pat[len]) {
        len++;
        lps[i] = len;
        i++;
      }
      else {
        if (len !== 0) {
          len = lps[len - 1];
        }
        else {
          lps[i] = 0;
          i++;
        }
      }
    }
  }

console.log(KMPSearch("MAN", 'MANHATMAN'))