const fs = require('fs')

const themes = require('./themeVariables');

try {
  const template = fs.readFileSync('src/base_theme.json', 'utf8')
  
  themes.forEach(theme => {
    themeJson = template;
    Object.entries(theme.vars).forEach(([name, value]) => {
      const regex = new RegExp(`@${name}`, 'gi')
      themeJson = themeJson.replace(regex, `"${value}"`);
    })

    
    fs.mkdirSync('dist/themes', { recursive: true });
    fs.writeFileSync(`dist/themes/Pyjamas-${theme.name}.json`, themeJson);
  });
} catch (err) {
  console.error(err)
}