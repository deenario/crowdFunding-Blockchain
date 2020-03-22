const express = require("express");
const router = express.Router();
const CrowdFundingController = require("../controllers/crowdFunding");

router.post("/createProfile", CrowdFundingController.createProfile);
router.get("/queryProfile", CrowdFundingController.queryProfile);
router.post("/createProject", CrowdFundingController.createProject);
router.get("/queryProject", CrowdFundingController.queryProject);
router.post("/createChat", CrowdFundingController.createChat);
router.get("/queryChat", CrowdFundingController.queryChat);
router.post("/createVote", CrowdFundingController.createVote);
router.get("/queryVotebyID", CrowdFundingController.queryVotebyID);
router.get("/queryVotebyProject", CrowdFundingController.queryVotebyProject);
router.post("/createVoteDown", CrowdFundingController.createVoteDown);
router.get("/queryVoteDownbyID", CrowdFundingController.queryVoteDownbyID);
router.get("/queryVoteDownbyProject", CrowdFundingController.queryVoteDownbyProject);
router.post("/createUpdate", CrowdFundingController.createUpdate);
router.get("/queryUpdatebyID", CrowdFundingController.queryUpdatebyID);
router.get("/queryUpdatebyProject", CrowdFundingController.queryUpdatebyProject);

module.exports = router;
