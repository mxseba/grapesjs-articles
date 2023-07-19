import loadBlocks from './blocks';
import loadComponents from './components';

const plugin = (editor, opts = {}) => {
   const options = {
      id: 'articles',
      label: 'Articles',
      block: {},
      style: '',
      styleAdditional: '',
      classPrefix: 'articles',
      ...opts,
   };

  loadBlocks(editor, options);
  loadComponents(editor, options);
};

export default plugin;