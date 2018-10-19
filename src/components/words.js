/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/10
    Time: 20:08
*/
import React,{Component} from 'react';
import '../public/css/words.css'

export default class Words extends Component{
    render(){
        return(
            <div id="words">
                <div id="words_" cellPadding="16">
                    <table>
                        <tbody>
                        <tr>
                            <th>留言者姓名</th>
                            <th>留言者邮箱</th>
                            <th>留言者文章</th>
                            <th>留言者内容</th>
                            <th colSpan="2">操作</th>
                        </tr>
                        <tr>
                            <td>zhongqw</td>
                            <td>2208982655@qq.com</td>
                            <td>java类的继承</td>
                            <td>写的真好!</td>
                            <td>回复</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td>zhongqw</td>
                            <td>2208982655@qq.com</td>
                            <td>c的指针</td>
                            <td>写的真好!</td>
                            <td>回复</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td>zhongqw</td>
                            <td>2208982655@qq.com</td>
                            <td>我不是药神</td>
                            <td>写的真好!</td>
                            <td>回复</td>
                            <td>删除</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}