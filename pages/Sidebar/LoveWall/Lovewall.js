import React, { Component } from 'react';
import Image from 'next/image';
class Lovewall extends Component {
    constructor(props) {
        super(props);
        this.state={
            imgSrc:'/img/v2-377cbc612b5e1d8decc3a70f142176a1_1440w.jpg',
            lastDays:'n年n月n日'
        }
    }
    render() { 
        this.getNowTime();
        return ( 
            <>
            <div className='loveCard'>
                <div>
                    <i className='iconfont'>&#xe995;</i>
                    <span>恋爱墙</span>
                </div>
                <div className='loveLine'>
                    <img
                    src={this.state.imgSrc}
                    className='loveImage'
                    />
                    <i className='iconfont'>&#xe60b;</i>
                    <img
                    src={this.state.imgSrc}
                    className='loveImage'
                    />
                </div>
                <div>
                    已经：{this.state.lastDays}
                </div>
            </div>
            <style jsx>
                {`
                    .loveCard{
                        width:240px;
                        margin-bottom: 16px;
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
                        padding:10px
                    }
                    .loveLine{
                        text-align:center
                    }
                    .loveImage{
                        width: 50px;
                        height: 50px;
                        vertical-align: -20px;
                        border-radius: 50%;
                        margin-right: 5px;
                        margin-bottom: 5px;
                        -webkit-box-shadow: 1px 1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 10%);
                        box-shadow: 1px 1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 10%), 1px 1px 1px rgb(0 0 0 / 10%);
                        border: 2px solid #fff;
                    }
                    @font-face {
                        font-family: 'iconfont';  /* Project id 3166164 */
                        src: url('//at.alicdn.com/t/font_3166164_f7c0896jtm.woff2?t=1643426303586') format('woff2'),
                             url('//at.alicdn.com/t/font_3166164_f7c0896jtm.woff?t=1643426303586') format('woff'),
                             url('//at.alicdn.com/t/font_3166164_f7c0896jtm.ttf?t=1643426303586') format('truetype');
                    }
                `}
            </style>
            </>
         );
    }
    getNowTime(){
        var d1 = new Date();
        // console.log(d1);
        this.getCostTime(d1);
    }
    getCostTime(d1){
        var oldTime = '2017-05-20'
        var d2 = new Date(oldTime.replace(/-/g, "/"));
        // console.log(d2);
        var costTime = parseInt((d1.getTime()-d2.getTime())/1000);
        var year = Math.floor(costTime/(86400*365));
        costTime = costTime % (86400 * 365);
        var month = Math.floor(costTime/86400/30);
        costTime = costTime % (86400 * 30);
        var day = Math.floor(costTime/86400);
        this.state.lastDays = year+'年'+month+'月'+day+'天';
        // console.log(year+'年'+month+'月'+day+'天')
    }
}
 
export default Lovewall;