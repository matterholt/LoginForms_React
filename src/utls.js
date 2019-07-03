// emulates a fake api call

export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "matt" && password === "pass") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
