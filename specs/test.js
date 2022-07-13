describe("first unit test", function(){
    let increment = (number)=>{
        return ++number;
    }


    it("first test case", function(){
        let number = 1;
        expect(increment(number)).toBe(number + 1);
    });
});