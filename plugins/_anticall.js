export async function before(m) {
	this.ev.on('call', async (calls) => {
		if (db.data.settings[this.user.jid].anticall) {
			for (const call of calls) {
				if (call.status === 'offer') {
					const message = {
						text: "*❌ This person has activated the call-blocking feature, please use the chat feature instead ❌*",
					};
					await this.sendMessage(call.from, message);
					await this.rejectCall(call.id, call.from);
				}
			}
		}
	});
};