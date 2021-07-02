/**
 *  Challenge: Hacer propio console log
 */

const miLog = new console.Console(
    process.stdout,
    process.strerr
);

const emojis = {
    log: "📑",
    error: "📛",
    info: "🔤",
    love: "💓",
    success: '😄',
    warning: '💡',
    danger: '😱'
};

const color ={
    msg: '\033[37m',
    info: '\033[34m',
    success: '\033[32m',
    warning: '\033[33m',
    error: '\033[31m',
    love: '\033[36m',
    danger: '\033[101m'
};

const date = () => {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let time = date.toTimeString().substring(0, 9);

    return (`${day < 10 ? '0'+day : day}/${month < 10 ? '0'+month : month}/${year} - ${time}`);
}

miLog.info = (text = '') => {
    console.info(
        `${color.info} ${emojis.info}Info - ${date()} - `,`\n\t${color.info} |──> ${text}`
    );
};

miLog.success = (text = '') => {
    console.info(
        `${color.success} ${emojis.success}Exito - ${date()}\n\t${color.success} |──> ${text}`
    );
};

miLog.warning = (text = '') => {
    console.info(
        `${color.warning} ${emojis.warning}Warning - ${date()}\n\t${color.warning} |──> ${text}`
    );
};

miLog.error = (text = '') => {
    console.info(
        `${color.error} ${emojis.error}Error - ${date()}\n\t${color.error} |──> ${text}`
    );
};

miLog.love = (text = '') => {
    console.info(
        `${color.love} ${emojis.love}Love - ${date()}\n\t${color.love} |──> ${text}`
    );
};

miLog.danger = (text = '') => {
    console.info(
        `${color.danger} ${emojis.danger}Danger - ${date()}\n\t${color.danger} |──> ${text}`
    );
};

miLog.info("this is a info log");
miLog.warning("this is a warning log you should read it");
miLog.error("this is a error log, You are in fire");
miLog.success('Yeah! ;)')
miLog.love('Love 4 U');
miLog.danger("Hurry, get out o blody here");
