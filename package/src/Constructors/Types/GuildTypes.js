const DefaultMessageNoficationLevelTypes = [
    ["ALL_MESSAGES", 0],
    ["ONLY_MENTIONS", 1]
];

const ExplicitContentFilterTypes = [
    ["DISABLED", 0],
    ["MEMBERS_WITHOUT_ROLES", 1],
    ["ALL_MEMBERS", 2]
];

const MFALevelTypes = [
    ["NONE", 0],
    ["ELEVATED", 1]
];

const VerificationLevelTypes = [
    ["NONE", 0],
    ["LOW", 1],
    ["MEDIUM", 2],
    ["HIGH", 3],
    ["VERY_HIGH", 4]
];

const GuildNSFWLevelTypes = [
    ["DEFAULT", 0],
    ["EXPLICIT", 1],
    ["SAFE", 2],
    ["AGE_RESTRICTED", 3]
];

const PremiumTierTypes = [
    ["NONE", 0],
    ["TIER_1", 1],
    ["TIER_2", 2],
    ["TIER3", 3]
];

module.exports = { 
    DefaultMessageNoficationLevelTypes,
    ExplicitContentFilterTypes,
    MFALevelTypes,
    VerificationLevelTypes,
    GuildNSFWLevelTypes,
    PremiumTierTypes
};