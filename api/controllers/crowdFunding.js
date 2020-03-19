const fabric = require('../blockchain/connectFabric');

exports.createProfile = async (req, res) => {
    await fabric.contract.submitTransaction('createProfile', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryProfile = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryProfile', wallet);
};
exports.createProject = async (req, res) => {
    await fabric.contract.submitTransaction('createProject', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryProject = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryProject', wallet);
};
exports.createChat = async (req, res) => {
    await fabric.contract.submitTransaction('createChat', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryChat = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryChat', wallet);
};
exports.createVote = async (req, res) => {
    await fabric.contract.submitTransaction('createVote', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryVotebyID = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryVotebyID', wallet);
};
exports.queryVotebyProject = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryVotebyProject', wallet);
};
exports.createVoteDown = async (req, res) => {
    await fabric.contract.submitTransaction('createVoteDown', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryVoteDownbyID = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryVoteDownbyID', wallet);
};
exports.queryVoteDownbyProject = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryVoteDownbyProject', wallet);
};
exports.createUpdate = async (req, res) => {
    await fabric.contract.submitTransaction('createUpdate', id, transaction.sender, transaction.receiver, transaction.amount);
};
exports.queryUpdatebyID = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryUpdatebyID', wallet);
};
exports.queryUpdatebyProject = async (req, res) => {
    let result = await fabric.contract.evaluateTransaction('queryUpdatebyProject', wallet);
};


exports.createWallet = async (req, res) => {
    try {
        let wallet = req.userData._uid;
        if (!wallet)
            return res.status(404).json({status: 404, message: 'Provide all parameters.'});
        let result = await fabric.contract.evaluateTransaction('queryWallet', wallet);
        result = JSON.parse(result.toString());
        if (result)
            res.status(200).json({status: 200, data: result});
        else
            res.status(200).json({status: 200, data: []});
    } catch (error) {
        res.status(500).json({stats: 500, message: error});
    }
};

exports.performTransaction = async (req, res) => {
    try {
        let transaction = req.body;
        transaction.sender = req.userData._uid;
        if (!transaction.sender && !transaction.receiver && !transaction.amount)
            return res.status(404).json({status: 404, message: 'Provide all parameters.'});
        let sender = await fabric.contract.evaluateTransaction('queryWallet', transaction.sender);
        sender = JSON.parse(sender.toString());
        if (Number(sender[0].Record.amount) < Number(transaction.amount))
            return res.status(404).json({status: 404, message: 'Sender balance not sufficient.'});
        let receiver = await fabric.contract.evaluateTransaction('queryWallet', transaction.receiver);
        receiver = JSON.parse(receiver.toString());
        if (receiver.length === 0)
            return res.status(404).json({status: 404, message: 'Receiver Address does not exists.'});
        let random = Math.floor(Math.random() * 1000).toString();
        let timestamp = Math.floor(new Date() / 1000).toString();
        let id = (random + timestamp).toString();
        await fabric.contract.submitTransaction('performTransaction', id, transaction.sender, transaction.receiver, transaction.amount);
        res.status(200).json({status: 200, message: 'Transaction has been submitted'});
        await settleBalance(res, transaction.sender, transaction.receiver, transaction.amount);
    } catch (error) {
        res.status(500).json({stats: 500, message: error});
    }
};
