// Create Phone Number
// 编写一个函数 10个整数组成的数组(Array [0-9]),
// 返回这些的数字格式     (123)456-7890

const createPhoneNumber = (digits) => {
    // return '(' + digits[0] + digits[1] + digits[2] + ')' + 
    //         digits[3] + digits[4] + digits[5] + '-' + digits[6] + 
    //         digits[7] + digits[8];
    // return `(${digits[0]}${digits[1]}${digits[2]})${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}${digits[8]}
    // `

    // splice会切掉数组，改变数组下标
    // return `(${digits.splice(0,3).join('')})${digits.splice(0,3).join('')}-${digits.splice(0,4).join('')}`;

    // slice不会切掉数组，不改变数组下标
    return `(${digits.slice(0,3).join('')})${digits.slice(3,6).join('')}-${digits.slice(6,10).join('')}`;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));