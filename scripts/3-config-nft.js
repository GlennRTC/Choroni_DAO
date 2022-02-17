import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD9Be72F94C7b7f05c03931e9c010A1db16a44a9d",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Choroni Sign",
        description: "This NFT will give you access to ChoroniDAO!",
        image: readFileSync("scripts/assets/ChoroniNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()