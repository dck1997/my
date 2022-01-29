import React, { Component } from 'react';
class WeiboItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div 
                className='listContainer'
                >
                <div className='leftContainer'>
                    <div
                    style={this.props.index+1 <= 3 ? {color:'red'} : {color:'#fe962e'}}
                    >{this.props.index+1}</div>
                    <div
                    className='weiboHotItem'
                    style={this.props.index+1 == 10 ? {'padding-left':'10px'} : {'padding-left':'20px'}}
                    >
                        <a href={this.props.item.href}>{this.props.item.title}</a>
                    </div>
                </div>
                <div>{this.props.item.number}</div>
            </div>
            <style jsx>
                {`
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
 
export default WeiboItem;