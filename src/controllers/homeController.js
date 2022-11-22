import db from "../models";
import CRUDAccountService from "../services/CRUDAccountService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.Account.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    return res.send(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUDAccount = (req, res) => {
  return res.render("crud-account.ejs");
};

let postCRUDAccount = async (req, res) => {
  let message = await CRUDAccountService.createAccount(req.body);
  return res.send("post crud from server");
};

let displayGetCRUDAccount = async (req, res) => {
  let data = await CRUDAccountService.getAllAccount();
  return res.render("displayCRUDAccount.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUDAccount: getCRUDAccount,
  postCRUDAccount: postCRUDAccount,
  displayGetCRUDAccount: displayGetCRUDAccount,
};
