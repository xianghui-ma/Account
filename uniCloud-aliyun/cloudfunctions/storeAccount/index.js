const db = uniCloud.database();
const collection = db.collection('account');

exports.main = async (event, context) => {
	let res = await collection.add({
		...event
	});
	return res;
};
