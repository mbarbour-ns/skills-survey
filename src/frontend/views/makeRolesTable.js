let recalcAllRoless = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdxRoles( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdxRoles = function( idx ){
	/*console.log('RECALC!' + pId + ' @ ' + idx + ":", 
		document.getElementById( rolesCells.row[ idx ].Td2dataId ).value,
		document.getElementById( rolesCells.row[ idx ].Td3dataId ).value,
		document.getElementById( rolesCells.row[ idx ].Td4dataId ).value
	)*/
	let newScore = 
		document.getElementById( rolesCells.row[ idx ].Td2dataId ).value *
		document.getElementById( rolesCells.row[ idx ].Td3dataId ).value *
		document.getElementById( rolesCells.row[ idx ].Td4dataId ).value;
	newScore = newScore/60*100;
	document.getElementById( rolesCells.row[ idx ].Td5dataId ).setAttribute('style',"width:"+newScore+"%")
	document.getElementById( rolesCells.row[ idx ].Td5dataId ).innerHTML=newScore+"%"
	return newScore
}
let recalcRoless = function( idx ){
	recalcIdxRoles( idx )
	recalcAllRoless()
}
let addRolesLevelSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcRoless('" + idx + "');"})
	for( let idx in dbResults.levelList ){
		tag('option',thisId, dbResults.levelList[ idx ],{'value':idx})
	}
	return thisId;
}
let addRolesMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcRoless('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}
let addRolesCurrencySelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalcRoless('" + idx +"');"})
	for( let idx in dbResults.currencyList ){
		tag('option',thisId, dbResults.currencyList[ idx ],{'value':idx})
	}
	return thisId;
}
let addRolessScore = function( pId, score ){
	let thisId = tag('div',pId,'',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div',thisId,score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

let rolesCells = []
rolesCells.row = []
let makeRolesTable = function( pOBJ ){
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

	rolesCells.Id = tag('table', div1, '', {'width':"100%"})
	rolesCells.Th1Id = tag('tr', rolesCells.Id, '', {'width':"100%"})
	rolesCells.Th1Td1 = tag('th', rolesCells.Th1Id, 'Roles', {'width':"25%", 'align':'left'} )
	rolesCells.Th1Td2 = tag('th', rolesCells.Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	rolesCells.Th1Td3 = tag('th', rolesCells.Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	rolesCells.Th1Td4 = tag('th', rolesCells.Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	rolesCells.Th1Td5 = tag('th', rolesCells.Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		rolesCells.row[ idx ] = {}
		rolesCells.row[ idx ].Id = tag('tr', rolesCells.Id, '', {'width':"100%"})
		rolesCells.row[ idx ].Td1 = tag('td', rolesCells.row[ idx ].Id, itemList[ idx ], {'width':"25%"} )


		rolesCells.row[ idx ].Td2 = tag('td', rolesCells.row[ idx ].Id,'', {'width':"25%"} )
		levels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': rolesCells.row[ idx ].Td2,
            'domName': "levels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList
        })
//		rolesCells.row[ idx ].Td2dataId = addRolesLevelSelector( rolesCells.row[ idx ].Td2, idx ) 

		rolesCells.row[ idx ].Td3 = tag('td', rolesCells.row[ idx ].Id, '', {'width':"25%"} )
		methods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'pParentId': rolesCells.row[ idx ].Td3,
            'domName': "methods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList
        })
//		rolesCells.row[ idx ].Td3dataId = addRolesMethodSelector( rolesCells.row[ idx ].Td3, idx ) 


		rolesCells.row[ idx ].Td4 = tag('td', rolesCells.row[ idx ].Id, '', {'width':"15%"} )
		rolesCells.row[ idx ].Td4dataId = addRolesCurrencySelector( rolesCells.row[ idx ].Td4, idx ) 
		rolesCells.row[ idx ].Td5 = tag('td', rolesCells.row[ idx ].Id, '', {'width':"15%"} )
		rolesCells.row[ idx ].Td5dataId = addRolessScore( rolesCells.row[ idx ].Td5, pOBJ.percentage )
	}
}

