module.exports = (obj, path) => path.split('.').reduce((a, b) => a && a[b], obj);
