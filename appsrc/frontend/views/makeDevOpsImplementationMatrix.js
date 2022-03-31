let devOpsImplCells = []
devOpsImplCells.row = []

let makeDevOpsImplementationMatrix = function( pId, title, itemList )
{
	let tbl = []
	tbl = {}
	tbl.Id = tag('table', pId, '', {'width':"100%"})
	tbl.Tr1Id = tag('tr', tbl.Id, '', {'width':"100%"})
	tbl.Tr1Td1 = tag('td', tbl.Tr1Id, '', {'width':"75%"} )
	let btn = tag('button', tbl.Tr1Td1, title,
		{'class':"collapsible"})
	let div1 = tag('div', tbl.Tr1Td1, '', {'class':"content"})

	devOpsImplCells.Id = tag('table', div1, '', {'width':"100%"})
	devOpsImplCells.Th1Id = tag('tr', devOpsImplCells.Id, '', {'width':"100%"})
	devOpsImplCells.cols = []
	for( let i in itemList )
	{
		devOpsImplCells.cols[ i ] = tag('th', devOpsImplCells.Th1Id, itemList[ i ], {'width':"15%", 'align':'left'} )
	}	

	tbl.r = []
	let r = 0
	for( let i in dbResults.serviceList ){
		tbl.r[ r ] = {} 
		tbl.r[ r ].id = tag('tr', devOpsImplCells.Id, '', {'width':"100%"})

		tbl.r[ r ].c = []
		let c = 0
		tbl.r[ r ].c[ c ] = {}
		tbl.r[ r ].c[ c ].id = tag('td', tbl.r[ r ].id,  dbResults.serviceList[ i ], {
			'style': "border: 1px solid #dddddd; text-align: left; padding: 8px;",
			'width':"100%"
		})

		let cols = 0
		for( let indx in itemList ){
			cols++
		}
		  
		for( let ind=0; ind<cols-1; ind++){
			c++
			tbl.r[ r ].c[ c ] = {}
			tbl.r[ r ].c[ c ].id = tag('td', tbl.r[ r ].id, '', {
				'style': "border: 1px solid #dddddd; text-align: left; padding: 8px;",
				'width':"100%"
			})
			tbl.r[ r ].c[ c ].checkboxId 
				= tag('input',
					tbl.r[ r ].c[ c ].id,
					'',
					{'type':'checkbox'});
		}

		r++;
	}
}
