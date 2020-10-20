import docs from './e-collecting.mdx';
import {withKnobs, text, select} from '@storybook/addon-knobs';

export default {
  title: 'Components/E-Collecting Button',
  parameters: {
    docs: {
      page: docs,
    },
  },
  decorators: [withKnobs],
};

export const Button = () => {
  const owllyId = text('Owlly ID', 'vrrYZoolx2XSy23RW63f');

  const content = text('Custom text', 'unterschreiben');

  const modeOptions = {
    Dark: 'dark',
    Light: 'light',
  };
  const mode = select('Mode', modeOptions, 'dark');

  return `
  <owlly-collect owllyId="${owllyId}" mode="${mode}" owlly-id="vrrYZoolx2XSy23RW63f">${content}</owlly-collect>
`;
};
