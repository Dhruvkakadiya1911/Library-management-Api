/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    bookName: {
      type: "string",
      required: true
    },

    Price: {
      type: "number",
      required: true
    },

    publishYear: {
      type: "string",
      required: true
    },

    bookImage: {
      type: "string",
      required: true
    },
    //here use one to many association one category as many book
    categories:{
      model:"category",
      required:true
    },

    //here use one to many association one author as many book
    authors:{
      model:"author",
      required:true
    },
    
    //here use one to many association one book can issue or return many user
    users:{
      model:"user",
      required:true
    },

    isIssue:{
      type:"boolean",
      defaultsTo:false,
    },

    isReturn:{
      type:"boolean",
      defaultsTo:false,
    }

  },

};

