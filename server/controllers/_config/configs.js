//Configs to the frontend side. Anything that Vue needs to know from the environment comes from here
const packageInfo = require("../../package.json");
const Signup = require("../../models/signup.js");

exports.getConfigs = async function (req, res, next) {
  try {

    const version = packageInfo.version;
     const signupCount = await Signup.countDocuments();

    //Key Vue environmental variables
    const payload = {
      VERSION:version,
      NODE_ENV: process.env.NODE_ENV,
      API_URL: process.env.API_URL,
      SIGNUP_COUNT: signupCount
    };
    // Send the counts as JSON response
    res.status(200).json({
      message: "Here are the configuration variables and statistics from the server side",
      payload: payload,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error returning models",
      payload: null,
    });
  }
};
