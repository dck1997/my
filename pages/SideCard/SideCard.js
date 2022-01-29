import React, { Component } from 'react';
class SideCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstTitle:'青墨书晚风',
            secondTitle:'副标题',
            comment:'春风不解禁杨花，蒙蒙乱扑行人面',
        }
    }
    // state = {  }
    render() { 
        return ( 
            <>
            <div className='sideCard'>
                <a className='avator'><img src={"/img/avatar.jpg"}></img></a>
                <div className='footContent'>
                    <span className='title'>{this.state.firstTitle}</span>
                    <span>{this.state.secondTitle}</span>
                    <span>{this.state.comment}</span>
                </div>
                <div className='iconList'>
                    <i className='iconfont'>&#xee19;</i>
                    <i className='iconfont'>&#xee49;</i>
                    <i className='iconfont'>&#xee4a;</i>
                </div>
            </div>
            <style jsx>
                {`
                .sideCard{
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    border-radius: 10px;
                    background: #fff;
                    box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
                }
                .avator{
                    align-self: center;
                    overflow: hidden;
                    position: relative;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    line-height: 0;
                }
                .footContent{
                    margin-top:15px;
                    line-height: 1.6;
                    font-family: Long Cang, cursive;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-weight: bold
                }
                .title{
                    font-size: 1.5rem;
                }
                .iconList{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin: 20px
                }
                @font-face {
                    font-family: 'iconfont';  /* project id 3165601 */
                    src: url('');
                    src: url('?#iefix') format('embedded-opentype'),
                    url('//at.alicdn.com/t/font_3165601_auunxnta37f.woff2') format('woff2'),
                    url('//at.alicdn.com/t/font_3165601_auunxnta37f.woff') format('woff'),
                    url('//at.alicdn.com/t/font_3165601_auunxnta37f.ttf') format('truetype'),
                    url('#iconfont') format('svg');
                  }
                .iconfont {
                    font-family: "iconfont" !important;
                    font-size: 16px;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                  }
                `}
            </style>
            </>
         );
    }
}
 
export default SideCar;