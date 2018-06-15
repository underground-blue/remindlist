import axios from 'axios';
import _ from 'underscore';
// import moment from 'moment';

(function() {
	window.addEventListener('DOMContentLoaded', function() {
		const w = window.innerWidth || window.screen.width;
		const zoom = w / window.document.body.offsetWidth;

		document.documentElement.style.zoom = zoom;



		// slack remind list
		const api = axios.create();
		const params = {token: 'xoxp-374647852820-374175151920-374353181761-9c413e798cb80119f0bdb88348cd9ce2'};

		axios.all([
			api.get('https://slack.com/api/reminders.list', {params}),
			api.get('https://slack.com/api/users.list', {params})
		]).then(axios.spread((remind, users) => {
			console.log('reminderslist_status:', remind.data.reminders);
			console.log('userslist_status:', users);
			// remindkist に取得したデータを日付順でソートして格納
			const remindlist  = _.sortBy(remind.data.reminders, function(list) {
				return list.time;
			});
			console.log('list:', remindlist);

			// remindには2タイプある。一度のみのリマインドを抽出
			const no_recurring = _.where(remindlist, {recurring: false});
			console.log(no_recurring);

			// const date = moment.unix(no_recurring.time);
			// _.defaults(no_recurring, {time: date});

			_.each(no_recurring, function(data) {
				console.log('date:', no_recurring);
				document.querySelector('#remindList').insertAdjacentHTML('beforeend', _.template(document.querySelector('#tplRemindList').innerHTML)(data));
			});

			// remindには2タイプある。何度も繰り返すリマインドを抽出
			const recurring = _.where(remindlist, {recurring: true});
			console.log(recurring);

			_.each(recurring, function(data) {
				document.querySelector('#recurringRemindList').insertAdjacentHTML('beforeend', _.template(document.querySelector('#tplRecurringRemindList').innerHTML)(data));
			});

		// }).catch(function(e) {
			// console.log('error', e);
		}));

	});
})();
