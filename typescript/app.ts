const num1Elements=document.getElementById('num1') as HTMLInputElement;
const num2Elements=document.getElementById('num2')as HTMLInputElement;
const buttonElements = document.querySelector('button')!;

const numResult:Array<number> = [];
const textResult: string[] = [];

type NumorString = number | string;
type Result = { val: number; timestamp: Date};

interface resultObj{
    val:number;
    timestamp:Date;
}

function add(num1:NumorString, num2:NumorString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if (typeof num1==='string' && typeof num2 === 'string'){
        return num1+' '+num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj : Result) {
    console.log(resultObj.val);
}

buttonElements.addEventListener('click', () =>{
    const num1=num1Elements.value;
    const num2=num2Elements.value;
    const result= add(+num1, +num2);
    numResult.push(result as number);
    const stringResult = add(num1, num2);
    textResult.push(stringResult as string)
    console.log(result);
    console.log(numResult, textResult);
    printResult({val: result as number , timestamp: new Date() });
});

const myPromsie = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});

myPromsie.then((result) => {
    console.log(result.split('w'));
})