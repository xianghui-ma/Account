<h2 align="center">云开发旅行小账本</h2>

### 云数据库设计
***

项目使用 `uniCloud` 提供的 `JSON` 格式的文档型数据库。其中 `_id` 是默认自带且不可删除的字段，`openid` 是用户标识，每一个微信用户都有一个独一无二的 `openid`。

```
cover 账本封面数据表，用于存储用户的账本封面信息
	-_id
	-openid
	-url	封面url
	-index	封面标识，-1为内置封面，0为用户上传的封面
```

```
account 账本数据表，用于存储账本信息
	-_id
	-openid
	-cover			账本封面url
	-accountTitle	账本名
	-date			账本的创建时间
	-itemList		收支项目列表
		-itemName	收支项目名
		-money		收支金额
		-note		收支备注
```

### 前后端联调关键点
***

#### 本地封面选择如何与云端图片URL对应

用户在本地选择一张图片作为封面，那么如何映射到所选图片在云端的URL呢？

我们为本地的图片列表维护一个编号，通过 `所选图片的编号 + openid` 的方式查询所选图片在云端的URL