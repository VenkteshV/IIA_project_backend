import patent_inventors from './definitions/patent_inventors';
import researcher from './definitions/researcher';
import publications from './definitions/publications';
import patents from './definitions/patents';
const query = `
	type Query {
		patent_inventors(startIndex: Int, endIndex: Int): [patent_inventors]
		researcher(startIndex: Int, endIndex: Int): [researcher]
	}
`;

export const typeDefs = [patent_inventors,researcher,publications,patents,query];
