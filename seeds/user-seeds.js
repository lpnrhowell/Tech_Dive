const { User } = require('../models');

const userData = [
    {
        username: "kobe",
        twitter: "onelove",
        github: "onelove",
        email: "kobe24@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "mattBarnes",
        twitter: "laker",
        github: "lakers",
        email: "laker@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shaunpaul",
        twitter: "shaunPaul",
        github: "shaunPaul",
        email: "shaunPaul@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "peterParker",
        twitter: "spider",
        github: "spiderman",
        email: "spiderman@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "tania",
        twitter: "tania12",
        github: "tania12",
        email: "tania12@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "rob",
        twitter: "rob-too-steel",
        github: "rob-too-steel",
        email: "steel@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;