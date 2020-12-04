export function injectCSS(id: string, src: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve('CSS already loaded.');
      return;
    }

    const link = document.createElement('link');
    link.id = id;
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', src);

    link.addEventListener('load', () => resolve('CSS loaded.'));

    link.addEventListener('error', () => reject('Error loading css.'));
    link.addEventListener('abort', () => reject('CSS loading aborted.'));
    document.head.appendChild(link);
  });
}
