/* eslint-env meteor */
Package.describe({
  name: 'aldeed:simple-schema',
  summary: 'A simple schema validation object with reactivity. Used by collection2 and autoform.',
  version: '1.13.1',
  git: 'https://github.com/aldeed/meteor-simple-schema.git'
});

Npm.depends({
  'mongo-object': '3.0.1',
  'message-box': '0.2.7',
  'clone': '2.1.2'
});

Package.onUse(function (api) {
  api.versionsFrom(['1.3', '2.3', '3.0-alpha.19']);
  api.use('ecmascript');
  api.mainModule('lib/main.js');
});

Package.onTest(function (api) {
  api.use([
    'lmieulet:meteor-legacy-coverage',
    'lmieulet:meteor-coverage@3.2.0',
    'meteortesting:mocha@2.1.0',
    'meteortesting:browser-tests',
  ])

  api.versionsFrom(['2.3', '2.8.1'])

  api.use([
    'ecmascript',
    'tracker',
    'mongo',
    'aldeed:simple-schema'
  ]);

  api.addFiles([
    'lib/clean/autoValue.tests.js',
    'lib/clean/convertToProperType.tests.js',
    'lib/clean/defaultValue.tests.js',
    'lib/clean/setAutoValues.tests.js',
    'lib/utility/getLastPartOfKey.tests.js',
    'lib/clean.tests.js',
    'lib/expandShorthand.tests.js',
    'lib/humanize.tests.js',
    'lib/SimpleSchema.tests.js',
    'lib/SimpleSchema_allowedValues.tests.js',
    'lib/SimpleSchema_autoValueFunctions.tests.js',
    'lib/SimpleSchema_blackbox.tests.js',
    'lib/SimpleSchema_custom.tests.js',
    'lib/SimpleSchema_definition.tests.js',
    'lib/SimpleSchema_extend.tests.js',
    'lib/SimpleSchema_getObjectSchema.tests.js',
    'lib/SimpleSchema_getQuickTypeForKey.tests.js',
    'lib/SimpleSchema_labels.tests.js',
    'lib/SimpleSchema_max.tests.js',
    'lib/SimpleSchema_messages.tests.js',
    'lib/SimpleSchema_min.tests.js',
    'lib/SimpleSchema_minCount.tests.js',
    'lib/SimpleSchema_namedContext.tests.js',
    'lib/SimpleSchema_omit.tests.js',
    'lib/SimpleSchema_oneOf.tests.js',
    'lib/SimpleSchema_pick.tests.js',
    'lib/SimpleSchema_regEx.tests.js',
    'lib/SimpleSchema_required.tests.js',
    'lib/SimpleSchema_rules.tests.js',
    'lib/SimpleSchema_type.tests.js',
    'lib/reactivity.tests.js'
  ]);
});
