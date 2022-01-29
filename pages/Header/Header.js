import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[
                {
                    name:'首页',
                    href:'/',
                    icon:''
                },
                {
                    name:'文档',
                    href:'',
                    icon:''
                },   
                {
                    name:'归档',
                    href:'',
                    icon:''
                },   
                {
                    name:'标签',
                    href:'',
                    icon:''
                },   
                {
                    name:'分类',
                    href:'',
                    icon:''
                },   
                {
                    name:'关于',
                    href:'',
                    icon:''
                },   
                {
                    name:'友情链接',
                    href:'',
                    icon:''
                },   
                {
                    name:'留言板',
                    href:'',
                    icon:''
                },   
                {
                    name:'更多',
                    href:'',
                    icon:''
                },   
                ]
        }
    }
    // state = {  }
    render() { 
        return (
            <>
            <div className='header'>
            <div className='headerContent'>
                <div>Ban</div>
                <ul className='menu'>
                    {
                        this.state.list.map((item,index)=>{
                            return <div 
                                    key={index+item.name}
                                    className='menuItem'>
                                    <a 
                                    title={item.name}
                                    href={item.href}
                                    >
                                        <i></i>
                                        <span>{item.name}</span>
                                        <i></i>
                                    </a>
                                    </div>
                        })
                    }
                </ul>
            </div>
            </div>
            <style jsx>
                {`
                .header{
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 10;
                    width: 100%
                }
                .headerContent{
                    width: calc(70% + 260px);
                    height: 100%;
                    margin: 0 auto;
                    box-sizing: border-box;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center
                }
                .menu{
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    display: flex
                }
                .menuItem{
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    height: 100%;
                    line-height: 60px;
                    padding: 0 10px;
                    transition: background-color 0.3s
                }
                `}
            </style>
            </>
          );
    }
}
 
export default Header;