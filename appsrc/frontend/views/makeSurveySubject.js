let recalcAll = function(){
	let serviceSkillSum = 0
	let ind = 0
	for( let idx in dbResults.serviceList ){
		serviceSkillSum += recalcIdx( idx )
		ind = idx
	}
	ind++
	console.log(" serviceSkillSum: " + serviceSkillSum + "/("+ind+")*100)*100)) = " + (serviceSkillSum/(ind*100))*100 )
}
let recalcIdx = function( pIdx, pTitle, pScore ){
    //score = (levels + methods) * acquiredBy * (currency/4)

    cl('  ' + getElxId( gCells[ pTitle ].row[ pIdx ].Td5dataId ).value )
	pScore = parseInt( pScore )/60*100;





    getElxId( gCells[ pTitle ].row[ pIdx ].Td6dataId ).setAttribute('style',"width:"+parseInt( pScore )+"%")
    getElxId( gCells[ pTitle ].row[ pIdx ].Td6dataId ).innerHTML=parseInt( pScore )+"%"
	return parseInt( pScore )
}
let recalc = function( pIdx, pTitle, pScore ){
    cl( 'recalc( "' + pIdx + '","' + pTitle + '","' + parseInt( pScore) + '") ...');// idx likee 'AppDev - Desktop'
    cl('  ' + getElxId( gCells[ pTitle ].row[ pIdx ].Td5dataId ).value )
	recalcIdx( pIdx, pTitle, pScore )
//	recalcAll()
}
let addMethodSelector = function( pId, idx ){
	let thisId = tag('select',pId,'',{'onchange':"recalc('" + idx +"');"})
	for( let idx in dbResults.methodList ){
		tag('option',thisId, dbResults.methodList[ idx ],{'value':idx})
	}
	return thisId;
}

let addScore = function( pId, score ){
	let thisId = tag('div', pId, '',{'class':"w3-light-grey w3-round-xlarge;"})
	let pgrBarId = tag('div', thisId, score,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+score })
	return pgrBarId;
}

//let devToolCells = []// gCells[ pOBJ.title ]
//devToolCells.row = []// gCells[ pOBJ.title ].row
let makeSurveySubject = function( pOBJ ){
    let idx = pOBJ.index
    let itemList = pOBJ.list
    gLevels[ pOBJ.title ] = []
    gMethods[ pOBJ.title ] = []
    gAcquiredBy[ pOBJ.title ] = []

    gCells[ pOBJ.title ] = []
    gCells[ pOBJ.title ].row = []

	let tbl = []
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pOBJ.parentId, '', {'width':"100%", 'style':"color: white; background-color:#002266;"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, pOBJ.label,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})

//	gCells[ pOBJ.title ].Id = tag('table', div1, '', {'width':"100%"})
	gCells[ pOBJ.title ].tableId = tag('table', div1, '', {'width':"100%", 'style':"color:white;"})
	gCells[ pOBJ.title ].Th1Id = tag('tr', gCells[ pOBJ.title ].tableId, '', {'width':"100%"})
	gCells[ pOBJ.title ].Th1Td1 = tag('th', gCells[ pOBJ.title ].Th1Id, 'DevTool', {'width':"25%", 'align':'left'} )
	gCells[ pOBJ.title ].Th1Td2 = tag('th', gCells[ pOBJ.title ].Th1Id, 'Level', {'width':"25%", 'align':'left'} )
	gCells[ pOBJ.title ].Th1Td3 = tag('th', gCells[ pOBJ.title ].Th1Id, 'Method', {'width':"15%", 'align':'left'} )
	gCells[ pOBJ.title ].Th1Td4 = tag('th', gCells[ pOBJ.title ].Th1Id, 'AcquiredBy', {'width':"15%", 'align':'left'} )
	gCells[ pOBJ.title ].Th1Td5 = tag('th', gCells[ pOBJ.title ].Th1Id, 'Currency', {'width':"15%", 'align':'left'} )
	gCells[ pOBJ.title ].Th1Td6 = tag('th', gCells[ pOBJ.title ].Th1Id, 'Score', {'width':"15%", 'align':'left'} )

	for( let idx in itemList ){
		gCells[ pOBJ.title ].row[ idx ] = {}
		gCells[ pOBJ.title ].row[ idx ].rowId = tag('tr', gCells[ pOBJ.title ].tableId, '', {'width':"100%",style:'vertical-align: top;'})
		gCells[ pOBJ.title ].row[ idx ].Td1 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId, itemList[ idx ], {'width':"25%"} )

		gCells[ pOBJ.title ].row[ idx ].Td2 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId,'', {'width':"25%"} )
		gLevels[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'title': itemList[ idx ],
            'pParentId': gCells[ pOBJ.title ].row[ idx ].Td2,
            'domName': "gLevels['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'level', 
            'list': dbResults.levelList// checkbox names
        })

		gCells[ pOBJ.title ].row[ idx ].Td3 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId, '', {'width':"25%"} )
		gMethods[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'title': itemList[ idx ],
            'pParentId': gCells[ pOBJ.title ].row[ idx ].Td3,
            'domName': "gMethods['"+pOBJ.title+"']['"+idx+"']",
            'listHeader':'method', 
            'list': dbResults.methodList// checkbox names
        })

		gCells[ pOBJ.title ].row[ idx ].Td4 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId, '', {'width':"25%"} )
		gAcquiredBy[ pOBJ.title ][ idx ] = new DropDownCheckBoxList({
            'title': itemList[ idx ],
			'pParentId': gCells[ pOBJ.title ].row[ idx ].Td4,
			'domName': "gAcquiredBy['"+pOBJ.title+"']['"+idx+"']",
			'listHeader':'acquiredBy', 
			'list': dbResults.acquiredByList// checkbox names
		})

		gCells[ pOBJ.title ].row[ idx ].Td5 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId, '', {'width':"15%"} )
		gCells[ pOBJ.title ].row[ idx ].Td5dataId = tag('select',gCells[ pOBJ.title ].row[ idx ].Td5,'',{
            'onchange':"recalc('" + idx + "','" + pOBJ.title + "','" + pOBJ.percentage +"');"
        })
        for( let idx2 in dbResults.currencyList ){
            tag(    'option', 
                    gCells[ pOBJ.title ].row[ idx ].Td5dataId, 
                    dbResults.currencyList[ idx2 ],
                    {'value':idx2}
            )
        }
        
		gCells[ pOBJ.title ].row[ idx ].Td6 = tag('td', gCells[ pOBJ.title ].row[ idx ].rowId, '', {'width':"15%"} )
		gCells[ pOBJ.title ].row[ idx ].Td6dataId = addScore( gCells[ pOBJ.title ].row[ idx ].Td6, pOBJ.percentage )
	}
}

