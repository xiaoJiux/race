import axios from "axios";


export async function clickGood(user,posting){
  let {data} = await axios({
    url:'/postingLike/save',
    method:'post',
    data:{
      user,
      likeType:1,
      posting
    }
  })
}
