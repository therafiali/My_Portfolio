import { type SchemaTypeDefinition } from 'sanity'

import job from "./job";
import profile from "./profile";
import project from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, job, project],
}
