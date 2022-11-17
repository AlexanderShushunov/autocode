type ImageFormat = 'webp' | 'avif';

let cache: Array<ImageFormat> | undefined = undefined;

export async function detectImageFormatSupport(): Promise<Array<ImageFormat>> {
  if (cache !== undefined) {
    return cache;
  }
  return Promise.all(
    [
      {
        type: 'webp' as const,
        url: 'data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A',
      },
      {
        type: 'avif' as const,
        url: 'data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAPFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEVAAEAAAAeAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAHBpcHJwAAAAUWlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAABBwYXNwAAAAAQAAAAEAAAAVYXYxQ4EgAAAKBzgABpAQ0AIAAAAQcGl4aQAAAAADCAgIAAAAF2lwbWEAAAAAAAAAAQABBAECg4QAAAAmbWRhdAoHOAAGkBDQAjITFkAAAEgAAAB5TNw9UxdXU6F6oA == ',
      },
    ].map(async ({ url, type }) => {
      try {
        await defineImage(url);
        return type;
      } catch (e) {
        return undefined;
      }
    })
  )
    .then((formats) => formats.filter((format): format is ImageFormat => format !== undefined))
    .then((formats) => {
      cache = formats;
      return formats;
    });
}

async function defineImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onerror = reject;
    img.onload = resolve;
  });
}
