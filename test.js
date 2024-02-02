function numeralCalculate(str) {
  const symbol = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  let numeralResult = 0;

  // loop ตาม length ของ string ที่ได้รับเข้ามาเพื่อหาค่า value
  for (let i = 0; i < str.length; i++) {
    // เก็บค่า value จาก key ใน string ตำแหน่งปัจจุบันและตำแหน่งถัดไป
    const currentValue = symbol[str[i]];
    const nextValue = symbol[str[i + 1]];

    if (currentValue) {
      // เทียบค่า value ตัวปัจจุบันและตัวถัดไป ถ้าค่าที่ตำแหน่งปัจจุบันมากกว่าค่าถัดไป ให้นำค่าถัดไปมาลบค่าปัจจุบัน เพื่อได้ค่าจริง
      if (currentValue < nextValue) {
        const deletionResults = nextValue - currentValue;
        numeralResult += deletionResults;
        // เมื่อมีการลบค่ากันไปแล้วให้ข้ามไปตัวถัดไป
        i++;
      } else {
        numeralResult += currentValue;
      }
    }
  }

  return numeralResult;
}

const output = numeralCalculate("AAA");
console.log("Output : " + output);
