import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  font-size: 18px;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
export const MargD = styled.div`
  margin-bottom: 4%;
`;
export const MargR = styled.div`
  margin-right: 2%;
`;
export const Form = styled.form`
  position: absolute;

  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  font-size: 16px;
  border-radius: 5px;

  color: #fff;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;
export const Label = styled.label`
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 20px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;
export const Button = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin-left: 120px;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  :hover,
  &focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  :focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  :active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;

export const Dom = styled.div`
  position: relative;

  display: flex;
  box-sizing: border-box;
  > ${Link} {
    margin-left: 100px;
    margin-top: 25px;
    text-decoration: none;
  }
`;

export const TestForm = styled.form`
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  color: #666;
`;
export const TestInput = styled.input`
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;
export const TestButton = styled.button`
  background-color: #8ebf42;
  color: white;
  padding: 14px 0;
  margin-bottom: 5%;
  border: none;
  cursor: grabbing;
  width: 100%;
  :hover {
    opacity: 0.8;
  }
`;

export const TestDiv = styled.div`
  position: relative;
  margin-bottom: 5%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TestSelect = styled.select`
  background-color: #0563af;
  color: white;
  padding: 12px;
  width: 250px;
  margin-top: 0%;
  margin-left: 2%;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  ::before {
    content: "\f13a";
    font-family: FontAwesome;
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  :hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const OL = styled.ol`
  counter-reset: li;
  list-style: none;
  margin-left: 2%;
  width: 30%;
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
`;

export const LI = styled.li`
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 2em;
  margin: 0.5em 0;
  background: #dad2ca;
  color: #444;
  text-decoration: none;
  border-radius: 0.3em;
  transition: 0.3s ease-out;
  :hover {
    background: #e9e4e0;
  }
  :hover:before {
    transform: rotate(360deg);
  }
  :before {
    content: counter(li);
    counter-increment: "+";
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #f9dd94;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: 0.3em solid #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all 0.3s ease-out;
  }
`;

// export const Container = styled.div`
//   display: grid;
// `;
