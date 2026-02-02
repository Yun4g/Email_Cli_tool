import { Command } from "commander";
import fs from "fs";
import path from "path";



export const initCommand = new Command("init")
    .description("Initialize a new email project");
initCommand.action(() => {
    const cwd = process.cwd();
    // Current Working Directory  cwd Dont forget Future me
    const folderToCopy = ["lib", "react-email-starter", "route"];

    folderToCopy.forEach((folder) => {
        const src = path.join(__dirname, "../templates", folder);
        const dest = path.join(cwd, folder);
        copyFolderRecursiveSync(src, dest);
    });

    fs.copyFileSync(
        path.join(__dirname, "../templates/env.example"),
        path.join(cwd, "env.example")
    )
});


const copyFolderRecursiveSync = (source: string, target: string) => {
      if(!fs.existsSync(source)) {
        return;
      }

      fs.mkdirSync(target, { recursive: true });

      const readEverythingOnTheSourceFolder = fs.readdirSync(source, {withFileTypes: true});

      readEverythingOnTheSourceFolder.forEach((item) => {
          const currentSource = path.join(source, item.name);
          const currentTarget = path.join(target, item.name);

          if(item.isDirectory()) {
            copyFolderRecursiveSync(currentSource, currentTarget);
          } else {
            fs.copyFileSync(currentSource, currentTarget);
          }
      })
}



