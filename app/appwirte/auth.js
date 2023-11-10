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
        try {
            const userAccount  = await this.account.create(ID.unique(),email, password, name);

            if(userAccount){
                if (role) {
                    await this.account.update(userAccount.$id, { role });
                }
                return this.login({email, password });
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log(`Appwrite Create Account Error: ${error}`);
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