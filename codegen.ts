import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.spacex.land/graphql/',
  documents: 'src/graphql/**/*.ts',
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: ['/* eslint-disable */', '// @ts-nocheck']
          }
        }
      ],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
