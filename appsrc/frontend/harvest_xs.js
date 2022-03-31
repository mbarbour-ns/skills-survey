

let getUsers = function(){

	var dateRanges = [/* "from=20211018&to=20211025" */]
	var dateLabels = []// just the year-mo for reporting

	let years = ["2018","2019","2020","2021","2022"]
	let months = {
		"01":{last:"31"},
		"02":{last:"28"},
		"03":{last:"31"},
		"04":{last:"30"},
		"05":{last:"31"},
		"06":{last:"30"},
		"07":{last:"31"},
		"08":{last:"31"},
		"09":{last:"30"},
		"10":{last:"31"},
		"11":{last:"30"},
		"12":{last:"31"},
	}
	for( let y in years ){
		for( let m in months){
			console.log("from="+years[y]+m+"01&to="+years[y]+m+months[m].last)
			dateRanges.push("from="+years[y]+m+"01&to="+years[y]+m+months[m].last)
			dateLabels.push(years[y]+"-"+m)
		}
	}
	for( var inum in dateRanges ){
		var url = "https://api.harvestapp.com/v2/reports/time/team?" + dateRanges[ inum ];
	}
	let cl = console.log

	cl( process.env.HARVEST_ACCOUNT_ID + ": " + process.env.HARVEST_ACCESS_TOKEN )

	/* APP Script model
	var headers = {
		"User-Agent": "Node.js Harvest API Sample",
		"Authorization": "Bearer "+ accessToken,
		"Harvest-Account-ID": accountID
	};
	var options = {
		"method": "get",
		"headers": headers
	};

	var response = UrlFetchApp.fetch(url, options);
	var weeklyRevenue = JSON.parse(response.getContentText())
	console.log( JSON.stringify( weeklyRevenue ))
	*/
}

getUsers()