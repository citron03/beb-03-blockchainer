const parseDate = (input) => {
    const date = new Date(input);
    const str = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return str;
}

export default parseDate;