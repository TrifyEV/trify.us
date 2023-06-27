import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'trify',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.10:3002',
    androidScheme: 'https',
    cleartext: true
  }

};

export default config;
