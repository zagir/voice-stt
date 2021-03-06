// Dependencies
const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema
const voiceSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
      default: 'google',
      enum: ['wit', 'google', 'ashmanov'],
    },
    duration: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    text: String,
    textWithTimecodes: [[String]],
  },
  { timestamps: true }
)

// Exports
module.exports = mongoose.model('voice', voiceSchema)
