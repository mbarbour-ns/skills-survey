let recalcAllMLOps = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxMLOp( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxMLOp = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( MLOpsCells.row[ idx ].Td2dataId ).value,
		document.getElementById( MLOpsCells.row[ idx ].Td3dataId ).value,
		document.getElementById( MLOpsCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( MLOpsCells.row[ idx ].Td2dataId ).value *
		document.getElementById( MLOpsCells.row[ idx ].Td3dataId ).value *
		document.getElementById( MLOpsCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( MLOpsCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( MLOpsCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcMLOps = function( idx ){
	recalcIdxMLOp( idx )
	recalcAllMLOps()
}
let addMLOpLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMLOps('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMLOpMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMLOps('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMLOpCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcMLOps('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addMLOpsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let MLOpsCells = []
MLOpsCells.row = []
let makeMLOpsTable = function(pId, idx, title, itemList, pct ){
	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	MLOpsCells.Id = tag('table', div1, '', {'width':"100%"})
	MLOpsCells.Th1Id = tag('tr', MLOpsCells.Id, '', {'width':"100%"})
	MLOpsCells.Th1Td1 = tag('th', MLOpsCells.Th1Id, 'MLOp', {'width':"25%", 'align':'left'} )
	MLOpsCells.Th1Td2 = tag('th', MLOpsCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	MLOpsCells.Th1Td3 = tag('th', MLOpsCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	MLOpsCells.Th1Td4 = tag('th', MLOpsCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	MLOpsCells.Th1Td5 = tag('th', MLOpsCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		MLOpsCells.row[ idx ] = {}
		MLOpsCells.row[ idx ].Id = tag('tr', MLOpsCells.Id, '', {'width':"100%"})
		MLOpsCells.row[ idx ].Td1 = tag('td', MLOpsCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )
		MLOpsCells.row[ idx ].Td2 = tag('td', MLOpsCells.row[ idx ].Id,'', {'width':"25%"} )
		MLOpsCells.row[ idx ].Td2dataId = addMLOpLevelSelector( MLOpsCells.row[ idx ].Td2, idx ) 
		MLOpsCells.row[ idx ].Td3 = tag('td', MLOpsCells.row[ idx ].Id, '', {'width':"25%"} )
		MLOpsCells.row[ idx ].Td3dataId = addMLOpMethodSelector( MLOpsCells.row[ idx ].Td3, idx ) 
		MLOpsCells.row[ idx ].Td4 = tag('td', MLOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		MLOpsCells.row[ idx ].Td4dataId = addMLOpCurrencySelector( MLOpsCells.row[ idx ].Td4, idx ) 
		MLOpsCells.row[ idx ].Td5 = tag('td', MLOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		MLOpsCells.row[ idx ].Td5dataId = addMLOpsScore( MLOpsCells.row[ idx ].Td5, pct )
	}
}

