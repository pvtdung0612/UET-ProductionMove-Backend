import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

let checkAccountUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let account = await db.Account.findOne({
        where: { username: username },
      });

      if (account) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let handleAccountLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let resolveData = {};
      let isExist = await checkAccountUsername(username);
      if (isExist) {
        // Username exxist
        let account = await db.Account.findOne({
          where: { username: username },
          attributes: [
            "username",
            "password",
            "roleKey",
            "workplaceID",
            "image",
          ],
          raw: true,
        });

        if (account) {
          // Account Exist
          let isPass = await bcrypt.compareSync(password, account.password);
          if (isPass) {
            resolveData.errCode = 0;
            resolveData.message = "Login success";
            delete account.password;
            resolveData.account = account;
          } else {
            resolveData.errCode = 3;
            resolveData.message = "Password is not correct";
          }
        } else {
          // Account is not Exist
          resolveData.errCode = 1;
          resolveData.message = "Account is not found";
        }
      } else {
        // Username is not exxist
        resolveData.errCode = 1;
        resolveData.message =
          "Your's Username is not exist. Please try other Username";
      }
      resolve(resolveData);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAccountLogin: handleAccountLogin,
};
