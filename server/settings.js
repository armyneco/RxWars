if (Meteor.isServer) Meteor.methods({

    'increaseScheduleIIBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'II'});
        if (!drug) {
            var buyRisk = 5;
        } else {
            var buyRisk = drug.buyRisk;
        }
        Drugs.update({schedule: 'II'},
            {
                $set: {
                    buyRisk: buyRisk + 5
                }
            },
            {multi: true});

        return buyRisk + 5;
    },

    'decreaseScheduleIIBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'II'});
        if (!drug) {
            var buyRisk = 5;
        } else {
            var buyRisk = drug.buyRisk;
        }
        Drugs.update({schedule: 'II'},
            {
                $set: {
                    buyRisk: buyRisk - 5
                }
            },
            {multi: true});

        return buyRisk - 5;
    },
    'increaseScheduleIII_VBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'III'});
        if (!drug) {
            var drug = Drugs.findOne({schedule: 'IV'});
        }
        if (!drug) {
            var drug = Drugs.findOne({schedule: 'V'});
        }
        if (!drug) {
            var buyRisk = 5;
        } else {
            var buyRisk = drug.buyRisk;
        }

        Drugs.update({schedule: 'III'},
            {
                $set: {
                    buyRisk: buyRisk + 5
                }
            },
            {multi: true});
        Drugs.update({schedule: 'IV'},
            {
                $set: {
                    buyRisk: buyRisk + 5
                }
            },
            {multi: true});
        Drugs.update({schedule: 'V'},
            {
                $set: {
                    buyRisk: buyRisk + 5
                }
            },
            {multi: true});

        return buyRisk + 5;
    },

    'decreaseScheduleIII_VBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'III'});
        if (!drug) {
            var drug = Drugs.findOne({schedule: 'IV'});
        }
        if (!drug) {
            var drug = Drugs.findOne({schedule: 'V'});
        }
        if (!drug) {
            var buyRisk = 10;
        } else {
            var buyRisk = drug.buyRisk;
        }

        Drugs.update({schedule: 'III'},
            {
                $set: {
                    buyRisk: buyRisk - 5
                }
            },
            {multi: true});
        Drugs.update({schedule: 'IV'},
            {
                $set: {
                    buyRisk: buyRisk - 5
                }
            },
            {multi: true});
        Drugs.update({schedule: 'V'},
            {
                $set: {
                    buyRisk: buyRisk - 5
                }
            },
            {multi: true});

        return buyRisk - 5;
    },
    'increaseUnscheduledBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'unscheduled'});
        if (!drug) {
            var buyRisk = 5;
        } else {
            var buyRisk = drug.buyRisk;
        }
        Drugs.update({schedule: 'unscheduled'},
            {
                $set: {
                    buyRisk: buyRisk + 5
                }
            },
            {multi: true});

        return buyRisk + 5;
    },

    'decreaseUnscheduledBuyRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({schedule: 'unscheduled'});
        if (!drug) {
            var buyRisk = 5;
        } else {
            var buyRisk = drug.buyRisk;
        }
        Drugs.update({schedule: 'unscheduled'},
            {
                $set: {
                    buyRisk: buyRisk - 5
                }
            },
            {multi: true});

        return buyRisk - 5;
    },
    'increaseSellRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({});
        if (!drug) {
            var sellRisk = 5;
        } else {
            var sellRisk = drug.sellRisk;
        }
        Drugs.update({},
            {
                $set: {
                    sellRisk: sellRisk + 5
                }
            },
            {multi: true});

        return sellRisk + 5;
    },

    'decreaseSellRisk': function () {
        this.unblock;
        var drug = Drugs.findOne({});
        if (!drug) {
            var sellRisk = 5;
        } else {
            var sellRisk = drug.sellRisk;
        }
        Drugs.update({},
            {
                $set: {
                    sellRisk: sellRisk - 5
                }
            },
            {multi: true});

        return sellRisk - 5;
    },
    'decriminalize': function () {
        this.unblock;
        Drugs.update({},
            {
                $set: {
                    demandMultiplier: 0.0001
                }
            }, {multi: true})
    },
    'gangster': function () {
        this.unblock;
        Drugs.update({},
            {
                $set: {
                    buyRisk: 0,
                    sellRisk: 0
                }
            }, {multi: true})
    },
    'resetMarket': function () {
        Transactions.remove({});
        DrugPrice.remove({});
        ScoreBoard.remove({});
    },

    'resetDrugs': function () {
        this.unblock;
        Drugs.remove({});

        Drugs.insert({
            name: 'alprazolam',
            schedule: 'IV',
            awp: 2,
            buyRisk: 10,
            sellRisk: 20,
            demandMultiplier: 1.5,
            active: true
        });

        Drugs.insert({
            name: 'amphetamine',
            schedule: 'II',
            awp: 2,
            buyRisk: 25,
            sellRisk: 20,
            demandMultiplier: 2,
            active: true
        });
        Drugs.insert({
            name: 'hydrocodone',
            schedule: 'II',
            awp: 8.5,
            buyRisk: 25,
            sellRisk: 20,
            demandMultiplier: 2,
            active: true
        });

        Drugs.insert({
            name: 'oxandrolone',
            schedule: 'III',
            awp: 1,
            buyRisk: 10,
            sellRisk: 20,
            demandMultiplier: 1.5,
            active: true
        });


        Drugs.insert({
            name: 'oxycodone',
            schedule: 'II',
            awp: 8.5,
            buyRisk: 25,
            sellRisk: 20,
            demandMultiplier: 3,
            active: true
        });


        Drugs.insert({
            name: 'trazodone',
            schedule: 'unscheduled',
            awp: 1,
            buyRisk: 10,
            sellRisk: 10,
            demandMultiplier: 1,
            active: true
        });


    },
    'resetPlayers': function () {
        this.unblock;
        Meteor.users.remove({username: {$not: /^admin.*/}});
    }


});

