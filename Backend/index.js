import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
try {
  mongoose
    .connect(
      "mongodb+srv://palashshah110:palashshah110@cluster0.p3an1h3.mongodb.net/minor2023?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log("DB Connected"))
    .catch((err) => console.log("Error: ", err));
} catch (error) {
  console.log("DB not Connected");
}
const feedbackSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  feedbackmsg: { type: String },
});
const addScholarshipSchema = mongoose.Schema({
  SchemeName: { type: String },
  Description:{type:String},
  ClosingDate: { type: String },
  Institute: { type: String },
  WebsiteLink: { type: String },
});

const addprivatescholarshipSchema = mongoose.Schema({
  SchemeName: { type: String },
  Description:{type:String},
  ClosingDate: { type: String },
  InstituteVerification: { type: String },
  WebsiteLink: { type: String },
});

const addMinorityScholarshipSchema = mongoose.Schema({
  SchemeName: { type: String },
  Description:{type:String},
  ClosingDate: { type: String },
  InstituteVerification: { type: String },
  WebsiteLink: { type: String },
});
const addMpScholarshipSchema = mongoose.Schema({
  SchemeName: { type: String },
  Description:{type:String},
  ClosingDate: { type: String },
  InstituteVerification: { type: String },
  WebsiteLink: { type: String },
});
const addDisabilitlesScholarshipSchema = mongoose.Schema({
  SchemeName: { type: String },
  Description:{type:String},
  ClosingDate: { type: String },
  InstituteVerification: { type: String },
  WebsiteLink: { type: String },
});

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  dateofbirth: {
    type: String,
  },
  email: {
    type: String,
  },
  state: {
    type: String,
  },
  ScholarshipCategory: {
    type: String,
  },
  SchemeType: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Mobile: {
    type: String,
  },
  BankIfscCode: {
    type: String,
  },
  BankAccount: {
    type: String,
  },
  password: {
    type: String,
  },
  applicationId: {
    type: String,
  },
});

const User = new mongoose.model("users", userSchema);
const feedback = new mongoose.model("feedback", feedbackSchema);
const addScholarship = new mongoose.model("scholarship", addScholarshipSchema);
const addprivatescholarship = new mongoose.model("addprivatescholarship", addprivatescholarshipSchema);
const addMinorityScholarship = new mongoose.model("addMinorityScholarship", addMinorityScholarshipSchema);
const addMpScholarship = new mongoose.model("addMpScholarship", addMpScholarshipSchema);
const addDisabilitlesScholarship = new mongoose.model("addDisabilitlesScholarship", addDisabilitlesScholarshipSchema);

app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("I am here");
});

app.get("/userDetails", (req, res) => {
  User.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});
app.get("/getFeedback", (req, res) => {
  feedback.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.get("/getportalscholarship", (req, res) => {
  addScholarship.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.get("/getprivatescholarship", (req, res) => {
  addprivatescholarship.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.get("/getminortyscholarship", (req, res) => {
  addMinorityScholarship.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.get("/getmpscholarship", (req, res) => {
  addMpScholarship.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.get("/getdisabiltiesscholarship", (req, res) => {
  addDisabilitlesScholarship.find({}).then((item) => {
    console.log(item);
    res.status(200).send(item);
  });
});

app.delete("/deleteuser/(:id)", function (req, res) {
  User.findByIdAndRemove(req.params.id).then((user) => {
    res.send(user);
  });
});

app.post("/login", async (req, res) => {
  try {
    // check if the user exists
    console.log(req.body.applicationId);
    User.findOne({
      applicationId: req.body.applicationId,
      password: req.body.password,
    })
      .then((user) => {
        console.log(user);
        res.send({ message: "Login Successfull", status: true, user });
      })
      .catch((err) => {
        res.send({ message: "password doesn't match", status: false });
      });
  } catch (error) {
    res.status(400).json({ error });
  }
});
app.post("/feedback", function (req, res) {
  const { firstName, lastName, email, feedbackmsg } = req.body;
  const feedbackdata = new feedback({
    firstName,
    lastName,
    email,
    feedbackmsg,
  });
  feedbackdata.save().then((item) => {
    res.status(201).send({ message: "Feedback Send" });
    console.log(item);
  });
});
app.post("/addscholarship", function (req, res) {
  const { SchemeName, Description, ClosingDate, Institute, WebsiteLink } = req.body;
  const addscholarshipdata = new addScholarship({
    SchemeName,
    Description,
    ClosingDate,
    Institute,
    WebsiteLink,
  });
  addscholarshipdata.save().then((item) => {
    res.status(201).send({ message: "Scholarship Added", user: item });
  });
});

app.post("/addprivateScholarship", function (req, res) {
  const {
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  } = req.body;

  const addprivatescholar = new addprivatescholarship({
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  })
  addprivatescholar.save()
  .then((response)=>{
    console.log(response);
    res.send({message:'Scholarship Added',response})
  })
});

app.post("/addMinorityScholarship", function (req, res) {
  const {
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  } = req.body;

  const addMinorityScholar = new addMinorityScholarship({
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  })
  addMinorityScholar.save()
  .then((response)=>{
    console.log(response);
    res.send({message:'Scholarship Added',response})
  })
});

app.post("/addMpScholarship", function (req, res) {
  const {
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  } = req.body;

  const addMpScholar = new addMpScholarship({
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  })
  addMpScholar.save()
  .then((response)=>{
    console.log(response);
    res.send({message:'Scholarship Added',response})
  })
});
app.post("/addDisabilitlesScholarship", function (req, res) {
  const {
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  } = req.body;

  const addDisabilitlesScholar = new addDisabilitlesScholarship({
    SchemeName,
    Description,
    ClosingDate,
    InstituteVerification,
    Address,
    WebsiteLink,
  })
  addDisabilitlesScholar.save()
  .then((response)=>{
    console.log(response);
    res.send({message:'Scholarship Added',response})
  })
});

app.post("/register", function (req, res) {
  const {
    fullname,
    dateofbirth,
    email,
    state,
    ScholarshipCategory,
    SchemeType,
    Gender,
    Mobile,
    BankIfscCode,
    BankAccount,
    password,
    applicationId,
  } = req.body;
  const user = new User({
    fullname,
    dateofbirth,
    email,
    state,
    ScholarshipCategory,
    SchemeType,
    Gender,
    Mobile,
    BankIfscCode,
    BankAccount,
    password,
    applicationId,
  });
  user
    .save()
    .then((item) => {
      console.log("Registration Success", item);
      res.status(200).send({ message: "Registration Success", item });
    })
    .catch((err) => {
      console.log("unable to save to db", err);
      res.status(402).send({ message: "Error in register" });
    });
});

app.listen(PORT, function () {
  console.log(`Backend is running on Port: ${PORT}`);
});
