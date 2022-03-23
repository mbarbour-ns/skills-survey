let recalcAllDevTools = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxDevTool( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxDevTool = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( devToolCells.row[ idx ].Td2dataId ).value,
		document.getElementById( devToolCells.row[ idx ].Td3dataId ).value,
		document.getElementById( devToolCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( devToolCells.row[ idx ].Td2dataId ).value *
		document.getElementById( devToolCells.row[ idx ].Td3dataId ).value *
		document.getElementById( devToolCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( devToolCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( devToolCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcDevTools = function( idx ){
	recalcIdxDevTool( idx )
	recalcAllDevTools()
}
let addDevToolLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevTools('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevToolMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevTools('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevToolCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevTools('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}

let addDevToolsScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let devToolCells = []
devToolCells.row = []
let makeDevToolsTable = function( pOBJ ){
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

	devToolCells.Id = tag('table', div1, '', {'width':"100%"})
	devToolCells.Th1Id = tag('tr', devToolCells.Id, '', {'width':"100%"})
	devToolCells.Th1Td1 = tag('th', devToolCells.Th1Id, 'DevTool', {'width':"25%", 'align':'left'} )
	devToolCells.Th1Td2 = tag('th', devToolCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	devToolCells.Th1Td3 = tag('th', devToolCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	devToolCells.Th1Td4 = tag('th', devToolCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	devToolCells.Th1Td5 = tag('th', devToolCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		devToolCells.row[ idx ] = {}
		devToolCells.row[ idx ].Id = tag('tr', devToolCells.Id, '', {'width':"100%",style:'vertical-align: top;'})
		devToolCells.row[ idx ].Td1 = tag('td', devToolCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )

		devToolCells.row[ idx ].Td2 = tag('td', devToolCells.row[ idx ].Id,'', {'width':"25%"} )
		levels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devToolCells.row[ idx ].Td2,
            'domName': "levels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })
//s		devToolCells.row[ idx ].Td2dataId = addDevToolLevelSelector( devToolCells.row[ idx ].Td2, idx ) 

		devToolCells.row[ idx ].Td3 = tag('td', devToolCells.row[ idx ].Id, '', {'width':"25%"} )
		methods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devToolCells.row[ idx ].Td3,
            'domName': "methods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })
//		devToolCells.row[ idx ].Td3dataId = addDevToolMethodSelector( devToolCells.row[ idx ].Td3, idx ) 


		devToolCells.row[ idx ].Td4 = tag('td', devToolCells.row[ idx ].Id, '', {'width':"15%"} )
		devToolCells.row[ idx ].Td4dataId = addDevToolCurrencySelector( devToolCells.row[ idx ].Td4, idx ) 
		devToolCells.row[ idx ].Td5 = tag('td', devToolCells.row[ idx ].Id, '', {'width':"15%"} )
		devToolCells.row[ idx ].Td5dataId = addDevToolsScore( devToolCells.row[ idx ].Td5, pOBJ.percentage )
	}
}

