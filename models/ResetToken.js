const { default: mongoose } = require("mongoose");

const ResetTokenSchema = new mongoose.Schema({
  email: String,
  token: String,
  expiresAt: Date,
});

export default mongoose.models.ResetToken ||
  mongoose.model("ResetToken", ResetTokenSchema);
