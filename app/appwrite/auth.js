import { Account, Client, Databases, ID, Permission, Role } from "appwrite";
import conf from "../conf/conf";

export class AppwriteAuth {
    client = new Client();
    account ;
    databases ;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);    
        this.databases = new Databases(this.client);
    }

    async createUserDatabase({UserId,role}){
        console.log(UserId,role);
        console.log(conf.appwriteUserDatabaseID,conf.appwriteUserCollectionID);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    UserId,
                    role
                }
            )
        } catch (error) {
            console.log(`Appwrite Create User Database Error: ${error}`);
        }
    }

    async createAccount({email, password, name, role}) {
        try {
            const userAccount  = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                const login =  this.login({email, password });
            
                if(login){
                return await this.createUserDatabase({UserId:userAccount.$id,role});
            }
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