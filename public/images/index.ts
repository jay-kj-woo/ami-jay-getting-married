function importAll(r: __WebpackModuleApi.RequireContext) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item).default;
    // images[index] = r(item).default;
  });
  return images;
  //   return r.keys();
  //   return r.keys().map((item) => r(item));
}

export const images = importAll(require.context('./', false, /\.jpg$/));

// import photo1 from './photo1.jpg';

// export const images = { photo1 };
