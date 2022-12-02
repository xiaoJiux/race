import { $axios } from "@/utils/http";
import { fmtTime } from "@/utils/getTime";
import { Toast } from "vant";

export default async function addPoint(info,user){
  let {data} =await $axios({
    method:'post',
    url:'/points/save',
    data:{
      number:2,
      info,
      date:fmtTime(),
      user,
      add:2
    }
  })
  if(data.code === 0){
    Toast.success('获得2积分!')
  }
}
