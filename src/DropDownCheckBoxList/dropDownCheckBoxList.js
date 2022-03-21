class dropDownCheckBoxList
{
    constructor() 
    {
        //create and define objects
        this.divCtr = 0;
        this.divIds = [];
        this.cblId = ''
        this.dropDownSet = [];
        this.tblId = tag('table','1','',{} );
        this.tr1Id = tag( 'tr', this.tblId, '', {style:'vertical-align: top;'} );
        this.td1Id = tag( 'td', this.tr1Id, '', {} );
        this.td2Id = tag( 'td', this.tr1Id, '', {} );
        this.td3Id = tag( 'td', this.tr1Id, '', {} );
    }

    lists = {
        'level':[
                    'unknown',
                    'know_what_its_for',
                    'used_and_understood',
                    'used_in_custom_project',
                    'used_frequently',
                    'used_frequently_and_in_depth',
        ],
        'method':[
					'unused',
					'can_use_via_console',
					'can_use_via_CLI',
					'can_use_via_IaC',
					'can_integrate_with_Tooling',
					'can_configure_via_console',
					'can_configure_via_CLI',
					'can_configure_via_IaC',
					'can_configure_in_multi_regions',	
					'can_extend_with_custom_tools',
        ]
    }

    mapBits()
    {
        console.log( "mapBits: ")
        this.bitmap = 0;
            for(let i in this.list)
            {
                if( document.getElementById( this.checkboxIds[ i ] ).checked )
                {
                    this.bitmap = this.bitmap + (1<<i)
                }
            }
            console.log( "mapBits: " + this.type + ": "+ this.bitmap )
    }

    initializeListObject( pType )
    {
        this.dropDownSet[ pType ] = {
            id:'',
            parentId:this.td1Id,
            name:"dropDownSet[ '" + pType +"' ]",
            type: pType + 'List',
            list: this.lists[ pType ],
            checkboxIds:[],
            bitmap:0,
            getValues:function(){
                this.bitmap = 0;
                for(let i in this.list){
                    if( document.getElementById( this.checkboxIds[ i ] ).checked ){
                        this.bitmap = this.bitmap + (1<<i)
                    }
                }
                console.log( this.type + ": "+ this.bitmap )
            }
        }
        return pType;
    }

    makeCheckBoxList( pType ) 
    {
        this.divCtr++
        this.divIds[ this.divCtr ] = tag('div', this.dropDownSet[ pType ].parentId, '',
        {
            id: pType, 
            class:"dropdown-checkbox-list", 
            tabindex:"100"
        })
        console.log(this.divIds[ this.divCtr ])
        let divId
        this.dropDownSet[ pType ].id = divId = this.divIds[ this.divCtr ]
        console.log(this.divIds[ this.divCtr ], divId)
        tag('span', divId, 'Select '+this.dropDownSet[ pType ].type,{ class:"anchor"} )
        this.cblId = tag('ul', divId,'',{ class:'items' })
        let li = []
        for( let i in this.dropDownSet[ pType ].list )
        {
            li[ i ] = tag( 'li', this.cblId,'',{})
            this.dropDownSet[ pType ].checkboxIds[ i ] = tag( 'input', li[ i ], '', 
            { 
                type:"checkbox",
                // THIS WORKS: onclick:'console.log("ping");'
                // THIS WORKS: onclick:"dropDownSet[ 'fruit ' ].getValues();"
                onclick: 'fuckya();'
            })
            tag('label',li[ i ],this.dropDownSet[ pType ].list[ i ],{})
        }
    }
}