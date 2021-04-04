# calculadora-js [![Build Status](https://travis-ci.org/FabianaTavares/calculadora-js.svg?branch=main)](https://travis-ci.org/FabianaTavares/calculadora-js)

calculadora-js é um projeto pratico do curso de testes unitários de js do udemy

### Passos para instalação e configuração Jasmine / Karma / Travis

Siga os passos para a Instação:

1. Jasmine:

```
npm install --save-dev jasmine
```

```
jasmine init
```

2. Karma:

```
npm install --save-dev karma
npm install --save-dev karma-jasmine
```

```
karma init karma.conf.js
```

- Responda as questões conforme segue
  2.1. jasmine
  2.2. no
  2.3. Chrome
  2.4. spec/\**/*Spec.js
  2.5. pressione ENTER
  2.6. yes

3. Integrando Browserify com o Karma:

```
npm install --save-dev browserify
npm install --save-dev watchify
npm install --save-dev karma-browserify
```

- No arquivo karma.conf.js configure os passos abaixo:
  3.1 frameworks: ['jasmine', 'browserify'],
  3.2 files: [
  'spec/**/*Spec.js',
  'spec/helpers/**/SpecHelper.js'
  ],
  3.3 preprocessors: {
  'spec/\**/*Spec.js':['browserify'],
  },

- integrando os scripts de testes no package.json edite na entrada scripts:

```
  "scripts": {
    "test-jasmine": "jasmine",
    "test-dev": "karma start",
    "test": "./node_modules/.bin/karma start --single-run"
  },
```

- execute o comando:

```
npm run test-dev
```

3. na raiz do projeto crie o arquivo .travis.yml e cole o codigo abaixo:

```
language: node_js
node_js:
  - 'stable'
addons:
  chrome: stable
cache:
  directories:
    - 'node_modules'
before_install:
  - export DISPLAY=:99.0
services:
  - xvfb
script:
  - npm install
  - npm test
```
