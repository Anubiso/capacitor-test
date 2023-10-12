import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.syndikat7.capacitortest',
  appName: 'capacitor-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
