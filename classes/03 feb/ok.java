class TestClass{​​​​​​​
    public static void main(String args[]) {​​​​​​​
        int avg=avg(args);
        System.out.println("The average is : "+avg);
    }​​​​​​​
    double avg(String [] x) {​​​​​​​
        int i = x.length();
        int sum;
        for(int j=0; j<i; j++) 
            sum = sum+Integer.parseInt(x[i]);
        return sum/i;
        System.out.println(sum);
    }​​​​​​​
}​​​​​​​