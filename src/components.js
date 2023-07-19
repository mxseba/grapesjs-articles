//import { RequiredPluginOptions } from '.';
export default function(editor, opts) {
  const { Components } = editor;
  const { id, label } = opts;

  const navbarPfx = opts.classPrefix;

  Components.addType(id, {
    extend: 'text',
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: `${navbarPfx} ${navbarPfx}-wrapper` },
        styles: (opts.style || `
          .${navbarPfx} {
            margin: 40px auto 40px auto;
            background-color: rgba(255, 255, 255, 0.78);
            border-radius: 8px;
            padding: 16px 28px 28px 28px
          }

          .${navbarPfx} h2 {
            margin: 10px 0 10px 0;
         
          }

          .${navbarPfx}-wrapper {
            max-width: 950px;
          }
     
        `) + opts.styleAdditional,
       
      },
    }
  });

}