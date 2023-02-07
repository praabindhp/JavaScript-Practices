let i = 0;

function count() {

  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 != 0);

  if (i < 1e6) {
    queueMicrotask(count);
  }

}

count();