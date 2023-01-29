const db = require('../models')

//needs to be async/await
async function seed() {
    //get place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //sample content
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    let commentTwo = await db.Comment.create({
        author: 'IGN',
        rant: false,
        stars: 5.0,
        content: 'Was ok.'
    })

    //add comment(s) to place's comment array
    place.comments.push(comment.id, commentTwo.id)

    //save it
    await place.save()

    //exit
    process.exit()
}

seed()