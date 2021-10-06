export function* generateNewId() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  