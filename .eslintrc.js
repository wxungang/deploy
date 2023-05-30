module.exports = {
  root: true,
  parser: 'babel-eslint', //not for vue
  parserOptions: {
    // "parser": "babel-eslint",//for vue put in here!
    ecmaVersion: 6,
    sourceType: 'module',
    'impliedStrict ': true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    exports: false,
    module: true,
    process: false,
    require: true,
    global: true,
    __dirname: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'react'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true, //只检查 声明 flow 语法的文件
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '^0.92.0', // Flow version
    },
  },
  rules: {
    //base rules
    'no-labels': 2, //
    'no-multi-str': 2, //多行字符串
    'no-sequences': 2, //逗号运算符 var c=a,b;
    // 'no-promise-executor-return': 2, // eslint > 7.3.0
    //Best Practices
    'no-alert': 2,
    'no-empty-function': 2,
    'default-case': 2,
    'no-caller': 2,
    'no-eval': 2,
    'no-eq-null': 2,
    'no-unused-vars': 2, //未使用的变量
    'no-undef': 2, // 禁止使用未定义的变量
    'eqeqeq': 2, // ===
    'block-scoped-var': 2, //块级内禁止使用var
    'curly': 2, // if(){ }
    //ES6
    'no-var': 2, //使用let const
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    //Stylistic Issues
    'no-plusplus': 2, // ++ --
    'no-mixed-operators': [
      'error',
      {
        // 指定检测 哪些不能 同层级 混用
        groups: [
          // ["+", "-", "*", "/", "%", "**"],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'max-lines-per-function': ['warn', { max: 66, skipBlankLines: true, skipComments: true }], // 函数最大行数。 业务page  的 render 函数容易过大
    //flow rules
    'flowtype/define-flow-type': 2, // Marks Flow type identifiers as defined. Used to suppress no-undef reporting of type identifiers.
    'flowtype/use-flow-type': 2, // Marks Flow type alias declarations as used. Used to suppress no-unused-vars errors that are triggered by type aliases.
    'flowtype/no-weak-types': [
      2,
      {
        // 禁用弱类型
        any: false,
        Object: true,
        Function: true,
      },
    ],
    'flowtype/require-parameter-type': [
      2, //强制 参数类型
      {
        // 也可以设置 true 忽视所有的 箭头函数
        excludeArrowFunctions: 'expressionsOnly',
      },
    ],
    'flowtype/require-return-type': [
      2,
      'always',
      {
        annotateUndefined: 'ignore',
        excludeArrowFunctions: 'expressionsOnly',
        excludeMatching: ['constructor', 'componentDidMount', 'componentDidUpdate', 'componentWillReceiveProps', 'componentWillUnmount'],
      },
    ],
    'flowtype/no-types-missing-file-annotation': 2, //未声明flow的文件 禁止使用类型
    //react rules
    // 禁止 使用索引 key
    'react/no-array-index-key': 2,
    'react/no-unsafe': 2,
    'react/no-unused-state': 2,
    'react/no-unused-prop-types': 2,
  },
};
