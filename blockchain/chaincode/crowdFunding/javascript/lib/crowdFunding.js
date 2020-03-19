/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const {Contract} = require('fabric-contract-api');

class crowdFunding extends Contract {

    async initLedger(ctx) {
        return '';
    }

    async createProfile(ctx, userID, firstName, lastName, email, mobile, kycVerified, bio, company, address, city, postCode, state, country) {
        const profile = {
            docType: 'profile',
            userID,
            firstName,
            lastName,
            email,
            mobile,
            kycVerified,
            bio,
            company,
            address,
            city,
            postCode,
            state,
            country
        };
        await ctx.stub.putState(userID, Buffer.from(JSON.stringify(profile)));
    }

    async queryProfile(ctx, userID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'profile';
        queryString.selector.userID = userID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async createProject(ctx, projectID, title, description, shortBlurb, category, location, duration, fundingGoal,
                        reward1Title, reward1Description, reward1Amount, reward2Title, reward2Description, reward2Amount, reward3Title, reward3Description, reward3Amount,
                        facebookLink, twitterLink, linkedinLink, pricingPlan1Title, pricingPlan1Description, pricingPlan1Amount, pricingPlan2Title, pricingPlan2Description, pricingPlan2Amount, pricingPlan3Title, pricingPlan3Description, pricingPlan3Amount,
                        raisingForSelf, raisingFor3rdParty, email3rdParty, status) {
        const project = {
            docType: 'project',
            projectID,
            title,
            description,
            shortBlurb,
            category,
            location,
            duration,
            fundingGoal,
            reward1Title,
            reward1Amount,
            reward1Description,
            reward2Title,
            reward2Amount,
            reward2Description,
            reward3Title,
            reward3Amount,
            reward3Description,
            facebookLink,
            twitterLink,
            linkedinLink,
            pricingPlan1Title,
            pricingPlan1Description,
            pricingPlan1Amount,
            pricingPlan2Title,
            pricingPlan2Description,
            pricingPlan2Amount,
            pricingPlan3Title,
            pricingPlan3Description,
            pricingPlan3Amount,
            raisingForSelf,
            raisingFor3rdParty,
            email3rdParty,
            status
        };
        await ctx.stub.putState(projectID, Buffer.from(JSON.stringify(project)));
    }

    async queryProject(ctx, projectID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'project';
        queryString.selector.projectID = projectID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async createChat(ctx, chatID, investorID, fundraiserID, message) {
        const chat = {
            docType: 'chat',
            chatID,
            investorID,
            fundraiserID,
            message
        };
        await ctx.stub.putState(chatID, Buffer.from(JSON.stringify(chat)));
    }

    async queryChat(ctx, chatID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'chat';
        queryString.selector.chatID = chatID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async createVote(ctx, voteID, projectID, counter, voterID) {
        const vote = {
            docType: 'vote',
            voteID,
            projectID,
            counter,
            voterID
        };
        await ctx.stub.putState(voteID, Buffer.from(JSON.stringify(vote)));
    }

    async queryVotebyID(ctx, voteID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'vote';
        queryString.selector.voteID = voteID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async queryVotebyProject(ctx, projectID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'vote';
        queryString.selector.projectID = projectID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async createVoteDown(ctx, voteDownID, projectID, voteDownCounter, voterDownID) {
        const voteDown = {
            docType: 'voteDown',
            voteDownID,
            projectID,
            voteDownCounter,
            voterDownID
        };
        await ctx.stub.putState(voteDownID, Buffer.from(JSON.stringify(voteDown)));
    }

    async queryVoteDownbyID(ctx, voteDownID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'voteDown';
        queryString.selector.voteDownID = voteDownID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async queryVoteDownbyProject(ctx, projectID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'voteDown';
        queryString.selector.projectID = projectID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async createUpdate(ctx, updateID, projectID, updateContent) {
        const update = {
            docType: 'update',
            updateID,
            projectID,
            updateContent
        };
        await ctx.stub.putState(updateID, Buffer.from(JSON.stringify(update)));
    }

    async queryUpdatebyID(ctx, updateID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'update';
        queryString.selector.updateID = updateID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async queryUpdatebyProject(ctx, projectID) {
        let queryString = {};
        queryString.selector = {};
        queryString.selector.docType = 'update';
        queryString.selector.projectID = projectID;
        return await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    }

    async getQueryResultForQueryString(stub, queryString) {
        console.info('- getQueryResultForQueryString queryString:\n' + queryString);
        let resultsIterator = await stub.getQueryResult(queryString);
        let results = await this.getAllResults(resultsIterator, false);
        return JSON.stringify(results);
    }

    async getAllResults(iterator, isHistory) {
        let allResults = [];
        while (true) {
            let res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                let jsonRes = {};
                console.log(res.value.value.toString('utf8'));

                if (isHistory && isHistory === true) {
                    jsonRes.TxId = res.value.tx_id;
                    jsonRes.Timestamp = res.value.timestamp;
                    jsonRes.IsDelete = res.value.is_delete.toString();
                    try {
                        jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
                    } catch (err) {
                        console.log(err);
                        jsonRes.Value = res.value.value.toString('utf8');
                    }
                } else {
                    jsonRes.Key = res.value.key;
                    try {
                        jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
                    } catch (err) {
                        console.log(err);
                        jsonRes.Record = res.value.value.toString('utf8');
                    }
                }
                allResults.push(jsonRes);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }
}

module.exports = crowdFunding;
