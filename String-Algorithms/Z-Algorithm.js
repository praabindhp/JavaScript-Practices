function z_algorithm(text, pattern) {
    let concat = pattern + "$" + text;
    let z = new Array(concat.length);

    z[0] = concat.length;

    let left = 0, right = 0;

    for (let i = 1; i < concat.length; i++) {
      if (i > right) {
        left = right = i;

        while (right < concat.length && concat[right] === concat[right - left]) {
          right++;
        }

        z[i] = right - left;
        right--;

      } else {
        let k = i - left;

        if (z[k] < right - i + 1) {
          z[i] = z[k];
        } else {
          left = i;
          while (right < concat.length && concat[right] === concat[right - left]) {
            right++;
          }

          z[i] = right - left;
          right--;
        }
      }
    }
  
    let matches = [];
    for (let i = 0; i < z.length; i++) {
      if (z[i] === pattern.length) {
        matches.push(i - pattern.length - 1);
      }
    }
    return matches;
  }

text = 'gnfwkqxlfwespfhqml';
pattern = 'fwes';
console.log(z_algorithm(text, pattern));