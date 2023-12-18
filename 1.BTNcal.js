let rst = document.getElementById("display1");
let cal = (num) => {
  rst.value += num;
};
let Result = () => {
  try {
    rst.value = eval(rst.value);
  } catch (error) {
	alert("enter the valid prompt")
  }
};
let clr=()=>{rst.value=" "}
let dlt=()=>{rst.value=rst.value.slice(0,-1)}
