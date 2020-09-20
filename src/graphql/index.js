import { makeExecutableSchema } from 'graphql-tools';
import patent from './queries';
import {typeDefs} from './types';

const Schema = makeExecutableSchema({ typeDefs, resolvers: patent });
export { Schema };
