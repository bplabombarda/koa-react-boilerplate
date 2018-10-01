const express = require('express');

const app = express.Router();

app.get('/api/leaderboard', async (req, res) => {
	try {
		const sheetData = await data;
		const json = JSON.stringify(sheetData.data.values);
		res.send(json);
	} catch (e) {
		console.log(e);
	}
});

module.exports = app;