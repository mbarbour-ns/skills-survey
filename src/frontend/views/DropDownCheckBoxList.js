class DropDownCheckBoxList
{
    constructor(pOBJ) 
    {
        console.log('pOBJ.domName: ' + pOBJ.domName)
        this.dropDownSet
        this.domName = pOBJ.domName
        this.listHeader = pOBJ.listHeader
        this.list = pOBJ.list

        this.setDropDown({
            'listHeader': pOBJ.listHeader, 
            'list': pOBJ.list
        })

        this.makeCheckBoxList(pOBJ.pParentId)
        this.dropDownSet.showCheckBoxList()
    }

    makeCheckBoxList(pParentId) 
    {
        console.log('pParentId' + pParentId)
        this.dropDownSet.parentId = pParentId

        console.log("makeCheckBoxList:" + this.dropDownSet);

        this.divIds = tag('div', this.dropDownSet.parentId, '',
        { 
            class:"dropdown-checkbox-list", 
            tabindex:"100"
        })
        this.dropDownSet.checkBoxListSpanId = tag('span', this.divIds, 'Select '+this.dropDownSet.type,{ 
            width:"90%;",
            class:"anchor",
            style:"background-color: #aaaaaa;"
        } )
        let ulId = this.dropDownSet.checkBoxListUlId = tag('ul', this.divIds,'',{ class:'items' })
        let li = []
        for( let i in this.dropDownSet.list )
        {
            li[ i ] = tag( 'li', ulId,'',{})
            this.dropDownSet.checkboxIds[ i ] = tag( 'input', li[ i ], '', { 
                type:"checkbox",
                //THIS WORKS: onclick:'console.log("ping");'
                // THIS WORKS: onclick:"this.dropDownSet[ 'fruit ' ].getValues();"
                onclick:this.domName + '.dropDownSet.getValues();'
            })
            tag('label',li[ i ],this.dropDownSet.list[ i ],{})
        }
    }

    getBitmap() {
        return this.dropDownSet.bitmap;
    }

    setDropDown(pList)
    {
        let tag = this.domName
        this.dropDownSet = {
            parentId:'',
            id:'',
            type: pList.listHeader,
            checkBoxListSpanId:'',
            checkBoxListUlId:'',
            list:pList.list,
            checkboxIds:[],
            bitmap:0,
            getValues:function()
            {
                this.bitmap = 0;
                for(let i in this.list)
                {
                    if( document.getElementById( this.checkboxIds[ i ] ).checked )
                    {
                        this.bitmap = this.bitmap + (1<<i)
                    }
                }
                console.log( tag + "." + this.type + ": "+ this.bitmap )
            },
            showCheckBoxList:function()
            {
                console.log('showCheckBoxList: ' + this.id )
                console.log('show checkBoxListId: ' + this.checkBoxListSpanId )
                console.log('show checkBoxList ulId: ' +this.checkBoxListUlId )

                let tid = document.getElementById( this.checkBoxListUlId )
                console.log( 'show tid: ' + tid.id )
                console.log( 'typeof : ' +  typeof document.getElementById( this.checkBoxListSpanId ) )

                document.getElementById( this.checkBoxListSpanId ).onclick = function(evt) 
                {
                    console.log( 'in onclick typeof : ' +  typeof document.getElementById( tid.id ) )
                    if (document.getElementById( tid.id ).style.display === "block")
                    {
                        document.getElementById( tid.id ).style.display = "none"
                    }else{
                        document.getElementById( tid.id ).style.display = "block"
                    }
                }
            }
        }  
    }
}