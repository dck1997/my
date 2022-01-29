import React, { Component } from 'react';
class WeiboCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'微博热搜',
            list:[
                {
                    title:'111',
                    href:'',
                    number:'9999'
                },
                {
                    title:'222',
                    href:'',
                    number:'9999'
                }
            ]
        }
    }
    // state = {  }
    render() { 
        return ( 
            <>
            <div className='weiboCard'>
                <div>{this.state.title}</div>
                <div className='content'>
                    <div className='myWeibo'>
                    <div className='wrap'>
                        <div className='weiboWrap'>
                        {
                            this.state.list.map((item,index)=>{
                                return <div 
                                            key={index}
                                            className='listContainer'
                                            >
                                            <div className='leftContainer'>
                                                <div>{index+1}</div>
                                                <div>
                                                    <a href={item.href}>{item.title}</a>
                                                </div>
                                            </div>
                                            <div>{item.number}</div>
                                        </div>
                            })
                        } 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <style jsx>
                   {`
                        .weiboCard{
                            border-radius: 10px;
                            box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
                        }
                        .content{
                            padding: 8px 16px
                        }
                        .wrap{
                            height: 300px;
                            width: 100%;
                            margin: 0 auto;
                            overflow: hidden
                        }
                        .listContainer{
                            width: 100%;
                            line-height: 30px;
                            display: flex;
                            justify-content: space-between;
                            font-size: 12px;
                            height: 30px;
                        }
                        .leftContainer{
                            left:10px;
                            display:flex;
                        }
                   `}
            </style>
            </>

         );
    }
}
 
export default WeiboCard;