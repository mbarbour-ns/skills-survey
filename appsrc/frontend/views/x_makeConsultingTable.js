let makeConsultingTable = function(pId, idx, title, checkList, pct ){
	let tbl = []
	//console.log( checkList + "(" + typeof checkList + ")" )
	tbl[idx] = {}
	tbl[idx].Id = tag('table', pId, '', {'width':"100%"})
	tbl[idx].Tr1Id = tag('tr', tbl[idx].Id, '', {'width':"100%"})
	tbl[idx].Tr1Td1 = tag('td', tbl[idx].Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl[idx].Tr1Td1, title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl[idx].Tr1Td1, '', {'class':"content"})
	let p = []
	let cnt = 0
	for( let s in checkList ){
		//console.log('xlist: ' + s  )
		p[ cnt ] = tag('p',div1,'',{})
		tag('input', p[ cnt ], '',
			{
				'id': checkList[ s ],
				'type':'checkbox', 
				'value':true,
				'name': checkList[ s ],
				'onclick':"update('"+ checkList[ s ] + "');" // can't send the checkList objext here
		})
		tag('label', p[ cnt ], checkList[ s ], {})
		cnt++
	}
	tbl[idx].Tr1Td2 = tag('td', tbl[idx].Tr1Id, '', {'width':"25%"} )
	let pgBar = tag('div',tbl[idx].Tr1Td2,'',{'class':"w3-light-grey w3-round-xlarge;"})
	tag('div',pgBar,pct,{'class':"w3-container w3-blue w3-round-xlarge", 'style':"width:"+pct })
}
