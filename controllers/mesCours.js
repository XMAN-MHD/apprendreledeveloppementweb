/*
    controller
*/ 
const mesCours = (req, res) => {
    res.render(
        'mesCours', 
    );
}
/*
    give access to index controller
*/ 
module.exports = mesCours;