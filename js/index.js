$.ajax({
    url:"http://127.0.0.1/w/website/bannerList",
    type:"get",
    data:{},
    success:function(res){
        for(var i = 0; i < res.data.length; i++){
            if(i == 0){
                $(".carousel-indicators").append(
                    `<li data-target="#carousel-example-generic" data-slide-to="${i}" class="active dian"></li>`
                )
                $(".carousel-inner").append(
                    `<div class="item active">
                        <img src="${res.data[i].img}" alt="...">
                        <div class="carousel-caption">
                        </div>
                    </div>`
                )
            }else{
                $(".carousel-indicators").append(
                    `<li  class="dian" data-target="#carousel-example-generic" data-slide-to="${i}"></li>`
                )
                $(".carousel-inner").append(
                    `<div class="item">
                        <img src="${res.data[i].img}" alt="...">
                        <div class="carousel-caption">
                        </div>
                    </div>`
                )
            }
        }
    }
})

function fn(a,info){
    $.ajax({
    url:"http://127.0.0.1/w/website/findGoodsList",
    type:"get",
    data:{
        info:info,
        pageNo:1
    },
    success:function(res){
        var nz = res.data.tbk_dg_material_optional_response.result_list.map_data;
        var str = "";
        console.log(res)
        for(var i = 0; i < 3; i++){
            a.append(
                `<li>
                    <img src="${nz[i].pict_url}" alt="">
                    <p>${nz[i].title}</p>
                  <span>￥${nz[i].zk_final_price}</span>
                </li>`
              )
        }
    }
})
}
fn($(".girlz"),"女装");
fn($(".boyz"),"男装");
fn($(".yi"),"医药");
fn($(".ls"),"零食");
fn($(".xie"),"鞋子箱包");
fn($(".home"),"家居百货");


var loc = JSON.parse(localStorage.getItem("dl"));
if(loc){
    $.ajax({
        url:"http://192.168.1.107:3000/users/userinfo",
        type:"get",
        data:{
            username:loc.use,
            token:loc.token
        },
        success:function(res){
            $(".join").html(
                `<a href="javascript:;">${res.userinfo.username}</a>
                <span>|</span>
                <a class="zhc" href="javascript:;">退出登录</a>`
            )
            $(".zhc").click(function(){
                $(".join").html(
                    `<a class="denl" target="blank" href="denglu.html">登录</a>
                        <span>|</span>
                    <a class="zhc" target="blank" href="zhuce.html">注册</a>`
                )
                localStorage.clear("dl");
            })  
        }
    })
}