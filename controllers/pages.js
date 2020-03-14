class PagesController { 
    index(req, res) {
        res.render("index", { title: "Welcome!" });
    }
}

var pageController = new PagesController();
module.exports = pageController;