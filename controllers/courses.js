/*
    controller
*/ 
const courses = (req, res) => {
    res.render(
        'courses', 
    );
}
/*
    give access to index controller
*/ 
module.exports = courses;