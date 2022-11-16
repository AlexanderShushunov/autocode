export default function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'generat component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    }],
    actions: [{
      type: 'add',
      path: '{{name}}.tsx',
      templateFile: 'templates/component.hbs'
    }]
  });
};