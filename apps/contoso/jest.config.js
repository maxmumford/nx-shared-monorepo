module.exports = {
  name: 'contoso',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/contoso',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
