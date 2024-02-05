export default class UserInfos {
    constructor(user) {
        this.firstName = user.userInfos.firstName;
        this.lastName = user.userInfos.lastName;
        this.age = user.userInfos.age;
        this.todayScore = user.todayScore;
        this.calorieCount = user.keyData.calorieCount;
        this.proteinCount = user.keyData.proteinCount;
        this.carbohydrateCount = user.keyData.carbohydrateCount;
        this.lipidCount = user.keyData.lipidCount;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getTodayScore() {
        return this.todayScore;
    }

    getKeyData() {
        return this.keyData;
    }

}