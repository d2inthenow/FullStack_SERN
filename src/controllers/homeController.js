import db from "../models/index.js";
const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log("-----------------")
        console.log(data)
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log("Error", error);

    }

}
const getAboutPage = (req, res) => {
    return res.render("test/about.ejs");
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}