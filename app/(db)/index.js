// src/db/index.ts

import PocketBase from 'pocketbase';

export const POCKET_BASE_URL = "https://gradepath-db.fly.dev";

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
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;
