import Realm from 'realm';

const serversSchema = {
	name: 'servers',
	primaryKey: 'id',
	properties: {
		id: 'string',
		current: 'bool'
	}
};

const settingsSchema = {
	name: 'settings',
	primaryKey: '_id',
	properties: {
		_id: 'string',
		_server: 'servers',
		value: { type: 'string', optional: true }
	}
};

const subscriptionSchema = {
	name: 'subscriptions',
	primaryKey: '_id',
	properties: {
		_id: 'string',
		_server: 'servers',
		t: 'string',
		ts: { type: 'date', optional: true },
		ls: { type: 'date', optional: true },
		name: 'string',
		fname: { type: 'string', optional: true },
		rid: 'string',
		// u: { _id: 'hKCY2XGzHYk89SAaM', username: 'rodrigo', name: null },
		open: { type: 'bool', optional: true },
		alert: { type: 'bool', optional: true },
		// roles: [ 'owner' ],
		unread: { type: 'int', optional: true },
		// userMentions: 0,
		// groupMentions: 0,
		_updatedAt: { type: 'date', optional: true }
	}
};

const usersSchema = {
	name: 'users',
	primaryKey: '_id',
	properties: {
		_id: 'string',
		_server: 'servers',
		username: 'string',
		name: { type: 'string', optional: true }
	}
};

const messagesSchema = {
	name: 'messages',
	primaryKey: '_id',
	properties: {
		_id: 'string',
		_server: 'servers',
		msg: { type: 'string', optional: true },
		rid: 'string',
		ts: 'date',
		u: 'users',
		// mentions: [],
		// channels: [],
		_updatedAt: { type: 'date', optional: true },
		temp: { type: 'bool', optional: true }
	}
};

const realm = new Realm({
	schema: [settingsSchema, serversSchema, subscriptionSchema, messagesSchema, usersSchema]
});

export default realm;

// Realm.clearTestState();
// realm.write(() => {
// 	realm.create('servers', { id: 'https://demo.rocket.chat', current: false }, true);
// 	realm.create('servers', { id: 'http://localhost:3000', current: false }, true);
// 	realm.create('servers', { id: 'http://10.0.2.2:3000', current: false }, true);
// });