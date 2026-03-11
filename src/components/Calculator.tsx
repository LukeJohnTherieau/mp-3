import styled from "styled-components";
import { useState, useEffect, useEffectEvent } from 'react'


const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;             
    width:50%;                       
    background-color: gray;   
    padding: 2%;
    border-radius: 10px;  
    @media  screen and (max-width: 1000px) {
        border-radius: 0px;                      
    }                                   
`;

const CalculatorOutput = styled.h4`
    outline: 2px solid black;        
    border-radius: 1px;
    width: 100%;
    height: calc(12px + 1vw);                  
    font-size: calc(12px + 1vw);
    background-color: white;      
    @media  screen and (max-width: 1000px) {
        height: calc(18px + 1.5vw);                 
        font-size: calc(18px + 1.5vw);
    }                                    
`;

const CalculatorButtonGroup = styled.div`
    width: 100%;                                   
`;

const CalculatorInputGroup = styled.div`
    display: flex;
    flex-direction: row;   
    @media  screen and (max-width: 1000px) {
        font-size: calc(18px + 1.25vw);
    }                                 
`;

const CalculatorButtonRow = styled.div`
    display: flex;
    flex-direction: row;                               
`;

const CalculatorButton = styled.button`
    width:100%        
                       
`;

const CalculatorInput = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width: 50%;     
    @media  screen and (max-width: 1000px) {
        font-size: calc(12px + 1.25vw);
    }                 
`;

const CalculatorInputLabel = styled.label`
    font-size: calc(8px + 1.25vw);
    font-weight: 500;
    padding:2%;
    color: black;             
`;

export default function Calculator(){
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [operation, setOperation] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const updateOutput = useEffectEvent(() => {
        if (firstNumber && secondNumber && operation){
            let answer;
            // Instead of 5 seperate functions, I decided to use a switch statement and get the text from the element (button) that calls the single function
            switch (operation) {
                case "+":
                    answer = Number(firstNumber) + Number(secondNumber);
                    break;
                    
                case "-":
                    answer = Number(firstNumber) - Number(secondNumber);
                    break;

                case "*":
                    answer = Number(firstNumber) * Number(secondNumber);
                    break;

                case "/":
                    answer = Number(firstNumber) / Number(secondNumber);
                    break;

                case "**":
                    answer = Number(firstNumber);   
                    for (let i = 1; i < Number(secondNumber); i++){
                        answer *= Number(firstNumber);
                    }
                    break;

                case "Clear":
                    setFirstNumber("");
                    setSecondNumber("");
                    answer = "";
                    break;
            };
            setOutput(String(answer));

        } else {
            setOutput("");
        };

    });

    useEffect(() => {
        updateOutput();
    }, [firstNumber, secondNumber, operation]);


    return (
        <CalculatorContainer>
            <CalculatorOutput>{output}</CalculatorOutput>
            <CalculatorButtonGroup>
                <CalculatorButtonRow>
                    <CalculatorButton onClick = {() => {setOperation("+")}}>+</CalculatorButton>
                    <CalculatorButton onClick = {() => {setOperation("-")}}>-</CalculatorButton>
                </CalculatorButtonRow>
                <CalculatorButtonRow>
                    <CalculatorButton onClick = {() => {setOperation("*")}}>*</CalculatorButton>
                    <CalculatorButton onClick = {() => {setOperation("/")}}>/</CalculatorButton>
                </CalculatorButtonRow>
                <CalculatorButtonRow>
                    <CalculatorButton onClick = {() => {setOperation("**")}}>**</CalculatorButton>
                    <CalculatorButton onClick = {() => {setOperation("Clear")}}>Clear</CalculatorButton>
                </CalculatorButtonRow>
            </CalculatorButtonGroup>
            
            <CalculatorInputGroup>
                <CalculatorInput>
                    <CalculatorInputLabel>First Number:</CalculatorInputLabel>
                    <input type="number" onChange = {(event) => {setFirstNumber(event.target.value)}} value = {firstNumber}></input>
                </CalculatorInput>
                <CalculatorInput>
                    <CalculatorInputLabel>Second Number:</CalculatorInputLabel>
                    <input type="number" onChange = {(event) => {setSecondNumber(event.target.value)}} value = {secondNumber}></input>
                </CalculatorInput>
            </CalculatorInputGroup>
        </CalculatorContainer>
    );
}