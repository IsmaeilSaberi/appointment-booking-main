// Api for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      fees,
      experience,
      address,
      about,
    } = req.body;
    const imageFile = req.file;
  } catch (error) {}
};

export { addDoctor };
