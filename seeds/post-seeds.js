const { Post } = require('../models');

const postData = [
    {
        title: "Don't call my phone",
        post_content: "I eat once a day, and it hurts me",
        user_id: 3
    },
    {
        title: "I live to work",
        post_content: "This can't be life",
        user_id: 1
    },
    {
        title: "I dream about money",
        post_content: "I'm destined to be rich",
        user_id: 2

    },
    {
        title: "My fingers hurt",
        post_content: "My boss don't care",
        user_id: 5
    },
    {
        title: "run, eat, run",
        post_content: "what a waste of time",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;