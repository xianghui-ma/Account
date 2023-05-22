const db = uniCloud.database();
const collection = db.collection('account');
const dbCmd = db.command;

exports.main = async (event, context) => {
	let res = await collection.doc(event.id).update({
		itemList: dbCmd.unshift({
			paymentName: event.paymentName,
			money: event.money,
			note: event.note
		})
	});
	return res;
};
