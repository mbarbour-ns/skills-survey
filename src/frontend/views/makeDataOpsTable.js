let recalcAllDataOps = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxDataOp( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxDataOp = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( dataOpsCells.row[ idx ].Td2dataId ).value,
		document.getElementById( dataOpsCells.row[ idx ].Td3dataId ).value,
		document.getElementById( dataOpsCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( dataOpsCells.row[ idx ].Td2dataId ).value *
		document.getElementById( dataOpsCells.row[ idx ].Td3dataId ).value *
		document.getElementById( dataOpsCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( dataOpsCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( dataOpsCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcDataOps = function( idx ){
	recalcIdxDataOp( idx )
	recalcAllDataOps()
}
let addDataOpLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDataOps('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDataOpMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDataOps('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDataOpCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDataOps('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDataOpsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let dataOpsCells = []
dataOpsCells.row = []
let makeDataOpsTable = function( pOBJ ){
    let idx = pOBJ.index
    let itemList = pOBJ.dbList
    levels[ pOBJ.title ] = []
    methods[ pOBJ.title ] = []

	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pOBJ.pParentId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, pOBJ.label,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	dataOpsCells.Id = tag('table', div1, '', {'width':"100%"})
	dataOpsCells.Th1Id = tag('tr', dataOpsCells.Id, '', {'width':"100%"})
	dataOpsCells.Th1Td1 = tag('th', dataOpsCells.Th1Id, 'DataOp', {'width':"25%", 'align':'left'} )
	dataOpsCells.Th1Td2 = tag('th', dataOpsCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	dataOpsCells.Th1Td3 = tag('th', dataOpsCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	dataOpsCells.Th1Td4 = tag('th', dataOpsCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	dataOpsCells.Th1Td5 = tag('th', dataOpsCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		dataOpsCells.row[ idx ] = {}
		dataOpsCells.row[ idx ].Id = tag('tr', dataOpsCells.Id, '', {'width':"100%",style:'vertical-align: top;'})
		dataOpsCells.row[ idx ].Td1 = tag('td', dataOpsCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )

		dataOpsCells.row[ idx ].Td2 = tag('td', dataOpsCells.row[ idx ].Id,'', {'width':"25%"} )
		levels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': dataOpsCells.row[ idx ].Td2,
            'domName': "levels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })
//		dataOpsCells.row[ idx ].Td2dataId = addDataOpLevelSelector( dataOpsCells.row[ idx ].Td2, idx ) 

		dataOpsCells.row[ idx ].Td3 = tag('td', dataOpsCells.row[ idx ].Id, '', {'width':"25%"} )		
		methods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': dataOpsCells.row[ idx ].Td3,
            'domName': "methods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })
//		dataOpsCells.row[ idx ].Td3dataId = addDataOpMethodSelector( dataOpsCells.row[ idx ].Td3, idx ) 


		dataOpsCells.row[ idx ].Td4 = tag('td', dataOpsCells.row[ idx ].Id, '', {'width':"15%"} )		
		dataOpsCells.row[ idx ].Td4dataId = addDataOpCurrencySelector( dataOpsCells.row[ idx ].Td4, idx ) 
		dataOpsCells.row[ idx ].Td5 = tag('td', dataOpsCells.row[ idx ].Id, '', {'width':"15%"} )
		dataOpsCells.row[ idx ].Td5dataId = addDataOpsScore( dataOpsCells.row[ idx ].Td5, pOBJ.percentage )
	}
}

