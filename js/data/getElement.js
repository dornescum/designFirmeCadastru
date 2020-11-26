function getElement (selection){
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    else {
        throw Error('esti prost')
    }
};
export default getElement;