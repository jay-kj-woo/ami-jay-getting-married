interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticImageDataObject {
  [index: string]: StaticImageData;
}
function importAll(moduleContext: __WebpackModuleApi.RequireContext) {
  let images: StaticImageDataObject = {};
  moduleContext.keys().forEach((item) => {
    images[item.replace('./', '')] = moduleContext(item).default;
  });
  return images;
}

export const images = importAll(require.context('./', false, /\.jpg$/));
