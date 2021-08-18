
interface BinTree {
    root: number;
    left?: BinTree;
    right?: BinTree;
};

const TreePreArray = (tree : BinTree):number[] => 
{
    //console.log("asd");
    let list : number[] = [tree.root];
    const TreePreArrayInner = (tree : BinTree , list : number[]) =>
    {
        //console.log("22");
        if (tree.left) 
            {
                list.push(tree.left.root);
                TreePreArrayInner(tree.left , list);
            }
        if (tree.right != null)
            {
                list.push(tree.right.root);
                TreePreArrayInner(tree.right , list);
            }
    }
    TreePreArrayInner(tree , list);    
    return list;
}


const assert = require('assert');

function testTreePreArray():String {
    //test #1 - tree size
    let myFirstTree:BinTree = {
        root: 1 , 
        right: {
            root: 5 , 
            right : {
                root : 13
            } , 
            left : {
                root : 8
            }
        } , 
        left : {
            root: 1 , 
            right : {
                root : 3
            } , 
            left : {
                root : 2
            }
        }
    }
    let arr:number[] = TreePreArray(myFirstTree);
    assert.ok(arr.length === 7 , "Length check.");
    //test #2 - tree contant
    let mySecondTree:BinTree = {
        root: 3 , 
        right: {
            root: 65 , 
            right : {
                root : 9
            } , 
            left : {
                root : 35
            }
        } , 
        left : {
            root: 14 , 
            right : {
                root : 92
            } , 
            left : {
                root : 15
            }
        }
    }
    let arr2:number[] = TreePreArray(mySecondTree);
    let arr3:number[] = [3 , 14 , 15 , 92 , 65 , 35 , 9];
    assert.deepEqual(arr2 , arr3 , "Equality check.");
    //test #3 - combine trees
    let combinedTree:BinTree = {
        root : 0 , 
        right : mySecondTree , 
        left : myFirstTree
    }
    let combinedArray:number[] = TreePreArray(combinedTree);
    assert.deepEqual(combinedArray , [0].concat(arr , arr3) , "Combination test.");
    console.log("All is ok.")
    return true;
}
testTreePreArray();

const TreeInArray = (tree : BinTree):number[] => 
{
    let list : number[] = [];
    const TreeInArrayInner = (tree : BinTree , list : number[]) =>
    {
        if (tree.left) 
            {
                TreeInArrayInner(tree.left , list);
            }
        list.push(tree.root);
        //console.log(tree.root.toString());
        if (tree.right != null)
            {
                TreeInArrayInner(tree.right , list);
            }
    }
    TreeInArrayInner(tree , list);    
    return list;
}

function testTreeInArray():String {
    //test #1 - tree size
    let t1: BinTree = {
        root: 1 , 
        right: {
            root: 5 , 
            right : {
                root : 13
            } , 
            left : {
                root : 8
            }
        } , 
        left : {
            root: 1 , 
            right : {
                root : 3
            } , 
            left : {
                root : 2
            }
        }
    }
    let arr:number[] = TreeInArray(t1);
    assert.ok(arr.length === 7 , "Length check.");
    //test #2 - tree contant
    let t2: BinTree = {
        root: 84 , 
        right: {
            root: 590 , 
            right : {
                root : 45 , 
                left : {
                    root : 235
                }
            } 
        } , 
        left : {
            root: 71 , 
            right : {
                root : 81 , 
                right : {
                    root : 82
                } , 
                left : {
                    root : 82
                }
            } , 
            left : {
                root : 2
            }
        }
    }
    let arr2:number[] = TreeInArray(t2);
    let arr3:number[] = [2 , 71 , 82 , 81 , 82 , 84 , 590 , 235 , 45];
    assert.deepEqual(arr2 , arr3 , "Equality check.");
    //test #3 - combine trees
    let combinedTree: BinTree = {
        root : 0 , 
        right : t2 , 
        left : t1
    }
    let combinedArray:number[] = TreeInArray(combinedTree);
    //console.log(arr.concat([0] , arr3));
    assert.deepEqual(combinedArray , arr.concat([0] , arr3) , "Combination test.");
    console.log("All is ok.")
    return true;
}
testTreeInArray();

const TreePostArray = (tree : BinTree):number[] => 
{
    let list : number[] = [];
    const TreePostArrayInner = (tree : BinTree , list : number[]) =>
    {
        if (tree.left) 
            {
                TreePostArrayInner(tree.left , list);
            }
        if (tree.right != null)
            {
                TreePostArrayInner(tree.right , list);
            }
        list.push(tree.root);
    }
    TreePostArrayInner(tree , list);    
    return list;
}

function testTreePostArray():String {
    //test #1 - tree size
    let t1: BinTree = {
        root: 0 , 
        right: {
            root: 0 , 
            right : {
                root : 0
            } , 
            left : {
                root : 0
            }
        } , 
        left : {
            root: 0 , 
            right : {
                root : 0
            } , 
            left : {
                root : 0
            }
        }
    }
    let arr:number[] = TreePostArray(t1);
    assert.ok(arr.length === 7 , "Length check.");
    //test #2 - tree contant
    let t2: BinTree = {
        root: 23 , 
        right: {
            root: 19 , 
            right: {
                root: 17 , 
                left : {
                    root: 13
                }
            }
        }, 
        left : {
            root: 11, 
            right: {
                root: 7, 
                right: {
                    root: 5
                } , 
                left : {
                    root: 3
                }
            } , 
            left : {
                root: 2
            }
        }
    }
    let arr2:number[] = TreePostArray(t2);
    let arr3:number[] = [2 , 3, 5, 7, 11, 13, 17, 19, 23];
    assert.deepEqual(arr2 , arr3 , "Equality check.");
    //test #3 - combine trees
    let combinedTree: BinTree = {
        root : 0 , 
        right : t2 , 
        left : t1
    }
    let combinedArray:number[] = TreePostArray(combinedTree);
    //console.log(arr.concat([0] , arr3));
    assert.deepEqual(combinedArray , arr.concat(arr3 , [0]) , "Combination test.");
    console.log("All is ok.")
    return true;
}
testTreePostArray();

interface GBinTree<T> {
    root: T;
    left?: GBinTree<T>;
    right?: GBinTree<T>;
};

const GBinTreePreArray = <T>(tree : GBinTree<T>):T[] => 
{
    let list : T[] = [tree.root];
    const GBinTreePreArrayInner = (tree : GBinTree<T> , list : T[]) =>
    {
        if (tree.left) 
            {
                list.push(tree.left.root);
                GBinTreePreArrayInner(tree.left , list);
            }
        if (tree.right != null)
            {
                list.push(tree.right.root);
                GBinTreePreArrayInner(tree.right , list);
            }
    }
    GBinTreePreArrayInner(tree , list);    
    return list;
}

function testGBinTreePreArray():String {
    //test #1 - tree size
    let myFirstTree:GBinTree<boolean> = {
        root: true , 
        right: {
            root: true , 
            right : {
                root : true
            } , 
            left : {
                root : false
            }
        } , 
        left : {
            root: true , 
            right : {
                root : true
            } , 
            left : {
                root : false , 
                right : {
                    root : false , 
                    right : {
                        root: true
                    }
                }
            }
        }
    }
    let arr:boolean[] = GBinTreePreArray(myFirstTree);
    assert.ok(arr.length === 9 , "Length check.");
    //test #2 - tree contant
    let mySecondTree:GBinTree<string> = {
        root: "I love " , 
        right: {
            root: "they go by. " , 
            right : {
                root : "The Salmon of Doubt"
            } , 
            left : {
                root : "Douglas Adams, "
            }
        } , 
        left : {
            root: "deadlines. I love " , 
            right : {
                root : "they make as "
            } , 
            left : {
                root : "the whooshing noise "
            }
        }
    }
    let arr2:string[] = GBinTreePreArray(mySecondTree);
    
    let resString:string = arr2.join("");
    
    let shouldBeResString:string = "I love deadlines. I love the whooshing noise they make as they go by. " 
                           + "Douglas Adams, The Salmon of Doubt";
    assert.deepEqual(resString , shouldBeResString , "Equality check.");
    //test #3 - sub-tree
    let subTree:GBinTree<string> = mySecondTree.right;
    let subTreeArray:string[] = GBinTreePreArray(subTree);
    assert.deepEqual(subTreeArray.join("") , "they go by. Douglas Adams, The Salmon of Doubt" , "Sub-tree test.");
    console.log("All is ok.")
    return true;
}
testGBinTreePreArray();

const GBinTreeInArray = <T>(tree : GBinTree<T>):T[] => // @@@
{
    let list : T[] = [];
    const GBinTreeInArrayInner = (tree : GBinTree<T> , list : T[]) =>
    {
        if (tree.left) 
            {
                GBinTreeInArrayInner(tree.left , list);
            }
        list.push(tree.root);
        if (tree.right != null)
            {
                GBinTreeInArrayInner(tree.right , list);
            }
    }
    GBinTreeInArrayInner(tree , list);    
    return list;
}

function testGBinTreeInArray():String {
    //test #1 - tree size
    let t1: BinTree = {
        root: 1 , 
        right: {
            root: 5 , 
            right : {
                root : 13
            } , 
            left : {
                root : 8
            }
        } , 
        left : {
            root: 1
        }
    }
    let arr:number[] = GBinTreeInArray(t1);
    assert.ok(arr.length === 5 , "Length check.");
    //test #2 - tree contant
    let t2: BinTree = {
        root: "84" , 
        right: {
            root: "590" , 
            right : {
                root : "45" , 
                left : {
                    root : "235"
                }
            } 
        } , 
        left : {
            root: "71" , 
            right : {
                root : "81" , 
                right : {
                    root : "82"
                } , 
                left : {
                    root : "82"
                }
            } , 
            left : {
                root : "2"
            }
        }
    }
    let arr2:string[] = GBinTreeInArray(t2);
    let arr3:string[] = ["2" , "71" , "82" , "81" , "82" , "84" , "590" , "235" , "45"];
    assert.deepEqual(arr2 , arr3 , "Equality check.");
    
    //test #3 - combine trees
    let combinedTree: BinTree = {
        root : "0" , 
        right : t2 , 
        left : t1
    }
    let combinedArray:string[] = GBinTreeInArray(combinedTree);
    let arr1String : string[] = [];
    let i:number = 0;
    for(;i<arr.length;i++){
        arr1String[i] = arr[i];
    }
    //console.log(arr.concat([0] , arr3));
    assert.deepEqual(combinedArray , arr1String.concat(["0"] , arr3) , "Combination test.");
    console.log("All is ok.")
    return true;
}
testGBinTreeInArray();

const GBinTreePostArray = <T>(tree : GBinTree<T>):T[] => // @@@
{
    let list : T[] = [];
    const GBinTreePostArrayInner = (tree : GBinTree<T> , list : T[]) =>
    {
        if (tree.left) 
            {
                GBinTreePostArrayInner(tree.left , list);
            }
        if (tree.right != null)
            {
                GBinTreePostArrayInner(tree.right , list);
            }
        list.push(tree.root);
    }
    GBinTreePostArrayInner(tree , list);    
    return list;
}

function testGBinTreePostArray():String {
    //test #1 - tree size
    let t1: GBinTree<number> = {
        root: -2
    }
    let arr:number[] = GBinTreePostArray(t1);
    assert.ok(arr.length === 1 , "Length check.");
    //test #2 - tree contant
    let t2: GBinTree<number> = {
        root: 23 , 
        right: {
            root: 19
        }, 
        left : {
            root: 11
        }
    }
    let arr2:number[] = GBinTreePostArray(t2);
    let arr3:number[] = [11, 19, 23];
    assert.deepEqual(arr2 , arr3 , "Equality check.");
    //test #3 - combine trees
    let combinedTree: GBinTree<number> = {
        root : 0 , 
        right : t2 , 
        left : t1
    }
    let combinedArray:number[] = GBinTreePostArray(combinedTree);
    //console.log(arr.concat([0] , arr3));
    assert.deepEqual(combinedArray , arr.concat(arr3 , [0]) , "Combination test.");
    console.log("All is ok.")
    return true;
}
testGBinTreePostArray();

import * as R from 'ramda'; 
const KSubsets = (set: any[] , k:number):any[][] => {// Define the type and the function
    let result:any[][] = [];
    let i:number = 0;
    let j:number = 0;
    function KSubsetsInner(leftElements:any[] , chosenElements:any[]) {
        //console.log("typeof(chosenElements): " + typeof(chosenElements));
        //console.log("Array.isArray(chosenElements): " + Array.isArray(chosenElements));
        //console.log("chosenElements = " + chosenElements.join(","));
        //console.log("leftElements = " + leftElements.join(","));
        if (chosenElements.length === k) {
            //console.log((i++).toString()+".0");
            result.push(chosenElements);
            //console.log(chosenElements.join());
        } else if (leftElements.length + chosenElements.length < k) {
            //console.log((i++).toString()+".1");
        } else {
            //console.log((i++).toString()+".2");
            KSubsetsInner(leftElements.slice(1,leftElements.length) , chosenElements.slice(0));
            let afterAddition:any[] = chosenElements.slice(0);
            afterAddition.push(leftElements[0]);
            KSubsetsInner(leftElements.slice(1,leftElements.length) , afterAddition);
        }
    }
    let c:any[] = [];
    KSubsetsInner(set , c);
    return result;
}

fact = (a:number):number => a === 0 ? 1 : fact(a-1)*a;
nCk = (n:number , k:number):number => fact(n)/(fact(k)*fact(n-k));


function convert2DArrayToSetOfSets (arr:any[][]):Set {
    let arrayOfSets:Set[] = [];
    for (let j:number = 0; j<arr.length; j++) {
        arrayOfSets.push(new Set(arr[j]));
    }
    return new Set(arrayOfSets);
}

function testKSubsets(){
    //test #1
    let q1 = [];
    let r1 : any[][] = KSubsets(q1 , 3);
    assert.ok(0 === r1.length , "Empty set result length");
    
    //test #2
    let q2 : any[] =  ["a" , true , 1 , 2 , -17 , false];
    let k:number = 3;
    let r2 : any[][] = KSubsets(q2 , k);
    assert.ok(nCk(q2.length,k) === r2.length , "Non empty result length check.");
    
    //test #3 
    let wantedResult:number[][] = [[0,1] , [0,2] , [0,3] , [1,2] , [1,3] , [2,3]];
    let actualResult:number[][] = KSubsets([0,1,2,3] , 2);
    assert.deepEqual(convert2DArrayToSetOfSets(wantedResult) , convert2DArrayToSetOfSets(actualResult) , "Contant equality");
    console.log("All is ok.");
    return true;
}
testKSubsets();



const AllSubsets = (set : any[]):Array<Array<any>> => { // <define the type and the function>
    let resultLength:number = Math.pow(2,set.length);
    let result:Array<Array<any>> = new Array<Array<any>>(resultLength);
    for (let l:number=0; l<result.length; l++){
        result[l] = new Array<any>();
    }
    let add:boolean = true;
    let bulkLength:number = 0;
    let current2ToJPower:number = 1;
    for (let j:number=0; j<set.length; j++){
        current2ToJPower = Math.pow(2,j);
        for (let k:number=0; k<resultLength; k++){
            if(add) result[k].push(set[j]);
            bulkLength++;
            if(bulkLength == current2ToJPower) {
                add = !add;
                bulkLength = 0;
            }
        }
    }
    return result;
}


function testAllSubsets(){
    const set0:number[] = new Array<number>(0);
    const res0:number = 1;
    const set1:number[] = [0,1,2];
    const res1:number[][] = [[0,1,2] , [1,2] , [0,2] , [2] , [0,1] , [1] , [0] , []];
    const set2:string[] = ["fdsfsd" , "asdd" , "ewrwr" , "vcrewrf" , "jlksd" , "psdpds"];
    const res3:number = Math.pow(2,set2.length);
    
        
    assert.ok(AllSubsets(set0).length === res0 , "Empty set result length.");
    assert.deepEqual(convert2DArrayToSetOfSets(AllSubsets(set1)) , convert2DArrayToSetOfSets(res1) , "Content equality.");
    assert.ok(convert2DArrayToSetOfSets(AllSubsets(set2)).size === res3 , "Non empty set result length.");
    console.log("All is ok.")
    return true;
}

testAllSubsets();


/*
let result:Array<Array<number>> = AllSubsets([0,1,2]);
for (let j:number = 0; j<result.length; j++){
    console.log("[" + result[j].join() + "]");
}
*/


const flatmap = <T>(f:(A:T[])=>any[] , A:T[]) => {
    let result:T[] = [];
    //console.log(result);
    for(let j:number = 0; j<A.length; j++){
        result = result.concat(f(A[j]));
    }
    
    return result;
}

function testFlatMap(){
    let ar1:number[] = [1,2,5,6];
    assert.deepEqual(flatmap((x)=>x[0], [[[1,2], [3,4]], [[5,6], [7,8]]]) ,  ar1 , "Content equality.");
    assert.deepEqual(flatmap((x)=>(x===true) , [true, false]) , [true, false] , "Boolean array equality.");
    const t:boolean = true;
    const f:boolean = false;
    assert.deepEqual(flatmap((x)=>(x%2 === 0) , [1,2,3,4,5,6,7,8]) , [f,t,f,t,f,t,f,t] , "IsEven?");
    console.log("All is ok.")
    return true;
}
testFlatMap();
//console.log([1,2,5,6]);
//console.log(flatmap((x)=>x[0], [[[1,2], [3,4]], [[5,6], [7,8]]]));

let movieLists = [
            {
                name: "Instant Queue",
                videos : [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            },
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            }
        ]

interface extendedBoxart {
    id: number;
    title: string;
    width: number;
    height: number;
    url: string;
};

interface boxart {
    width: number;
    height: number;
    url: string; 
};

interface Video {
    id:number;
    title:string;
    boxarts:boxart[];
    url:string;
    rating:number;
    bookmark: {id:number, time:number}[];
};

function spreadVideos(x:any[]):any[] {
    let id:number = x.id;
    let title:string = x;
    
    //console.log("x = " , x);
    //console.log("x.boxarts = " , x.boxarts);
    let result:extendedBoxart[] = x.map(a => {
                                                
                                                //console.log("a = " , a);
                                                //console.log("a.b = " , a.boxarts);
                                                //let t:string = title;
                                                //let i:number = id;
                                                let boxs:any = a.boxarts;
                                                let arrayOfBox:any = boxs.filter(x => x.width === 150 && x.height === 200);
                                                let box:any = arrayOfBox.pop();
                                                //console.log(" arrayOfBox = " ,  arrayOfBox);
                                                let b = //:extendedBoxart = new extendedBoxart();
                                                {
                                                id : a.id,
                                                title : a.title,
                                                width: box.width,
                                                height: box.height,
                                                url:  box.url}
                                                return b;
                                                })
    console.log("result = " , result);
}

const getBoxarts = (l:any):Array<map> =>  {//
    let videosArray:any[] = l.map(x => x.videos);
    //console.log(videosArray);
    let videosArray2:any[] = videosArray.map(x => spreadVideos(x));
    //console.log(videoArray2);
    //let flatVideos:extendedBoxart[] = flatmap(x=>x , )
}

console.log(getBoxarts(movieLists));
