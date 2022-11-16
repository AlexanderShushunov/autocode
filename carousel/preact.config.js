import 'dotenv/config';

export default (config) => {
  addAvifSupport(config);
};

function addAvifSupport(config) {
  config.module.rules.push({ test: /\.avif$/, loader: ['file-loader'] });
}
