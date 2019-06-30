'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();


function isEven(num){
    if(num === 0){
        return false;
    }
    return num % 2 === 0;
};

function add(num1, num2){
    return num1 + num2;
};

describe('Number tests', function(){
    describe('isEven', function(){
        it('should return true when and even number is passed as argument', function(){
            isEven(2).should.be.true;
            isEven(-4).should.be.true;
        });
        it('should be false when an odd number or 0 is passed as argument', function(){
            isEven(0).should.be.false;
            isEven(3).should.be.false;
            isEven(-5).should.be.false;
        });
    });
    describe('add', function(){
        var num;
        this.beforeEach(function(){
            num = 5;
        });
        it('should return 10 when 5 + 5 are added',function(){
            add(num, 5).should.be.equal(10);
            add(5, num).should.be.equal(10);
        });
        it('should be 0 when 5 and -5 are added', function(){
            add(num, -5).should.be.equal(0);
            add(-5, num).should.be.equal(0);
        });      
    });
}); 



