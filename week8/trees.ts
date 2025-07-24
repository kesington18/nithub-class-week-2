// recursion
/* function Sum(n:number): number {
    if (n < 0) {
        return 0;
    } else {
        return n + Sum(n-1);
    }
}
console.log(Sum(5)); */

/* function Sum(n:number): number {
    if(n <= 0) return 0;
    let counter = 0;
    for (let index = 0; index <= n; index++) {
        counter = counter + index;
        // console.log(counter);
    }
    return counter;
}
// Sum(5)
console.log(Sum(5)); */

// teachers correction
/* function Sumn(n:number): number {
    if(n <= 0) return 0;
    return Sumn(n - 1) + n;
}
console.log(Sumn(5)); */

// task 2
/* function fibo(n: number): number {
    if (n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    }
    return fibo(n -1) + fibo(n - 2);

}

console.log(fibo(7)); */


// leet code question
/* function inorderTraversal(root: TreeNode | null): number[] {
    if(root == null){
        return []
    }
    const left = inorderTraversal(root.left)
    const right = inorderTraversal(root.right)
    return [...left, root.val, ...right]

    // return []
}; */
// or
/* function inorderTraversal(root: TreeNode | null): number[] {
    if(root == null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
}; */