
const researcher = `
type researcher {
    id: Int
    affiliation: String
    citations: String
    hindex: String
    index: String
    author: String
    number_of_papers: Int
    research_interests: String
    publications: [publications]
}
`;

export default researcher;
