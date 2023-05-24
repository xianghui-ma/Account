<h2 align="center">交互式账本工具</h2>

### 项目概述
***

本项目基于 **Vue + Vuex + 云开发 + Uniapp** 等技术框架，利用 **Vue** 搭建前端页面，利用 **Vuex** 实现对跨页面共享数据的状态管理，利用 **云开发** 实现对用户数据的云端管理和前后端数据链接，使用 **Uniapp** 实现代码在小程序平台的发布。项目最终上线微信小程序，用户可使用该工具管理日常收支。

### 项目设计
***

项目总体架构如下：
```
Account						项目名
├─ pages					页面组件目录
│  ├─ columnlist
│  │  └─ columnlist.vue		账本纵向列表页(纵向展示用户创建的所有账本)
│  ├─ detail
│  │  └─ detail.vue			账本收支项目页(展示最新添加的收支项目及总体收支金额)
│  ├─ edit
│  │  └─ edit.vue			账本编辑页(新建或修改账本)
│  ├─ index
│  │  └─ index.vue			账本首页(启动时获取用户的openid及账本基础数据的配置)
│  ├─ payments
│  │  └─ payments.vue		增添收支项页(用户在此页向账本添加收支项目)
│  ├─ proportion
│  │  └─ proportion.vue		收支详细列表页(展现账本的所有收支项目)
│  └─ rowlist
│     └─ rowlist.vue		账本横向列表页(横向展示用户创建的所有账本)
├─ uniCloud-aliyun
│  ├─ cloudfunctions		云函数目录
│  │  ├─ deleteAccount		删除帐本
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ getAllAccount		获取所有账本
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ getInnerCover		获取内置账本封面图片
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ reEditAccount		用户修改账本后更新云端账本数据
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ storeAccount		保存账本
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  ├─ storeCoverUrl		保存用户新添加的账本封面图片
│  │  │  ├─ index.js
│  │  │  └─ package.json
│  │  └─ storePayments		保存用户新添加的收支项目
│  │     ├─ index.js
│  │     └─ package.json
│  └─ database				云数据库Scheme
│     ├─ account.schema.json	账本数据表Scheme
│     ├─ cover.schema.json		封面数据表Scheme
│     └─ JQL查询.jql
├─ store					Vuex目录
│  ├─ index.js				应用启动初始化时的共享数据配置
│  ├─ payments.js			payments组件的共享数据
│  ├─ publicData.js			公共数据配置
│  └─ rowlist.js			rowlist组件的共享数据
├─ mixin.js					组件功能复用混入对象
```

#### 页面组件拆分

<img src="https://raw.githubusercontent.com/xianghui-ma/staticImage/master/account01.png"/>

#### 组件间及组件内交互逻辑设计

<img src="https://raw.githubusercontent.com/xianghui-ma/staticImage/master/features.png"/>

#### 云数据库设计

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

#### 云存储与云函数设计

<img src="https://raw.githubusercontent.com/xianghui-ma/staticImage/master/cloudfun.png"/>