module.exports = {
  presets: ['nano-react-app'],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragmaFrag: 'React.Fragment'
      }
    ]
  ]
};
