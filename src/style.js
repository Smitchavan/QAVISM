import styled from "styled-components";

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
