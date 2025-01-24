  import mongoose from "mongoose";

  const holidaySchema = new mongoose.Schema(
    {
      holiday_name: {
        type: String,
        required: true,
      },
      holiday_description: {
        type: String,
      },
      start_date: {
        type: Date,
        required: true,
      },
      end_date: {
        type: Date,
        required: true,
      },
    },
    { timestamps: true }
  );

  const HolidayDb =
    mongoose.models.holidays || mongoose.model("holidays", holidaySchema);

  export default HolidayDb;
