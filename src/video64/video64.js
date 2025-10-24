console.log("video 64")

const doSomthing = () => {
    const a = 10, b = 1;

    if (b === 0) {
        throw new Error("Thực hiện chia cho 0")
    }
    return a / b
}
try {
    doSomthing();
} catch (error) {
    console.log("có lỗi xảy ra", error)
} finally {
    console.log("run final")
}
