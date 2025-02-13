/*
      - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/
const names = ['João Grilo', 'Chicó', 'Rosinha'];
let templateNames = '';

for (let i = 0; i < names.length; i++) {
    templateNames += `<li>${names[i]}</li>`;
}

console.log(templateNames);