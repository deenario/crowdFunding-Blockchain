const fabric = require('../blockchain/connectFabric');

exports.createProfile = async (req, res) => {
    let profie = {
        userID: req.body.userID ? req.body.userID : null,
        firstName: req.body.firstName ? req.body.firstName : " ",
        lastName: req.body.lastName ? req.body.lastName : " ",
        email: req.body.email ? req.body.email : " ",
        mobile: req.body.mobile ? req.body.mobile : " ",
        kycVerified: req.body.kycVerified ? req.body.kycVerified : " ",
        bio: req.body.bio ? req.body.bio : " ",
        company: req.body.company ? req.body.company : " ",
        address: req.body.address ? req.body.address : " ",
        city: req.body.city ? req.body.city : " ",
        postCode: req.body.postCode ? req.body.postCode : " ",
        state: req.body.state ? req.body.state : " ",
        country: req.body.country ? req.body.country : " "
    };
    await fabric.contract.submitTransaction('createProfile', profie.userID, profie.firstName, profie.lastName, profie.email, profie.mobile,
        profie.kycVerified, profie.bio, profie.company, profie.address, profie.city, profie.postCode, profie.state, profie.country);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryProfile = async (req, res) => {
    if (!req.query.userID) {
        return res.status(404).json({statusCode: 404, message: "Provide userID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryProfile', req.query.userID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.createProject = async (req, res) => {
    let project = {
        projectID: req.body.projectID ? req.body.projectID : " ",
        title: req.body.title ? req.body.title : " ",
        description: req.body.description ? req.body.description : " ",
        shortBlurb: req.body.shortBlurb ? req.body.shortBlurb : " ",
        category: req.body.category ? req.body.category : " ",
        location: req.body.location ? req.body.location : " ",
        duration: req.body.duration ? req.body.duration : " ",
        fundingGoal: req.body.fundingGoal ? req.body.fundingGoal : " ",
        reward1Title: req.body.reward1Title ? req.body.reward1Title : " ",
        reward1Amount: req.body.reward1Amount ? req.body.reward1Amount : " ",
        reward1Description: req.body.reward1Description ? req.body.reward1Description : " ",
        reward2Title: req.body.reward2Title ? req.body.reward2Title : " ",
        reward2Amount: req.body.reward2Amount ? req.body.reward2Amount : " ",
        reward2Description: req.body.reward2Description ? req.body.reward2Description : " ",
        reward3Title: req.body.reward3Title ? req.body.reward3Title : " ",
        reward3Amount: req.body.reward3Amount ? req.body.reward3Amount : " ",
        reward3Description: req.body.reward3Description ? req.body.reward3Description : " ",
        facebookLink: req.body.facebookLink ? req.body.facebookLink : " ",
        twitterLink: req.body.twitterLink ? req.body.twitterLink : " ",
        linkedinLink: req.body.linkedinLink ? req.body.linkedinLink : " ",
        pricingPlan1Title: req.body.pricingPlan1Title ? req.body.pricingPlan1Title : " ",
        pricingPlan1Description: req.body.pricingPlan1Description ? req.body.pricingPlan1Description : " ",
        pricingPlan1Amount: req.body.pricingPlan1Amount ? req.body.pricingPlan1Amount : " ",
        pricingPlan2Title: req.body.pricingPlan2Title ? req.body.pricingPlan2Title : " ",
        pricingPlan2Description: req.body.pricingPlan2Description ? req.body.pricingPlan2Description : " ",
        pricingPlan2Amount: req.body.pricingPlan2Amount ? req.body.pricingPlan2Amount : " ",
        pricingPlan3Title: req.body.pricingPlan3Title ? req.body.pricingPlan3Title : " ",
        pricingPlan3Description: req.body.pricingPlan3Description ? req.body.pricingPlan3Description : " ",
        pricingPlan3Amount: req.body.pricingPlan3Amount ? req.body.pricingPlan3Amount : " ",
        raisingForSelf: req.body.raisingForSelf ? req.body.raisingForSelf : " ",
        raisingFor3rdParty: req.body.raisingFor3rdParty ? req.body.raisingFor3rdParty : " ",
        email3rdParty: req.body.email3rdParty ? req.body.email3rdParty : " ",
        status: req.body.status ? req.body.status : " "
    };
    await fabric.contract.submitTransaction('createProject', project.projectID, project.title, project.description, project.shortBlurb, project.category, project.location, project.duration, project.fundingGoal,
        project.reward1Title, project.reward1Description, project.reward1Amount, project.reward2Title, project.reward2Description, project.reward2Amount, project.reward3Title, project.reward3Description, project.reward3Amount,
        project.facebookLink, project.twitterLink, project.linkedinLink, project.pricingPlan1Title, project.pricingPlan1Description, project.pricingPlan1Amount, project.pricingPlan2Title, project.pricingPlan2Description, project.pricingPlan2Amount, project.pricingPlan3Title, project.pricingPlan3Description, project.pricingPlan3Amount,
        project.raisingForSelf, project.raisingFor3rdParty, project.email3rdParty, project.status);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryProject = async (req, res) => {
    if (!req.query.projectID) {
        return res.status(404).json({statusCode: 404, message: "Provide projectID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryProject', req.query.projectID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.createChat = async (req, res) => {
    let chat = {
        chatID: req.body.chatID ? req.body.chatID : " ",
        investorID: req.body.investorID ? req.body.investorID : " ",
        fundraiserID: req.body.fundraiserID ? req.body.fundraiserID : " ",
        message: req.body.message ? req.body.message : " "
    };
    await fabric.contract.submitTransaction('createChat', chat.chatID, chat.investorID, chat.fundraiserID, chat.message);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryChat = async (req, res) => {
    if (!req.query.chatID) {
        return res.status(404).json({statusCode: 404, message: "Provide chatID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryChat', req.query.chatID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.createVote = async (req, res) => {
    let vote = {
        voteID: req.body.voteID ? req.body.voteID : " ",
        projectID: req.body.projectID ? req.body.projectID : " ",
        counter: req.body.counter ? req.body.counter : " ",
        voterID: req.body.voterID ? req.body.voterID : " "
    };
    await fabric.contract.submitTransaction('createVote', vote.voteID, vote.projectID, vote.counter, vote.voterID);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryVotebyID = async (req, res) => {
    if (!req.query.voteID) {
        return res.status(404).json({statusCode: 404, message: "Provide voteID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryVotebyID', req.query.voteID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.queryVotebyProject = async (req, res) => {
    if (!req.query.projectID) {
        return res.status(404).json({statusCode: 404, message: "Provide projectID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryVotebyProject', req.query.projectID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.createVoteDown = async (req, res) => {
    let voteDown = {
        voteDownID: req.body.voteDownID ? req.body.voteDownID : " ",
        projectID: req.body.projectID ? req.body.projectID : " ",
        voteDownCounter: req.body.voteDownCounter ? req.body.voteDownCounter : " ",
        voterDownID: req.body.voterDownID ? req.body.voterDownID : " "
    };
    await fabric.contract.submitTransaction('createVoteDown', voteDown.voteDownID, voteDown.projectID, voteDown.voteDownCounter, voteDown.voterDownID);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryVoteDownbyID = async (req, res) => {
    if (!req.query.voteDownID) {
        return res.status(404).json({statusCode: 404, message: "Provide voteDownID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryVoteDownbyID', req.query.voteDownID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.queryVoteDownbyProject = async (req, res) => {
    if (!req.query.projectID) {
        return res.status(404).json({statusCode: 404, message: "Provide projectID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryVoteDownbyProject', req.query.projectID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.createUpdate = async (req, res) => {
    let update = {
        updateID: req.body.voteDownID ? req.body.voteDownID : " ",
        projectID: req.body.voteDownID ? req.body.voteDownID : " ",
        updateContent: req.body.voteDownID ? req.body.voteDownID : " "
    };
    await fabric.contract.submitTransaction('createUpdate', update.updateID, update.projectID, update.updateContent);
    res.status(200).json({statusCode: 200, message: "Successfully registered"});
};

exports.queryUpdatebyID = async (req, res) => {
    if (!req.query.updateID) {
        return res.status(404).json({statusCode: 404, message: "Provide updateID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryUpdatebyID', req.query.updateID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};

exports.queryUpdatebyProject = async (req, res) => {
    if (!req.query.projectID) {
        return res.status(404).json({statusCode: 404, message: "Provide projectID!"});
    }
    let result = await fabric.contract.evaluateTransaction('queryUpdatebyProject', req.query.projectID);
    res.status(200).json({statusCode: 200, data: JSON.parse(result.toString())});
};
