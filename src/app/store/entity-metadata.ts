import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  User: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { User: 'users' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
