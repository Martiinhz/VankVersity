function imprimirPares() {
    let nums = { dos: 2, seis: 6, ocho: 8, tres: 3, cien: 100, sesenta: 60 };
    for (let key in nums) {
        const elemento = nums[key];
        if (elemento % 2 === 0) {
            console.log(`Propiedad: ${key}: ${elemento}`);
        }
    }
}