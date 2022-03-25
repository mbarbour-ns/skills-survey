let recalcAllServices = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxService( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxService = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( serviceCells.row[ idx ].Td2dataId ).value,
		document.getElementById( serviceCells.row[ idx ].Td3dataId ).value,
		document.getElementById( serviceCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( serviceCells.row[ idx ].Td2dataId ).value *
		document.getElementById( serviceCells.row[ idx ].Td3dataId ).value *
		document.getElementById( serviceCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( serviceCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( serviceCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcServices = function( idx ){
	recalcIdxService( idx )
	recalcAllServices()
}
let addServiceLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcServices('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addServiceMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcServices('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addServiceCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcServices('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addServicesScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let serviceCells = []
serviceCells.row = []
let makeAWSServicesTable = function( pOBJ ){
    let idx = pOBJ.index
    let itemList = pOBJ.dbList
    gLevels[ pOBJ.title ] = []
    gMethods[ pOBJ.title ] = []
    gAcquiredBy[ pOBJ.title ] = []

	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table',  pOBJ.pParentId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, pOBJ.label,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

	serviceCells.Id = tag('table', div1, '', {'width':"100%"})
	serviceCells.Th1Id = tag('tr', serviceCells.Id, '', {'width':"100%"})
	serviceCells.Th1Td1 = tag('th', serviceCells.Th1Id, 'Service', {'width':"25%", 'align':'left'} )
	serviceCells.Th1Td2 = tag('th', serviceCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	serviceCells.Th1Td3 = tag('th', serviceCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	serviceCells.Th1Td4 = tag('th', serviceCells.Th1Id, 'AcquiredBy', {'width':"15%", 'align':'left'} )
	serviceCells.Th1Td5 = tag('th', serviceCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	serviceCells.Th1Td6 = tag('th', serviceCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		serviceCells.row[ idx ] = {}
		serviceCells.row[ idx ].Id = tag('tr', serviceCells.Id, '', {'width':"100%"})
		serviceCells.row[ idx ].Td1 = tag('td', serviceCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )

		serviceCells.row[ idx ].Td2 = tag('td', serviceCells.row[ idx ].Id,'', {'width':"25%"} )
		gLevels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': serviceCells.row[ idx ].Td2,
            'domName': "gLevels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })

		serviceCells.row[ idx ].Td3 = tag('td', serviceCells.row[ idx ].Id, '', {'width':"25%"} )
		gMethods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': serviceCells.row[ idx ].Td3,
            'domName': "gMethods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })

		serviceCells.row[ idx ].Td4 = tag('td', serviceCells.row[ idx ].Id, '', {'width':"25%"} )
		gAcquiredBy[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
			'pParentId': serviceCells.row[ idx ].Td4,
			'domName': "gAcquiredBy['"+pOBJ.title+"']['"+idx+"']",
			'listHeader':'acquiredBy', 
			'list': dbResults.acquiredByList
		})

		serviceCells.row[ idx ].Td5 = tag('td', serviceCells.row[ idx ].Id, '', {'width':"15%"} )
		serviceCells.row[ idx ].Td5dataId = addServiceCurrencySelector( serviceCells.row[ idx ].Td5, idx ) 
		serviceCells.row[ idx ].Td6 = tag('td', serviceCells.row[ idx ].Id, '', {'width':"15%"} )
		serviceCells.row[ idx ].Td6dataId = addServicesScore( serviceCells.row[ idx ].Td6, pOBJ.percentage )
	}
}

