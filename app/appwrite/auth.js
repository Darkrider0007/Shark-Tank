import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AppwriteAuth {
    client = new Client();
    account ;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);    
    }

    async createAccount({email, password, name, role}) {
        console.log(`Appwrite Create Account: ${email} ${password} ${name} ${role}`);
        console.log(`Appwrite Create Account: ${conf.appwriteUrl} ${conf.appwriteProjectId}`);
        console.log(conf);
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(`Appwrite Login Error: ${error}`);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
           console.log(`Appwrite Get Current User Error: ${error}`);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(`Appwrite Logout Error: ${error}`);
        }
    }
}

const authService = new AppwriteAuth();

export default authService;