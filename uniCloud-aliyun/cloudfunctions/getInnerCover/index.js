const db = uniCloud.database();
const collection = db.collection('cover');

exports.main = async (event, context) => {
	let res = await collection.where({
		index: -1
	}).get();
	return res.data;
};
