import patents from './definitions/patents';
const query = `
	type Query {
		patent: [patents]
	}
`;

export const typeDefs = [patents,query];
