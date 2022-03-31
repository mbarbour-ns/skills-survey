let recalcAllDevLangs = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxDevLang( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxDevLang = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( devLangCells.row[ idx ].Td2dataId ).value,
		document.getElementById( devLangCells.row[ idx ].Td3dataId ).value,
		document.getElementById( devLangCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( devLangCells.row[ idx ].Td2dataId ).value *
		document.getElementById( devLangCells.row[ idx ].Td3dataId ).value *
		document.getElementById( devLangCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( devLangCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( devLangCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcDevLangs = function( idx ){
	recalcIdxDevLang( idx )
	recalcAllDevLangs()
}
let addDevLangLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevLangs('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevLangMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevLangs('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevLangCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcDevLangs('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addDevLangScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let devLangCells = []
devLangCells.row = []
let makeDevLangTable = function( pOBJ ){
    let idx = pOBJ.index
    let itemList = pOBJ.dbList
    gLevels[ pOBJ.title ] = []
    gMethods[ pOBJ.title ] = []
    gAcquiredBy[ pOBJ.title ] = []

	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pOBJ.pParentId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, pOBJ.label,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	devLangCells.Id = tag('table', div1, '', {'width':"100%"})
	devLangCells.Th1Id = tag('tr', devLangCells.Id, '', {'width':"100%"})
	devLangCells.Th1Td1 = tag('th', devLangCells.Th1Id, 'DevItem', {'width':"25%", 'align':'left'} )
	devLangCells.Th1Td2 = tag('th', devLangCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	devLangCells.Th1Td3 = tag('th', devLangCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	devLangCells.Th1Td4 = tag('th', devLangCells.Th1Id, 'AcquiredBy', {'width':"15%", 'align':'left'} )
	devLangCells.Th1Td5 = tag('th', devLangCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	devLangCells.Th1Td6 = tag('th', devLangCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		devLangCells.row[ idx ] = {}
		devLangCells.row[ idx ].Id = tag('tr', devLangCells.Id, '', {'width':"100%"})
		devLangCells.row[ idx ].Td1 = tag('td', devLangCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )


		devLangCells.row[ idx ].Td2 = tag('td', devLangCells.row[ idx ].Id,'', {'width':"25%"} )
		gLevels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devLangCells.row[ idx ].Td2,
            'domName': "gLevels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })
//		devLangCells.row[ idx ].Td2dataId = addDevLangLevelSelector( devLangCells.row[ idx ].Td2, idx ) 

		devLangCells.row[ idx ].Td3 = tag('td', devLangCells.row[ idx ].Id, '', {'width':"25%"} )
		gMethods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': devLangCells.row[ idx ].Td3,
            'domName': "gMethods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })
//		devLangCells.row[ idx ].Td3dataId = addDevLangMethodSelector( devLangCells.row[ idx ].Td3, idx ) 

		devLangCells.row[ idx ].Td4 = tag('td', devLangCells.row[ idx ].Id, '', {'width':"25%"} )
		gAcquiredBy[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
			'pParentId': devLangCells.row[ idx ].Td4,
			'domName': "gAcquiredBy['"+pOBJ.title+"']['"+idx+"']",
			'listHeader':'acquiredBy', 
			'list': dbResults.acquiredByList
		})


		devLangCells.row[ idx ].Td5 = tag('td', devLangCells.row[ idx ].Id, '', {'width':"15%"} )
		devLangCells.row[ idx ].Td5dataId = addDevLangCurrencySelector( devLangCells.row[ idx ].Td5, idx ) 

		devLangCells.row[ idx ].Td6 = tag('td', devLangCells.row[ idx ].Id, '', {'width':"15%"} )
		devLangCells.row[ idx ].Td6dataId = addDevLangScore( devLangCells.row[ idx ].Td6, pOBJ.percentage )
	}
}

