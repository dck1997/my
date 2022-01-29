import React, { Component } from 'react';
import WeiboItem from './WeiboItem';
class WeiboCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'微博热搜',
            list:[
                {
                    title:'1',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'2',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'3',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'4',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'5',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'6',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'7',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'8',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'9',
                    href:'www.baidu.com',
                    number:'9999'
                },
                {
                    title:'10',
                    href:'www.baidu.com',
                    number:'9999'
                },
            ]
        }
    }
    // state = {  }
    render() { 
        return ( 
            <>
            <div className='weiboCard'>
                <header
                className='title'
                >
                <a
                href='https://s.weibo.com/top/summary?cate=realtimehot'
                target='_blank'
                >
                    <i className='iconfont'>&#xe600;</i>
                    <span className='titleName'>{this.state.title}</span>
                </a>
                </header>
                <div className='content'>
                    <div className='myWeibo'>
                    <div className='wrap'>
                        <div className='weiboWrap'>
                            <div className='weiboWraps'>
                        {
                            this.state.list.map((item,index)=>{
                                return <div key={index}>
                                        <WeiboItem
                                        item={item}
                                        index={index}
                                        />
                                        </div>
                            })
                        } 
                        </div>
                        <div className='weiboWraps'>
                        {
                            this.state.list.map((item,index)=>{
                                return <div key={index}>
                                        <WeiboItem
                                        item={item}
                                        index={index}
                                        />
                                        </div>
                            })
                        } 
                        </div>
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
                            width:240px;
                        }
                        .title{
                            border-top-left-radius: 10px;
                            border-top-right-radius: 10px;
                            padding: calc(16px - 2px);
                            font-size: 0.875rem;
                            padding-bottom: 0;
                        }
                        .titleName{
                            font-weight: bold;
                            padding-left:5px
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
                        .weiboWrap{
                            transform: translate(0px, -1px);
                            transition: all 0ms ease-in 0s;
                            overflow: hidden
                        }
                        .weiboWraps{
                            overflow: hidden
                        }
                        @font-face {
                            font-family: 'iconfont';  /* project id 3166126 */
                            src: url('');
                            src: url('?#iefix') format('embedded-opentype'),
                            url('//at.alicdn.com/t/font_3166126_vmrkoy23bnk.woff2') format('woff2'),
                            url('//at.alicdn.com/t/font_3166126_vmrkoy23bnk.woff') format('woff'),
                            url('//at.alicdn.com/t/font_3166126_vmrkoy23bnk.ttf') format('truetype'),
                            url('#iconfont') format('svg');
                        }
                   `}
            </style>
            </>

         );
    }
}
 
export default WeiboCard;