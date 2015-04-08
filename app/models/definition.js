
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Definition schema
 */

var DefinitionSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  type: { type: String, default: '' },
  interactionType: { type: String, default: '' },
  correctResponsesPattern: { type: Array, default: [] },
});