const handleTitle = (title) => {
    if(title.length > 10){
        return title.slice(0, 9) + "...";
    }
    return title;
}

export default handleTitle;