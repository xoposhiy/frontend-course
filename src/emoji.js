var format = function(message){
    return message.replace(/:\)/g, "☺");
}

module.exports = {
    format:format
}