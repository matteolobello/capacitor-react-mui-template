import { CapacitorConfig } from "@capacitor/cli"

import os from "os"

const config: CapacitorConfig = {
  appId: "com.test.app",
  appName: "App",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: `http://${os.networkInterfaces()["en0"][1].address}:3000`,
    cleartext: true
  },
  ios: {
    allowsLinkPreview: false
  }
}

export default config
