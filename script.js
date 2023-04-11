function fibonacci(num) {
// your code here
	if(num==1 || num==2){
		return num-1;
	}
	return fibonacci(num-2)+fibonacci(num-1);
}

module.exports = fibonacci;
