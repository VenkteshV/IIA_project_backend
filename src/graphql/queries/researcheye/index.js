import { GraphQLString, GraphQLNonNull } from 'graphql';
import models from '../../../models';
import _ from 'lodash';
models.researcher.hasMany(models.publications, {foreignKey: 'author_id', sourceKey: 'id', as :"publications"});
models.publications.belongsTo(models.researcher, {foreignKey: 'author_id', constraints:false,targetKey: 'id' ,as :"researcher"})
models.patent_inventors.hasMany(models.patents, {foreignKey: 'author_id', sourceKey: 'id', as :"patents"});
models.patents.belongsTo(models.researcher, {foreignKey: 'author_id', constraints:false,targetKey: 'id' ,as :"patent_inventors"})

export default {
Query: {
  patent_inventors :async(source,root, args,ast) => {
    var attributes = ast.fieldNodes[0].selectionSet.selections.map(selection => selection.name.value);
    let filteredargs = _.without(attributes,"patents")    

    const results = await models.patent_inventors.findAll({attributes:filteredargs,offset:root.startIndex,limit: root.endIndex})
    return results;
  },
  researcher : async(source,root,args,ast) => {
    let attributes = ast.fieldNodes[0].selectionSet.selections.map(selection => selection.name.value);
    let filteredargs = _.without(attributes,"publications")    
    let response = await models.researcher.findAll({attributes: filteredargs, as:"researcher",offset:root.startIndex,limit: root.endIndex});
    // ,include: [{model:models.publications, as: "publications",attributes: ["titles"],raw:true}
    // ]
    return response.slice(root.startIndex,root.endIndex)

  }

  // publications: async(root,args) => {
  //   let args = ast.selectionSet.selections.map(selection => selection.name.value);
  //   console.log("args",args)
  //   let response = await models.researcher.findAll({attributes: args});
  //   return response.slice(args.startIndex,args.endIndex)
  // }
},
researcher :{
  publications: (researcher,root,args,ast)  => {
    return models.publications.findAll({where: {
      author_id: researcher.dataValues.id
  
    }})
  
  }
  }
,
patent_inventors: {
    patents :async(patent_inventors,root,args,ast) => {
    let domain_unnested = _.map(domain, (d) => d.dataValues)
    var domain = await models.patent_classification.findAll({ attributes:['title','id']})
    let patentResult = await models.patents.findAll({where: {author_id: patent_inventors.dataValues.id}})
     const response = _.map(patentResult, (patent) => {
      const class_code = patent["code"].split(".")[1].length >1 ? patent["code"] : patent["code"].split(".")[0]
      const code  = _.find(domain_unnested, {'id':class_code})
      patent["code"] = _.get(code,"title","") 
      return patent
     })

    return response
    }
  }

};
