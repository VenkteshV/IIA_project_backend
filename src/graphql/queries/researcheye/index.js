import { GraphQLString, GraphQLNonNull } from 'graphql';
import models from '../../../models';
export default {
Query: {
  patent :(root, args) => {
    return models.patents.findAll({attributes:['country','affliation','inventor','title_localized','count_of_patents','code']});
  },
}
};
