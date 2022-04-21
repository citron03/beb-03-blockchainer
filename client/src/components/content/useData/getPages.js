const getPages = (lastPage) => {
    const pages = [];
    for(let i = 1; i <= lastPage; i++){
        pages.push(i);
    }
    return pages;
}

export default getPages;