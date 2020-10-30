import docs from './e-collecting.mdx';

export default {
  title: 'Components/E-Collecting Button',
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes: {
    'owlly-id': {control: 'text'},
    'Custom text': {control: 'text'},
    mode: {
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
  },
};

export const Button = (args) => {
  return `
  <owlly-collect mode="${args.mode}" owlly-id="${args['owlly-id']}">${args['Custom text']}</owlly-collect>
`;
};

Button.args = {
  'owlly-id': 'vrrYZoolx2XSy23RW63f',
  'Custom text': 'unterschreiben',
  mode: 'dark',
};
