//var x = 20; //지역변수와 이름이 겹치지 않는 전역 변수 
/* global.x=20; */ //Node.js에서의 최상위 객체(전역 객체)
/* windows.x=20; */ // 브라우저에서의 최상위 객체 (전역 객체)
globalThis.x=20; //global과 window 객체를 상황에 맞게 사용해주는 전역 객체  웬만하면 전역은 var 대신 globalThis로 선언하자! 

function f(){
/*     var x=10; */ 
 /*    console.log(x) */
   /*  console.log(this.x); */ 
    /* 직접 객체에 지정한 게 아니므로 여기의 this는 우리가 특정지을 수 없는 필드임. 접근할 수 없는 필드. 지역변수와 전역변수가 겹치지 않을때만 사용
    최상위 객체의 필드에 선언 후 사용해야 함.  */
 /*    console.log(global.x); */
    console.log(globalThis.x);

/*     for(var i=0; i<10; i++){ */
    for(let i=0; i<10; i++){
    }
    console.log(i)
}
f();