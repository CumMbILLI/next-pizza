export function wrapPromise<T>(promise: Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  const suspender = promise.then(
    (res: T) => {
      status = "success";
      result = res;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read(): T {
      if (status === "pending") {
        // Бросаем Promise, чтобы Suspense мог отобразить fallback
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}
