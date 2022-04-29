const getPages = (lastPage, nowPage) => {
    const pages = [];
    const firstPage = nowPage - 2 >= 1 ? nowPage - 2 : 1;
    const endPage = nowPage + 2 <= lastPage ? nowPage + 2 : lastPage;
    for(let i = firstPage; i <= endPage; i++){
        pages.push(i);
    }
    return pages;
}

export default getPages;