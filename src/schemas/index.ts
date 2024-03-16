import { SchemaTypeDefinition } from 'sanity'

import about from './about'
import agreements from './agreements'
import author from './author'
import blockContent from './blockContent'
import home from './home'
import post from './post'
import reps from './reps'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, about, agreements, author, home, reps],
}
