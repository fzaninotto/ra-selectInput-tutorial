import fakeRestProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

const restProvider = fakeRestProvider(generateData(), true);

export const dataProvider = new Proxy(restProvider, {
  get: (target, name) => (resource, params) => {
    if (typeof name === "symbol" || name === "then") {
      return;
    }
    return new Promise((resolve) =>
      setTimeout(() => resolve(restProvider[name](resource, params)), 1500)
    );
  },
});
