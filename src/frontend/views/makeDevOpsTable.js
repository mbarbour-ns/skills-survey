let recalcAllDevOps = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxDevOp( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxDevOp = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( devOpsCells.row[ idx ].Td2dataId ).value,
		document.getElementById( devOpsCells.row[ idx ].Td3dataId ).value,
		document.getElementById( devOpsCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( devOpsCells.row[ idx ].Td2dataId ).value *
		document.getElementById( devOpsCells.row[ idx ].Td3dataId ).value *
		document.getElementById( devOpsCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( devOpsCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( devOpsCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcDevOps = function( idx ){
	recalcIdxDevOp( idx )
	recalcAllDevOps()
}
let addDevOpLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevOps('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevOpMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevOps('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevOpCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevOps('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}

let addDevOpsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let devOpsCells = []
devOpsCells.row = []
let makeDevOpsTable = function( pOBJ ){
    let idx = pOBJ.index
    let itemList = pOBJ.dbList
    levels[ pOBJ.title ] = []
    methods[ pOBJ.title ] = []

	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table',  pOBJ.pParentId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, pOBJ.label,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	devOpsCells.Id = tag('table', div1, '', {'width':"100%"})
	devOpsCells.Th1Id = tag('tr', devOpsCells.Id, '', {'width':"100%"})
	devOpsCells.Th1Td1 = tag('th', devOpsCells.Th1Id, 'DevOp', {'width':"15%", 'align':'left'} )
	devOpsCells.Th1Td2 = tag('th', devOpsCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	devOpsCells.Th1Td3 = tag('th', devOpsCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	devOpsCells.Th1Td4 = tag('th', devOpsCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	devOpsCells.Th1Td5 = tag('th', devOpsCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		devOpsCells.row[ idx ] = {}
		devOpsCells.row[ idx ].Id = tag('tr', devOpsCells.Id, '', {'width':"100%"})
		devOpsCells.row[ idx ].Td1 = tag('td', devOpsCells.row[ idx ].Id, itemList[ idx ], {'width':"15%"} )

		devOpsCells.row[ idx ].Td2 = tag('td', devOpsCells.row[ idx ].Id,'', {'width':"25%"} )
		levels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devOpsCells.row[ idx ].Td2,
            'domName': "levels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })
//		devOpsCells.row[ idx ].Td2dataId = addDevOpLevelSelector( devOpsCells.row[ idx ].Td2, idx ) 

		devOpsCells.row[ idx ].Td3 = tag('td', devOpsCells.row[ idx ].Id, '', {'width':"25%"} )
		methods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devOpsCells.row[ idx ].Td3,
            'domName': "methods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })
//		devOpsCells.row[ idx ].Td3dataId = addDevOpMethodSelector( devOpsCells.row[ idx ].Td3, idx ) 
		devOpsCells.row[ idx ].Td4 = tag('td', devOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		devOpsCells.row[ idx ].Td4dataId = addDevOpCurrencySelector( devOpsCells.row[ idx ].Td4, idx ) 
		devOpsCells.row[ idx ].Td5 = tag('td', devOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		devOpsCells.row[ idx ].Td5dataId = addDevOpsScore( devOpsCells.row[ idx ].Td5, pOBJ.percentage  )
	}
}

