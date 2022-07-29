const chk = document.getElementById('chk');
const html = document.querySelector('html');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, '--bg'),
  bgPanel: getStyle(html, '--bg-panel'),
  colorHeadings: getStyle(html, '--color-headings'),
  colorText: getStyle(html, '--color-text'),
};

const darkMode = {
  bg: '#333333',
  bgPanel: '#434343',
  colorHeadings: '#fafafa',
  colorText: '#fafafa',
};

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

chk.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
