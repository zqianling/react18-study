export function wrapPromise(promise) {
  let status = "pending";
  let result;
  const subspender = promise
    .then((resolve) => {
      result = resolve;
      status = "success";
    })
    .catch((error) => {
      status = "error";
      result = error;
    });
  return {
    read() {
      if (status === "pending") {
        throw subspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
