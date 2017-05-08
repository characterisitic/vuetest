<template>
  <div class="moment">
     <v-header :titl="titl"></v-header>
     <ul class="list monents-list" v-if="moment.length>0">
          	<li v-for="momentlist in moment">
	        		<div class="head">
	        			<span class="thumb-wrap">
	        				<img :src="SYS_IMAGE_PATCH+SYS_IMAGE_PATCH_MEMBER_MIN+momentlist.mPicFileCompress"/>
	        			</span>
	        		</div>
	        		<div class="content-wrap">
	            		<div class="info">
	            			<h3><span>{{momentlist.nickName}}</span><i class="icon iconfont icon-wawa-boy"></i></h3>
			            	<p>{{momentlist.createTimeStr}}</p>
	            		</div>
	            		<div class="detail">
	            			<p class="tit">{{une(momentlist.content)}}</p>
	            			<div class="images-wrap" >
	            				<span class="thumb-wrap" v-for="image in momentlist.postPicFilesCompress ">
	            					<img :src="SYS_IMAGE_PATCH+SYS_IMAGES_PATCH_POST_MIN+image"/>
	            				</span>
	            		  </div>
	            			<p class="location">
	            				<i class="icon iconfont icon-wawa-position"><span>{{momentlist.position}}</span></i>
	            			</p>
	            		</div>
	            		<div class="state">
	            			<div class="like"><i class="icon iconfont icon-wawa-like"></i><span>{{momentlist.likeCount}}</span></div>
	            			<div class="comment"><i class="icon iconfont icon-wawa-comment"></i><span>{{momentlist.commentCount}}</span></div>
	            			<div class="dele">删除</div>	
	            		</div>
	        		</div>
	        	</li>
	    </ul>
    
  </div>
</template>

<script>
import vHeader from './header.vue'
export default {
  name: 'mine',
  components:{
    "v-header":vHeader
  },
  data () {
    return {
      msg: 'this is a monent',
      titl: {
        name:'哇友圈'
      },
      SYS_IMAGE_PATCH: "http://139.196.47.123:8081/wawaImg",
      SYS_IMAGE_PATCH_MEMBER_MIN: "/member/head-min/",
      SYS_IMAGES_PATCH_POST_MIN: "/post/images-min/",
      moment:{

      }
    }
  },
   created() {
    this.$ajax.get('http://139.196.47.123:8081/ww_api/post/getPostList/')
      .then((response) => {
        // console.log(response.data.data)
        this.moment = response.data.data
        console.log(this.moment[0].nickName)
      })
  },
  methods: {
    une(str) {
        var newStr = unescape(str).substr(0,50)
        return newStr;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
   @import '../assets/scss/common.scss';

   $widthOne:78px;
   $widthTwo:32px;

   .monents-list{
    li{
        // border-top: none !important;
        >.head{
            width: convert($widthOne+$widthTwo+25px);
            text-align: left;
            vertical-align: top;
            padding-top: convert($widthTwo);
            padding-bottom: convert($widthTwo);
            span{
                width:convert($widthOne);
            }
        } 
        >.content-wrap{
            padding-top: convert($widthTwo);
            padding-bottom: convert($widthTwo);
            padding-right: convert(32px) !important;
            .info{
                line-height: 1.2;
                h3{
                    font-weight: normal;
                    font-size: convert($nameSize);
                    text-align:left;
                    span{
                        max-width: 70%;
                        @include ellipsis;
                        
                    }
                    i{
                        font-size: convert($widthTwo+3px);
                        margin-left: convert(20px);
                        &.icon-wawa-boy{
                            color:#00a4ff;
                        }
                        &.icon-wawa-girl{
                            color:#ff1b4b;
                        }
                    }
                }
                p{
                     text-align:left;
                    padding-top: convert(20px);
                    font-size: convert($contentSize);
                    color: $placeholder;
                }
            }
            .detail{
              
                p{
                    &.tit{
                        padding : convert(15px) 0;
                        color: #5b5b5b;
                        font-size: convert(28px);
                        line-height: 1.5;
                        white-space: normal;
                        word-break: break-all;
                         text-align:left;
                    }
                    &.location{
                        text-align:left;
                        font-size: convert(26px);
                        line-height: 2.5;
                        color: #AFAFAF;
                        span{
                            padding-left: .4em;
                        }
                        i{
                            font-size: convert(26px);
                        }
                    }
                    
                }
                .images-wrap{
                    @include clearfix;
                    font-size:0;
                    span{
                        float:left;
                        width: 33.33%;
                        border:convert(5px) solid transparent;
                    }
                }
            }
            .state{
                width: 100%;
                @include clearfix;
                div{
                    float: left;
                    &.like{
                        width: 4em;
                        text-align: center;
                        font-size: convert(25px);
                        line-height: 2;
                        border-radius:convert(25px);
                        color: #afafaf;
                        background-color: #f6f6f6;
                       &.on{
                            background-color: $green;
                             color: #fff;
                       }
                        i{
                            margin-right:convert(10px);
                            font-size: convert(25px);
                        }
                    }
                    &.comment{
                        margin-left: 1.5em;
                        width: 4em;
                        text-align: center;
                        font-size: convert(25px);
                        line-height: 2;
                        border-radius:convert(25px);
                        color: #afafaf;
                        background-color: #f6f6f6;
                        i{
                            margin-right:convert(10px);
                            font-size: convert(25px);
                        }
                    }
                    &.dele{
                        float: right;
                        color: $green;
                        font-size: convert(25px);
                        line-height: 2;
                    }
                }
            }
        }
    }
}
</style>
