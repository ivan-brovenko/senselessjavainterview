export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const putData = (dataFromServer) => {
    console.log(dataFromServer);
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
};

export const loadData = (from, to, text) => {
    console.log(from);
    console.log(to);
    console.log(text);
    return {
        type: LOAD_DATA,
        from,
        to,
        text
    }
};