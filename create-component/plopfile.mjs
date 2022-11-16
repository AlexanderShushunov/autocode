import path from 'node:path';

export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'generat component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    },{
      type: 'confirm',
      name: 'className',
      message: 'add className'
    }],
    actions: [{
      type: 'add',
      path: getFullPath('{{name}}', '{{name}}.tsx'),
      templateFile: 'templates/component.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{name}}', 'index.tsx'),
      templateFile: 'templates/index.hbs'
    }, {
      type: 'add',
      path: getFullPath('{{name}}', 'style.css'),
      templateFile: 'templates/style.hbs'
    }]
  });
};

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}