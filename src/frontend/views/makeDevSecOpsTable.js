let recalcAllDevSecOps = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxDevSecOp( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxDevSecOp = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( devSecOpsCells.row[ idx ].Td2dataId ).value,
		document.getElementById( devSecOpsCells.row[ idx ].Td3dataId ).value,
		document.getElementById( devSecOpsCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( devSecOpsCells.row[ idx ].Td2dataId ).value *
		document.getElementById( devSecOpsCells.row[ idx ].Td3dataId ).value *
		document.getElementById( devSecOpsCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( devSecOpsCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( devSecOpsCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcDevSecOps = function( idx ){
	recalcIdxDevSecOp( idx )
	recalcAllDevSecOps()
}
let addDevSecOpLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevSecOps('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevSecOpMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevSecOps('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevSecOpCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevSecOps('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevSecOpsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let devSecOpsCells = []
devSecOpsCells.row = []
let makeDevSecOpsTable = function(pId, idx, title, itemList, pct ){
	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	devSecOpsCells.Id = tag('table', div1, '', {'width':"100%"})
	devSecOpsCells.Th1Id = tag('tr', devSecOpsCells.Id, '', {'width':"100%"})
	devSecOpsCells.Th1Td1 = tag('th', devSecOpsCells.Th1Id, 'DevSecOp', {'width':"25%", 'align':'left'} )
	devSecOpsCells.Th1Td2 = tag('th', devSecOpsCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	devSecOpsCells.Th1Td3 = tag('th', devSecOpsCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	devSecOpsCells.Th1Td4 = tag('th', devSecOpsCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	devSecOpsCells.Th1Td5 = tag('th', devSecOpsCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		devSecOpsCells.row[ idx ] = {}
		devSecOpsCells.row[ idx ].Id = tag('tr', devSecOpsCells.Id, '', {'width':"100%"})
		devSecOpsCells.row[ idx ].Td1 = tag('td', devSecOpsCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )
		devSecOpsCells.row[ idx ].Td2 = tag('td', devSecOpsCells.row[ idx ].Id,'', {'width':"25%"} )
		devSecOpsCells.row[ idx ].Td2dataId = addDevSecOpLevelSelector( devSecOpsCells.row[ idx ].Td2, idx ) 
		devSecOpsCells.row[ idx ].Td3 = tag('td', devSecOpsCells.row[ idx ].Id, '', {'width':"25%"} )
		devSecOpsCells.row[ idx ].Td3dataId = addDevSecOpMethodSelector( devSecOpsCells.row[ idx ].Td3, idx ) 
		devSecOpsCells.row[ idx ].Td4 = tag('td', devSecOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		devSecOpsCells.row[ idx ].Td4dataId = addDevSecOpCurrencySelector( devSecOpsCells.row[ idx ].Td4, idx ) 
		devSecOpsCells.row[ idx ].Td5 = tag('td', devSecOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		devSecOpsCells.row[ idx ].Td5dataId = addDevSecOpsScore( devSecOpsCells.row[ idx ].Td5, pct )
	}
}

