/*
 能发送ajax请求的函数模块
 包装axios
 函数的返回值是promise对象
 axios.get()/post()返回的就是promise对象
 */
// 封装ajax请求模块



import axios from 'axios'

export default function ajax(url='',data={},type='GET') {
  return new Promise(function (resolve,reject) {
    
    let promise
    //执行异步ajax请求
    
    //1.判断是get请求还是post请求
    if(type==='GET'){
      promise=axios.get(url,{params:data})
    } else {
      promise=axios.post(url,data)
    }
    
    //2.请求是否成功,以及要返回的信息
    
    promise.then(response=>{
     //成功
      resolve(response.data)
      
    }).catch(error=>{
      //所有错误的返回值
      alert('请求错误'+ error.message)
      
    })
  })

}
