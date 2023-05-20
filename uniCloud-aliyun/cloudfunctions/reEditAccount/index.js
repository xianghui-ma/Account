const db = uniCloud.database();
const collection = db.collection('account');

exports.main = async (event, context) => {
	let res = await collection.doc(event.id).update({
		cover: event.cover,
		accountTitle: event.accountTitle
	});
	return res;
};
