let recalcAllMissions = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxMission( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxMission = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( missionCells.row[ idx ].Td2dataId ).value,
		document.getElementById( missionCells.row[ idx ].Td3dataId ).value,
		document.getElementById( missionCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( missionCells.row[ idx ].Td2dataId ).value *
		document.getElementById( missionCells.row[ idx ].Td3dataId ).value *
		document.getElementById( missionCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( missionCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( missionCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcMissions = function( idx ){
	recalcIdxMission( idx )
	recalcAllMissions()
}
let addMissionLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMissions('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMissionMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMissions('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMissionCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMissions('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMissionsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let missionCells = []
missionCells.row = []
let makeMissionsTable = function(pId, idx, title, itemList, pct ){
	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	missionCells.Id = tag('table', div1, '', {'width':"100%"})
	missionCells.Th1Id = tag('tr', missionCells.Id, '', {'width':"100%"})
	missionCells.Th1Td1 = tag('th', missionCells.Th1Id, 'Mission', {'width':"25%", 'align':'left'} )
	missionCells.Th1Td2 = tag('th', missionCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	missionCells.Th1Td3 = tag('th', missionCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	missionCells.Th1Td4 = tag('th', missionCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	missionCells.Th1Td5 = tag('th', missionCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		missionCells.row[ idx ] = {}
		missionCells.row[ idx ].Id = tag('tr', missionCells.Id, '', {'width':"100%"})
		missionCells.row[ idx ].Td1 = tag('td', missionCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )
		missionCells.row[ idx ].Td2 = tag('td', missionCells.row[ idx ].Id,'', {'width':"25%"} )
		missionCells.row[ idx ].Td2dataId = addMissionLevelSelector( missionCells.row[ idx ].Td2, idx ) 
		missionCells.row[ idx ].Td3 = tag('td', missionCells.row[ idx ].Id, '', {'width':"25%"} )
		missionCells.row[ idx ].Td3dataId = addMissionMethodSelector( missionCells.row[ idx ].Td3, idx ) 
		missionCells.row[ idx ].Td4 = tag('td', missionCells.row[ idx ].Id, '', {'width':"15%"} )
		missionCells.row[ idx ].Td4dataId = addMissionCurrencySelector( missionCells.row[ idx ].Td4, idx ) 
		missionCells.row[ idx ].Td5 = tag('td', missionCells.row[ idx ].Id, '', {'width':"15%"} )
		missionCells.row[ idx ].Td5dataId = addMissionsScore( missionCells.row[ idx ].Td5, pct )
	}
}

