const express = require("express");
const {
  addConsumer,
  getConsumer,
  getAllConsumer,
  removeMultipleConsumer,
  removeConsumer,
  loginConsumer,
  updateMicrogridId
} = require("../controllers/consumer_controller");
const {
    addTransaction,
  getTrasaction,
  getAllTrasaction,
  removeAllTransaction,
  removeTransaction,
} = require("../controllers/TransactionBills_controller");
const {
  createProducerUser,
  ProducerLogIn,
  updateProducer,
  removeMultipleProducer
} = require("../controllers/ProducerUserController.js");

const {
  createProsumerUser,
  ProsumerLogIn,
  updateProsumer
} = require("../controllers/ProsumerUserController.js");

const { addFace, removeFace, removeAllFaces, getFace ,compareFace} = require("../controllers/AdharAuthentication-controller")
const {addPlan,getPlan,getAllPlans} = require("../controllers/plans_controllers.js")
const {addGst,getGst,getAllGst}  = require("../controllers/getUser_controller.js")
const { body, validationResult } = require("express-validator");
const Simulation  = require("./simulation.js")
const router = express.Router();
 



// addConsumer all CRUD Operation
router.post("/createConsumer", addConsumer);
router.post("/getConsumer", getConsumer);
router.get("/allConsumer", getAllConsumer);
router.post("/loginConsumer", loginConsumer);
router.post("/UpdateConsumer", updateMicrogridId);

console.log("ugui")
// router.post('/removeConsumer',removeConsumer);
// router.post('/removeSpecificConsumers',removeMultipleConsumer);




// TransactionBills all CRUD Operations
router.post("/createTransactionBills", addTransaction);
router.post("/getTransaction", getTrasaction);
router.post("/getAllTransaction", getAllTrasaction);
// router.post('/removeTransaction',removeTransaction);
// router.post('/removeAllTransactions',removeAllTransaction);



router.post('/aadharDatabase',compareFace);


// Prosumer Function
router.post(
  "/ProsumerLogIn",
  [
    body("gst_number", "Incorrect GST Number").isLength({ min: 14 }),
    body("password", "Incorrect Password").isLength({ min: 8 }),
  ],
  ProsumerLogIn
);
router.post(
  "/createProsumerUser",
  [
    body("registrant", "Incorrect Registrant").isLength({ min: 5 }),
    body("gst_number", "Incorrect GST Number").isLength({ min: 14 }),
    body("password", "Incorrect Password").isLength({ min: 8 }),
  ],
  createProsumerUser
);
router.post("/updateProsumer",updateProsumer)




// Producer Function
router.post(
  "/ProducerLogIn",
  [
        body("name", "Incorrect Name").isLength({ min: 5 }),
        body("password", "Incorrect Password").isLength({ min: 8 }),
        body("designation", "Invalid Designation").isIn([
          "Chief Engineer",
          "Superintendent Engineer",
          "Divisional Engineer",
          "Assistant Director",
          "Assistant Engineer",
          "Assistant Sub-Engineer",
          "Foreman",
          "Line Inspector",
          "Lineman",
          "Junior Lineman",
          "Assistant Lineman",
        ]),
      ],
  ProducerLogIn
);
router.post(
  "/createProducerUser",
    [
    body("registrant", "Incorrect Registrant").isLength({ min: 5 }),
    body("name", "Incorrect Name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 8 }),
    body("designation", "Invalid Designation").isIn([
      "Chief Engineer",
      "Superintendent Engineer",
      "Divisional Engineer",
      "Assistant Director",
      "Assistant Engineer",
      "Assistant Sub-Engineer",
      "Foreman",
      "Line Inspector",
      "Lineman",
      "Junior Lineman",
      "Assistant Lineman",
    ]),
  ],
  createProducerUser
);
router.post("/updateProducer",updateProducer)
router.post("/removeMultipleProducer",removeMultipleProducer)


router.post("/addPlan",addPlan);
router.post("/getPlan",getPlan);
router.post("/getAllPlans",getAllPlans);

router.post("/getGst",getGst)
router.post("/getAllGst",getAllGst)

router.use("/simulation",Simulation)
module.exports = router;