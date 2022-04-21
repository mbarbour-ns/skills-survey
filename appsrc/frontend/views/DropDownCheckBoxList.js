class DropDownCheckBoxList
{
    constructor(pOBJ) 
    {
        this.mode = "quiet"
        cl('pOBJ.domName: ' + pOBJ.domName, this.mode )
        this.dropDownSet
        this.domName = pOBJ.domName
        this.listHeader = pOBJ.listHeader
        this.list = pOBJ.list
        this.title = pOBJ.title
        cl('pOBJ.title: ' + pOBJ.title, this.mode )
        
        this.setDropDown({
            'listHeader': pOBJ.listHeader, 
            'list': pOBJ.list
        })

        this.makeCheckBoxList(pOBJ.pParentId)
        this.dropDownSet.showCheckBoxList()
    }

    getElxId( pId ){
        return document.getElementById( pId )
    }

    makeCheckBoxList(pParentId) 
    {
        cl('pParentId' + pParentId, this.mode)
        this.dropDownSet.parentId = pParentId

        cl("makeCheckBoxList:" + this.dropDownSet, this.mode);

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
                //THIS WORKS: onclick:'cl("ping");'
                // THIS WORKS: onclick:"this.dropDownSet[ 'fruit ' ].getValues();"
                onclick:this.domName + '.dropDownSet.getValues();'
            })
            tag('label',li[ i ],this.dropDownSet.list[ i ],{})
        }
    }

    getBitmap() {
        return this.dropDownSet.bitmap;
    }
    setBitmap( pBitMap ) {
        this.dropDownSet.bitmap = pBitMap;
        // update the checkboxes
        for( let i in this.dropDownSet.checkboxIds ){
            getElxId( this.dropDownSet.checkboxIds[ i ]).checked = false
            if( (pBitMap >> i )& 0x0001 === 1 ){
                getElxId( this.dropDownSet.checkboxIds[ i ]).checked = true
            }
        }
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
                cl( tag + "." + this.type + ": "+ this.bitmap, this.mode )
            },
            showCheckBoxList:function()
            {
                this.mode = 'quiet'
                cl('showCheckBoxList: ' + this.id , this.mode)
                cl('show checkBoxListId: ' + this.checkBoxListSpanId , this.mode)
                cl('show checkBoxList ulId: ' +this.checkBoxListUlId , this.mode)

                let tid = document.getElementById( this.checkBoxListUlId )
                cl( 'show tid: ' + tid.id, this.mode )

                document.getElementById( this.checkBoxListSpanId ).onclick = function(evt) 
                {
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