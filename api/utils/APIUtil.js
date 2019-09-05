module.exports.omit =  function(key, obj) {
    const { [key]: omitted, ...rest } = obj;
    return rest;
}