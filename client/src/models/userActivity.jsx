export default class UserActivity {
    constructor(userActivity) {
        this.userId = userActivity.userId;
        this.sessions = userActivity.sessions;
    }

    getUserId() {
        return this.userId;
    }

    getSessions() {
        return this.sessions;
    }
}