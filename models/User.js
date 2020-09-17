const { Schema, model } = require('mongoose'); //Import from the library 


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'  //referent to Thought model
            }
        ],
        friends: [ 
            {
                type: Schema.Types.ObjectId,
                ref: 'User'     //self-reference
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get total count of friends 
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});



// create User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
