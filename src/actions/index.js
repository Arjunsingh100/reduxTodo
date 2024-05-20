export const addText = (text) => {
    return {
        type:"ADDTEXT",
        payload: {
            id: Date.now(),
            data: text
        }
    }
}
export const deleteText = (id) => {
    return {
        type:"DELETETEXT",
        payload: {
            id: id
        }
    }
}

export const updateText = (id,text) => {
    return {
        type:"UPDATETEXT",
        payload: {
            id:id,
            text:text
        }
    }
}