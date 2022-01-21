"use strict";
var DefaultMessageNoficationLevelTypes = [
    ["ALL_MESSAGES", 0],
    ["ONLY_MENTIONS", 1]
];
var ExplicitContentFilterTypes = [
    ["DISABLED", 0],
    ["MEMBERS_WITHOUT_ROLES", 1],
    ["ALL_MEMBERS", 2]
];
var MFALevelTypes = [
    ["NONE", 0],
    ["ELEVATED", 1]
];
var VerificationLevelTypes = [
    ["NONE", 0],
    ["LOW", 1],
    ["MEDIUM", 2],
    ["HIGH", 3],
    ["VERY_HIGH", 4]
];
var GuildNSFWLevelTypes = [
    ["DEFAULT", 0],
    ["EXPLICIT", 1],
    ["SAFE", 2],
    ["AGE_RESTRICTED", 3]
];
var PremiumTierTypes = [
    ["NONE", 0],
    ["TIER_1", 1],
    ["TIER_2", 2],
    ["TIER3", 3]
];
module.exports = {
    DefaultMessageNoficationLevelTypes: DefaultMessageNoficationLevelTypes,
    ExplicitContentFilterTypes: ExplicitContentFilterTypes,
    MFALevelTypes: MFALevelTypes,
    VerificationLevelTypes: VerificationLevelTypes,
    GuildNSFWLevelTypes: GuildNSFWLevelTypes,
    PremiumTierTypes: PremiumTierTypes
};
