import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
                // For local dev with self-signed Appwrite, enable self-signed TLS support
                try{
                    if(typeof this.client.setSelfSigned === 'function' && /localhost|127\.0\.0\.1/.test(conf.appwriteUrl)){
                        this.client.setSelfSigned(true)
                    }
                }catch(e){
                    console.warn('setSelfSigned not available or failed', e)
                }

                this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
                const userAccount = await this.account.create(ID.unique(), email, password, name)
                // Attempt to create a session after creating the account. We don't rely on
                // the session to be available immediately via cookies (CORS/cookie issues),
                // but trying helps when cookies are allowed.
                try {
                    await this.login({ email, password })
                } catch (e) {
                    // Ignore login error here; caller can try getCurrentUser or use returned userAccount
                    console.warn('AuthService.createAccount: login after create failed', e)
                }
                return userAccount
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
            throw error;
        }
    }

   async getCurrentUser() {
    try {
        const user = await this.account.get();
        if (user) return user;
    } catch (error) {
        // This is where the "fix" happens
        // We check if the error is specifically about the user being a guest
        if (error.code === 401) {
            console.log("Appwrite service :: getCurrentUser :: No active session found");
        } else {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
    return null; // Always return null if something goes wrong
}

    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite",error);
            
        }
    }
}

const authService=new AuthService();

export default authService
