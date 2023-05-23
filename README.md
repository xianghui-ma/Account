<h2 align="center">云开发旅行小账本</h2>

### 项目概述
***

### 总体架构
***

### 云开发
***

#### 云数据库设计
**
项目使用 `uniCloud` 提供的 `JSON` 格式的文档型数据库。其中 `_id` 是默认自带且不可删除的字段，`openid` 是用户标识，每一个微信用户都有一个独一无二的 `openid`。

```
cover 账本封面数据表，用于存储用户的账本封面信息
	-_id
	-openid<string>
	-url<string>	封面url
	-index<int>		封面标识，-1为内置封面，0为用户上传的封面
```

```
account 账本数据表，用于存储账本信息
	-_id
	-openid<string>
	-cover<string>			账本封面url
	-accountTitle<string>	账本名
	-date<string>			账本的创建时间
	-itemList<array>		收支项目列表
		-paymentName		收支项目名
		-money				收支金额
		-note				收支备注
```

#### 云存储管理
**

#### 云函数设计
**

### 前后端联调关键点
***

#### 本地封面选择如何与云端图片URL对应

用户在本地选择一张图片作为封面，那么如何映射到所选图片在云端的URL呢？

我们将封面数据表中的 `_id` 作为图片的 `id`，用户选择图片时便获取所选图片的 `_id`，然后通过`所选图片的_id + openid` 的方式查询所选图片在云端的URL