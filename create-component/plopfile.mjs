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
      path: '{{name}}/{{name}}.tsx',
      templateFile: 'templates/component.hbs'
    }, {
      type: 'add',
      path: '{{name}}/index.tsx',
      templateFile: 'templates/index.hbs'
    }, {
      type: 'add',
      path: '{{name}}/style.css',
      templateFile: 'templates/style.hbs'
    }]
  });
};