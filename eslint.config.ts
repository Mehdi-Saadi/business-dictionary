import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/max-attributes-per-line': ['error', {
        singleline: 1, // max 1 attribute per line in single-line elements
        multiline: {
          max: 1, // max 1 attribute per line in multi-line elements
        },
      }],
    },
  },
})
