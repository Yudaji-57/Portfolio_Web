var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown=keycheck;
document.onkeyup=uncheckCtrlShift;

function keycheck()
{
      switch(event.keyCode){ 
        case 123:event.keyCode='';return false; break; //F12
        case 17:event.keyCode='';keydownCtrl=1;return false; break; //컨트롤키
      }
	
      if(keydownCtrl) return false;
}

function uncheckCtrlShift()
{
      if(event.keyCode==17)      keydownCtrl=0;
      if(event.keyCode==16)      keydownShift=0;
}


	function click()
{
    if ((event.button==2) || (event.button==2)) 
		{alert('마우스 오른쪽 버튼을 클릭할 수 없습니다.');}
}
document.onmousedown=click;