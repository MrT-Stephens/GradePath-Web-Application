// src/db/index.ts

import PocketBase from 'pocketbase';

export const POCKET_BASE_URL = "https://gradepath-db.fly.dev/";

export class DatabaseClient {
    // the instance of PocketBase
    client;

    constructor () {
        // instantiate PocketBase before we use
        this.client = new PocketBase(POCKET_BASE_URL);
    }

    // authenticate handles the authentication of the user
    async authenticate (email, password) {
        try {
            const result = await this.client.collection("users").authWithPassword(email, password);
            // If there is no token in the result, it means something went wrong
            if (!result?.token) {
                throw new Error("Invalid email or password");
            }
            return result;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }

    // register handles the creation of a new user
    async register (User) {
        try {
            // We provide only the minimum required fields by user create method
            const result = await this.client.collection("users").create(User);

            return result;
        } catch (err) {
            console.error(err);
            throw new Error(err.message || err.toString());
        }
    }

    // isAuthenticated takes cookieStore from the request to check for the required tokens in the cookie
    async isAuthenticated(cookieStore) {
        const cookie = cookieStore.get('pb_auth_GradePath');

        if (!cookie) {
            return false;
        }

        // loadFromCookie applies the cookie data before checking the user is authenticated
        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.isValid || false
    }

    // getUser is similar to isAuthenticated, the only difference is the returned data type
    async getUser(cookieStore) {
        const cookie = cookieStore.get('pb_auth_GradePath');

        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');

        return this.client.authStore.model;
    }

    // logout clears the cookie
    logout(cookieStore) {
        cookieStore.set('pb_auth_GradePath', null);

        // We also clear the authStore
        this.client.authStore.clear();
    }

    async getUserGrades(cookieStore) {
        const user = await this.getUser(cookieStore);

        if (!user) {
            return [];
        }

        const grades = await this.client.collection('userGrade').getList(1, 100, 
            { 
                filter: `userID = "${user.id}"`,
                sort: '-created'
            });
        
        return grades;
    }

    async addUserGrade(cookieStore, grade) {
        const user = await this.getUser(cookieStore);

        if (!user) {
            throw new Error("User not found");
        }

        const result = await this.client.collection('userGrade').create({
            ...grade,
            userID: user.id
        });

        return result;
    }

    async removeUserGrade(cookieStore, gradeID) {
        const user = await this.getUser(cookieStore);

        if (!user) {
            throw new Error("User not found");
        }

        const grade = await this.client.collection('userGrade').getOne(gradeID);

        if (!grade) {
            throw new Error("Grade not found");
        }
        else if (grade.userID !== user.id) {
            throw new Error("Unauthorized");
        }

        const result = await this.client.collection('userGrade').delete(gradeID);

        return result;
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;
