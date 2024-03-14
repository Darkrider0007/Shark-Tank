import { Account, Client, Databases, ID, Permission, Role, Storage } from "appwrite";
import conf from "../conf/conf";

export class AppwriteAuth {
  client = new Client();
  account;
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createUserDatabase({ UserID, role,User_Avatar,Email,userName }) {
    //console.log(UserID, role);
    //console.log(conf.appwriteUserDatabaseID, conf.appwriteUserCollectionID);
    try {
      return await this.databases.createDocument(
        conf.appwriteUserDatabaseID,
        conf.appwriteUserCollectionID,
        UserID,
        {
          UserID,
          role,
          User_Avatar,
          Email,
          userName
        }
      );
    } catch (error) {
      console.log(`Appwrite Create User Database Error: ${error}`);
    }
  }

  async updateUserDatabase({UserID,role,User_Avatar,Email,userName}){
    //console.log(UserID, role);
    try {
      return await this.databases.updateDocument(
        conf.appwriteUserDatabaseID,
        conf.appwriteUserCollectionID,
        UserID,
        {
          role,
          User_Avatar,
          Email,
          userName
        }
      )
    } catch (error) {
      console.log(`Appwrite Update User Database Error: ${error}`);
    }
  }

  async getUserDatabase(UserID){
    //console.log(UserID);
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
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(`Appwrite Login Error: ${error}`);
      throw new Error(error);
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

  async uploadAvatar(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteUserBucketId,
        ID.unique(),
        file
    )
    } catch (error) {
      console.log(`Appwrite Upload Avatar error: ${error}`)
    }
  }

  async deleteAvatar(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteUserBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite Delete File error", error);
        return false
    }
  }

  getAvatar(fileId){
      return this.bucket.getFilePreview(
          conf.appwriteUserBucketId,
          fileId
      )
  }
}

const authService = new AppwriteAuth();

export default authService;