const db = uniCloud.database();
const collection = db.collection('account');

exports.main = async (event, context) => {
	return await collection.doc(event.id).remove();;
};
