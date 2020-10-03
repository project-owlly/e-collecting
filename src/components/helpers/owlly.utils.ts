import {Owlly} from '../types/owlly';

// TODO: Should we catch even more the errors or it's ok to display no error and just some stacktrace?

export const loadOwlly = async (id: string): Promise<Owlly | undefined> => {
  try {
    if (!id || id === undefined || id === '') {
      console.error('Owlly information cannot be retrieved for an undefined id.');
      return undefined;
    }

    // TODO: Do we want to hardcode this? Means we have to spread breaking changes if we move the infrastructue...
    const url: string = `https://europe-west6-project-owlly.cloudfunctions.net/owlly/${id}`;

    const response: Response = await fetch(url);

    if (!response || !response.ok) {
      console.error(`Owlly response for Id "${id}" is not valid.`);
      return;
    }

    const owlly: Owlly = await response.json();

    return owlly;
  } catch (err) {
    console.error(`Owlly information for Id "${id}" cannot be loaded.`);
    return undefined;
  }
};

export function injectCSS(id: string, src: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (!document) {
      resolve();
      return;
    }

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
