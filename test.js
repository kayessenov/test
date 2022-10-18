
const { booking } = require("./prisma");
const prisma = require("./prisma");
const dateHelp = require("./utils/date")
const date = require("./utils/date");
const sms = require('./utils/sms')

(async () => {

    let morning = new Date(Date.now() + (24 * 60 * 60 * 1000));
    morning.setHours(6,1,0)
    let night = new Date(Date.now() + (24 * 60 * 60 * 1000));
    night.setHours(29,59,0)
    console.log({morning, night})

    const findByExp = await prisma.booking.findMany({
        where: {
            
            expiration_date: {
                gte: morning,
                lte: night
            }
        },
        select: {
            User: true
        }
    });

    // sms(`Your code for verification is ${findByExp.bookid.name}`, findByExp.User.phoneNumber)
    console.log(findByExp,findByExp.User.phoneNumber)

})()


