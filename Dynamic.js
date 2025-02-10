//objects are dynamic in nature

//object cloning

//-->spread operator

let src={
    val1 :12,
    val2: 13,
    val3: 14
}

let dest={...src};

src.val1=90; // only src val changes coz dest is copy by val not refrence copy

console.log(src,dest)

//-->assign method

let dest2=Object.assign({val0:34},src) //multiple obj can be copied


src.val1=0;
console.log(src);
console.log(dest2);
//iteration->loop





