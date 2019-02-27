const glob = require('glob');
const path = require('path');
// 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
const options = {
	cwd: path.resolve(__dirname,'../src/pages'),
    sync: true
}

const globInstance = new glob.Glob(`!(_)${process.env.cate || '*'}`, options);
const pageArr = globInstance.found;
const configEntry = {};
pageArr.forEach((page) => {
    configEntry['pages/' + page + '/index'] = path.resolve(__dirname, '../src/pages/', page + '/index.js');
});
if (!pageArr || !pageArr.length) {
    process.exit();
}
module.exports = configEntry;