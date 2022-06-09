const { userInfo, user } = require("../../model");

const addInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { hotelid, name, cnic, address, contactNumber, noofPersons, noOfDays } =
      req.body();

    const myUser = await user.findOne({ _id: id });
    if (myUser) {
      const role = myUser.role;

      if (role === "admin") {
        return res
          .status(400)
          .send({ message: "admins can not book hotel", sucess: false });
      }
      return;
    }

    const exUserInfo = await userInfo.findOne({ user: id });
    if (exUserInfo) {
      return res.status(400).send("data already exist");
    }
    const newUserInfo = new userInfo({
      name,
      cnic,
      address,
      contactNumber,
      noofPersons,
      noOfDays,
      user: id,
      hotel:hotelid,
    });
    await userInfo.validate();
    newUserInfo.save();
    res.status(200).send({ message: "data added", success: true });
  } catch (error) {
    if (error) {
      let errors = {};
      // console.log('=================error.errors==================')
      // console.log(error.errors)
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).send(errors);
    }
    res.status(500).send("server error");
  }
};

module.exports = { addInfo };
