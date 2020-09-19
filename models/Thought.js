const { Schema, model, Types } = require('mongoose'); //Import from the library 
const moment = require('moment');


const reactionSchema = new Schema(  
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id:false
    }
);


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true,
        },      
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            //virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total reactions of thought 
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



// create Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Pizza model
module.exports = Thought;
