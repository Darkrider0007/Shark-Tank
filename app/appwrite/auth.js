import { Account, Client, Databases, ID, Permission, Role } from "appwrite";
import conf from "../conf/conf";

export class AppwriteAuth {
  client = new Client();
  account;
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async createUserDatabase({ UserID, role }) {
    console.log(UserID, role);
    //console.log(conf.appwriteUserDatabaseID, conf.appwriteUserCollectionID);
    try {
      return await this.databases.createDocument(
        conf.appwriteUserDatabaseID,
        conf.appwriteUserCollectionID,
        UserID,
        {
          UserID,
          role,
        }
      );
    } catch (error) {
      console.log(`Appwrite Create User Database Error: ${error}`);
    }
  }

  async updateUserDatabase({UserID,role}){
    console.log(UserID, role);
    try {
      return await this.databases.updateDocument(
        conf.appwriteUserDatabaseID,
        conf.appwriteUserCollectionID,
        UserID,
        {
          role
        }
      )
    } catch (error) {
      console.log(`Appwrite Update User Database Error: ${error}`);
    }
  }

  async getUserDatabase(UserID){
    console.log(UserID);
    try {
      return await this.databases.getDocument(
        conf.appwriteUserDatabaseID,
        conf.appwriteUserCollectionID,
        UserID
      )
    } catch (error) {
      console.log(`Appwrite Get User Database Error: ${error}`);
    }
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        const loginData = this.login({ email, password });
        return loginData;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(`Appwrite Create Account Error: ${error}`);
    }
  }

  async login({ email, password }) {
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
