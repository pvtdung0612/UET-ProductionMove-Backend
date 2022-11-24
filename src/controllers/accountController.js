import accountService from "../services/accountService";

let handleLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }

  let resolveData = await accountService.handleAccountLogin(username, password);

  return res.status(200).json({
    errCode: resolveData.errCode,
    message: resolveData.message,
    data: resolveData.account ? resolveData.account : {},
  });
};

module.exports = {
  handleLogin: handleLogin,
};
