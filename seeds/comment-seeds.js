const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I feel amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Sleep Good!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Be Easy Friend"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Life is hard, Starburst is soft"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "break me a piece of that kitkat bar"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Leave the door open"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "React up next"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Javascript hurts my brain"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;