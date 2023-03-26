import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins:{
    GoogleAuth:{
      scopes:['profile','email','https://www.googleapis.com/auth/spreadsheets'],
      serverClientId:"1027814650922-52gtgrmqol1k1vo9pmcggiqrntsneajn.apps.googleusercontent.com",
      forceCodeForRefreshToken:true,
    }
  },
  appId: 'com.casheir.app',
  appName: 'casheirApp',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
