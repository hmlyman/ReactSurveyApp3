const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
});

UserSchema.statics.authenticate = function (email, password, callback) {
  UserSchema.findOne({ email: email }).exec(function (error, user) {
    if (error) {
      return callback(error);
    } else if (!user) {
      var err = new Error("User not found");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function (error, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, saltRounds, function (err, hashedPassword) {
    if (err) {
      return next(err);
    } else {
      user.password = hashedPassword;
      next();
    }
  });
});

module.exports = mongoose.model("User", UserSchema);
