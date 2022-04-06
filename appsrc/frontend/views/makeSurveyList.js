let makeSurveyList = function( pObj ){
//    pObj.pId, pObj.index, pObj.title, pObj.checkList, pObj.pct ){
	let tbl = []
	//console.log( pObj.checkList + "(" + typeof pObj.checkList + ")" )
	tbl[ pObj.index ] = {}
	tbl[ pObj.index ].Id = tag('table', pObj.parentId, '', {'width':"100%"})
	tbl[ pObj.index ].Tr1Id = tag('tr', tbl[ pObj.index ].Id, '', {'width':"100%"})
	tbl[ pObj.index ].Tr1Td1 = tag('td', tbl[ pObj.index ].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[ pObj.index ].Tr1Td1, pObj.title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[ pObj.index ].Tr1Td1, '', {'class':"content"})
	let p = []
	let cnt = 0
	for( let s in pObj.list ){
		//console.log('xlist: ' + s  )
		p[ cnt ] = tag('p',div1,'',{})
		tag('input', p[ cnt ], '',
			{
				'id': pObj.list[ s ],
				'type':'checkbox', 
				'value':true,
				'name': pObj.list[ s ],
				'onclick':"update('"+ pObj.list[ s ] + "');" // can't send the pObj.checkList objext here
		})
		tag('label', p[ cnt ], pObj.list[ s ], {})
		cnt++
	}
	tbl[ pObj.index ].Tr1Td2 = tag('td', tbl[ pObj.index ].Tr1Id, '', {'width':"25%"} )
	let pgBar = tag('div',tbl[ pObj.index ].Tr1Td2,'',{'class':"w3-light-grey w3-round-xlarge;"})
	tag('div',pgBar, pObj.pct, {'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:" + pObj.pct })
}
