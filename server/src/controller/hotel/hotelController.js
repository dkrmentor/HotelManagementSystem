const addHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, noOfRooms, perDayPrice, Services } = req.body;
    const exHotel = await hotel.findOne({ admin: id });
    if (exHotel) {
      return res.status(400).send("data already exist");
    }
    const newHotel = new Hotel({
      name,
      noOfRooms,
      perDayPrice,
      Services,
      admin: id,
    });
    await Hotel.validate();
    newHotel.save();
    res.status(200).send({
      message: "hotel added",
      success: true,
    });
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

module.exports = { addHotel };
