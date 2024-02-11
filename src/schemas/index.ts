import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import post from './post'
import about from './about'
import agreements from './agreements'
import author from './author'
import campaigns from './campaigns'
import category from './category'
import home from './home'
import reps from './reps'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    about,
    agreements,
    author,
    campaigns,
    category,
    home,
    reps,
  ],
}
