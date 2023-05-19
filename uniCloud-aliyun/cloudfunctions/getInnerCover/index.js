const db = uniCloud.database();
const collection = db.collection('cover');
const dbCmd = db.command;

exports.main = async (event, context) => {
	let res = await collection.where({
		index: dbCmd.eq(-1).or(dbCmd.eq(0)),
		openid: dbCmd.eq(-1).or(dbCmd.eq(event.openid))
	}).orderBy("_id", "desc")
	.get();
	return res.data;
};
