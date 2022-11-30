import { Toast } from "vant";
import { $axios } from "@/utils/http";

export async function  joinHotLike(user,headlines,likeType){

  let {data} = await $axios({
    url:'/headlinesLike/save',
    method:'post',
    data:{
      user,headlines,likeType
    }
  })
  console.log (data)
  if(data.code === 0){
    Toast.success('点赞成功!')
  }

}
