/*
    controller
*/ 
const contactezMoi = (req, res) => {
    res.render(
        'contactezMoi', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = contactezMoi;