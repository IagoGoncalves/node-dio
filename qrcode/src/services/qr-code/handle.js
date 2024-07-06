import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle (err, result){
    if (err) {
        console.log(chalk.red(err));
        return
    }

    const isSmall = result.type == 2;

    if (isSmall) 
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QRCODE GERADO COM SUCESSO:\n"))
        console.log(qrcode);
    })
}

export default handle;