export default class Member {
    user: Object | undefined;
    nick: string | undefined;
    avatar: string | undefined;
    roles: Array<String> | undefined;
    joinedAt: any;
    premiumSince: any;
    deaf: boolean | undefined;
    mute: boolean | undefined;
    pending: boolean | undefined;
    permissions: string | undefined;
    communicationDisabledUntil: any;
    constructor(data: any);
}
