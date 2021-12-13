const initialState = {
Qoutes:[
    { id:0, qoute:"It matters not what someone is born, but what they grow to be.", auther:"J.K. Rowling"},
    { id:1, qoute:"Not all those who wander are lost.", auther:"J R R Tolkein"},
    { id:2, qoute:"But soft! What light through yonder window breaks?It is the east, and Juliet is the sun.", 
    auther:"J R R Tolkein"},
    { id:3, qoute:"I will wear him; In my heart’s core, ay, in my heart of heart.", 
    auther:"William Shakespeare"},
    { id:4, qoute:"I will wear him; In my heart’s core, ay, in my heart of heart.", 
    auther:"William Shakespeare"},
    { id:5, qoute:"We are such stuff as dreams are made on, and our one little life is rounded with a sleep.", 
    auther:"William Shakespeare"},
    { id:6, qoute:"Made weak by time and fate, but strong in will To strive, to seek, to find, and not to yield.", 
    auther:"Alfred Lord Tennyson"}
]}

const rootReducer = (state = initialState, action) =>{
    if(action === "New_Qoute"){
        let id = Math.floor(Math.random() * 10);
        return state.filter(s=> s.id === id)
    }
    return state;
}

export default rootReducer;