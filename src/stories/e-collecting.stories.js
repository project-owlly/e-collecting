import docs from './e-collecting.mdx';
import {withKnobs, text, select} from '@storybook/addon-knobs';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      page: docs,
    },
  },
  decorators: [withKnobs],
};

export const Collect = () => {
  const owllyId = text('Owlly ID', '');

  const content = text('Custom text', '');

  const modeOptions = {
    Dark: 'dark',
    Light: 'light',
  };
  const mode = select('Mode', modeOptions, 'dark');

  return `
  <owlly-collect owllyId="${owllyId}" mode="${mode}" owlly-id="mkro4noxKW9CNGE7mGFE">${content}</owlly-collect>
`;
};
