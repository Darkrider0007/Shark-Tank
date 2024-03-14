const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
    appwriteUserDatabaseID: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID_USERS),
    appwriteUserCollectionID: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_USERS),
    appwriteUserBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID_USERS),
    emailjsServiceID: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
    emailjsPublicKey : String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
    emailjsTemplateId : String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
}

export default conf