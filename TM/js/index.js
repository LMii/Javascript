window.onload=function(){
	let divs=document.getElementsByClassName('banner-bottom-left')[0];
	let uls=divs.getElementsByTagName('ul')[0];
    let lis=uls.getElementsByTagName('li');
    let banner_uls=document.getElementsByClassName('banner-aside');

    let banner_quan=document.getElementsByClassName('banner-bottom-quan')[0];
    let banner_quan_li=banner_quan.getElementsByTagName('li');
    let banner_bottom_quan1=document.getElementsByClassName('banner-bottom-quan1');

    let img1=document.getElementsByClassName('img1');

    let img_box=document.getElementsByClassName('banner-bottom-pic')[0];
    let img_li=img_box.getElementsByTagName('li');

    let banner_bottom=document.getElementsByClassName('banner-bottom')[0];
     


    /////////////////侧边栏出现/////////////////////////////////////
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseover=function(){
             banner_uls[i].style.display='block';
    	}
    	lis[i].onmouseout=function(){
             banner_uls[i].style.display='none';
    	}
    }

    ////////////////////////////////点击圆点出现对应的图片/////////////
    for(let i=0;i<banner_quan_li.length;i++){
    		banner_quan_li[i].onmouseover=function(){	
    		 //所有的消失  对应的显示，可以用z-index\opacity\display; 		
    		for(let j=0;j<banner_quan_li.length;j++){ 			
    				img1[j].style.display='none';
    				banner_bottom_quan1[j].className='banner-bottom-quan1';
    			
    		}
    		img1[i].style.display='block';
    		banner_bottom_quan1[i].className='banner-bottom-quan1 quan2';

    		switch(i){
        	case 0:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 1:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 2:
              banner_bottom.style.background='#CD0104';
              break;
            case 3:
              banner_bottom.style.background='#FADA60';
              break;
            case 4:
              banner_bottom.style.background='#130C04';
              break;
            case 5:
              banner_bottom.style.background='#8021C5';
              break;

        }    
    	}
    }
    // 窗口消失，点击显示
    /*let now=0;
    for(let i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].onmouseover=function(){
    	img1[now].style.display='none';
    	img1[i].style.display='block';
    	now=i;
    }
    }*/

     /*换成var将会报错 let会记录每个i的值，而var不会，当用i时，let将会保存，
     而var将会是最后一个值，不会记录每一个*/
   
    //解决办法1
    /*let now=0;
    for(var i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].index=i;
    	banner_quan_li[i].onmouseover=function(){    		
	    	img1[now].style.display='none';
	    	img1[this.index].style.display='block';
	    	now=this.index;
        }
    }*/
     
    /*for(var i=0;i<banner_quan_li.length;i++){
    	    banner_quan_li[i].index=i;
    		banner_quan_li[i].onmouseover=function(){	
    		 //所有的消失  对应的显示，可以用z-index\opacity\display; 		
    		for(let j=0;j<banner_quan_li.length;j++)   			
    			img1[j].style.display='none';
    		}
    		img1[this.index].style.display='block';
    	}  */
    
    //可以用闭包函数实现变量i的每次存储
    //解决办法2
    /*let now=0;
    for(var i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].onmouseover=(function(i){
    		return function(){    		
		    	img1[now].style.display='none';
		    	img1[i].style.display='block';
		    	now=i;
            }
        })(i)
    }*/
    
    
    /////////////////////////////banner轮播////////////////////////////////
    let t;
    let num=0;
    t=setInterval(move, 3000);
    function move(){
    	num++;//1
    	if(num==img1.length){
    		num=-1;
            move();
    	}
    	for(let j=0;j<img1.length;j++){
    		img1[j].style.display='none';
    		banner_bottom_quan1[j].className='banner-bottom-quan1';
    	}
        img1[num].style.display='block';
        banner_bottom_quan1[num].className='banner-bottom-quan1 quan2'; 
        switch(num){
        	case 0:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 1:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 2:
              banner_bottom.style.background='#CD0104';
              break;
            case 3:
              banner_bottom.style.background='#FADA60';
              break;
            case 4:
              banner_bottom.style.background='#130C04';
              break;
            case 5:
              banner_bottom.style.background='#8021C5';
              break;

        }    
    }
    //////////////////////////////////////////////////////////////////////////
    banner_bottom.onmouseover=function(){
        clearInterval(t);
    }
    banner_bottom.onmouseout=function(){
        t=setInterval(move,3000);
        //num=i;
    }

    ///////图片变化时背景也变/////////
    
    

    
}   
