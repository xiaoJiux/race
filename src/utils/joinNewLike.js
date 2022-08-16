import { Toast } from "vant";
import { $axios } from "@/utils/http";

export async function  joinNewLike(user,study,likeType){
  let {data} = await $axios({
    url:'/studyLike/save',
    method:'post',
    data:{
      user,study,likeType
    }
  })
  if(data.code === 0){
    Toast.success('点赞成功!')
  }

}
