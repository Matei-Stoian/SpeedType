export const setLocalStorage = (key:string,value:number) =>{
    try{
        window.localStorage.setItem(key,JSON.stringify(value));
    }catch(error)
    {
        alert('Error occurred trying to save item to local storage');
    }
};


export const getLocalStorage = (key:string) => {
    try{
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }catch(error)
    {
        alert('Error occurred trying to get item from local storage')
    }
}