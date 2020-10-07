
const patent_inventors = `
	type patent_inventors {
		id:Int
		country: String!
		affliation: String
		inventor: String
		count_of_patents: String
		patents: [patents]
	}
	`;

export default patent_inventors;
