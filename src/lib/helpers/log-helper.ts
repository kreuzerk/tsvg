import chalk from 'chalk';
import ora from 'ora';

export const messagePrefix = 'svg-to-ts:';

export const generateSpinner = (text?: string) =>
  ora({ text, spinner: 'christmas', prefixText: chalk.blue(messagePrefix) });

export const printLogo = () =>
  console.log(
    chalk.blue(`
     _______.____    ____  _______        .___________.  ______          .___________.    _______.
    /       |\\   \\  /   / /  _____|       |           | /  __  \\         |           |   /       |
   |   (----\` \\   \\/   / |  |  __   ______\`---|  |----\`|  |  |  |  ______\`---|  |----\`  |   (----\`
    \\   \\      \\      /  |  | |_ | |______|   |  |     |  |  |  | |______|   |  |        \\   \\    
.----)   |      \\    /   |  |__| |            |  |     |  \`--'  |            |  |    .----)   |   
|_______/        \\__/     \\______|            |__|      \\______/             |__|    |_______/    
`)
  );

export const generationSuccess = (path: string) =>
  logWithPrefix(
    chalk.underline.green(`🏁 Everything is perfect: Icons succesfully generated under ${chalk.blue.underline(path)}`)
  );

export const success = (message: string) => logWithPrefix(chalk.green(message));
export const info = (message: string) => logWithPrefix(`ℹ️ ${chalk.blueBright(message)}`);
export const error = (message: string) => logWithPrefix(chalk.red(message));
export const underlineSuccess = (message: string) => chalk.green.underline(message);
export const separatorStart = (title: string) =>
  title
    ? logWithPrefix(chalk.blue(`-----------------------${title}----------------------`))
    : logWithPrefix(chalk.blue(`----------------------------------------------------------------`));
export const separatorEnd = () =>
  logWithPrefix(chalk.blue(`----------------------------------------------------------------`));

const logWithPrefix = (messageLog: string) => console.log(chalk.blue(messagePrefix), messageLog);
