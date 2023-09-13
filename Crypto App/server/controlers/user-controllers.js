import User from "../models/user.js";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({
      message: "No Users Found",
    });
  }
  return res.status(200).json({ users });
};

export const postUsers = async (req, res) => {
  const { id, name, createdOn, gender, dob, city, state, pincode, modifiedOn } =
    req.body;
  let existingUsers;
  try {
    existingUsers = await User.findOne({ id });
  } catch (err) {
    console.log(err);
  }
  if (existingUsers) {
    return res.status(400).json({
      message: "User is alredy created!",
    });
  }

  const newUsers = new User({
    id: id,
    name: name,
    createdOn: createdOn,
    gender: gender,
    dob: dob,
    city: city,
    state: state,
    pincode: pincode,
    modifiedOn: modifiedOn,
  });
  try {
    await newUsers.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    message: "new user created",
  });
};

export const deleteUsers = async (req, res) => {
  const id = req.params.id;
  let usersId;
  try {
    usersId = await id.findOne({ id });
  } catch (err) {
    console.log(err);
  }
  if (!usersId) {
    res.status(400).json({
      message: "No user Found",
    });
  }
  try {
    await User.deleteOne({ id });
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    message: "User deleted",
  });
};

export const updateUser = async (req, res) => {
  const upUser = req.params.id;
  const { id, name, createdOn, gender, dob, city, state, pincode, modifiedOn } =
    req.body;
  let User;
  try {
    User = await User.findByUpdate(id, {
      id,
      name,
      createdOn,
      gender,
      dob,
      city,
      state,
      pincode,
      modifiedOn,
    });
  } catch (err) {
    console.log(err);
  }
  if (!User) {
    res.status(400).json({
      message: "No user Found",
    });
  }
};
