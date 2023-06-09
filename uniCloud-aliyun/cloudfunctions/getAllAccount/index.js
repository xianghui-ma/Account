const db = uniCloud.database();
const collection = db.collection('account');

exports.main = async (event, context) => {
	let res = await collection.where({
		openid: event.openid
	}).orderBy("_id", "desc")
	.get();
	return res.data;
};
