// Categories Metadata Configuration
const categoriesData = [
  {
    id: "number",
    title: "Number Programs",
    pageTitle: "Number Programs Practice Log",
    description: "Practice logic-building programs on numbers, mathematical series, prime numbers, and digit manipulation.",
    icon: "🔢"
  },
  {
    id: "pattern",
    title: "Pattern Problems",
    pageTitle: "Pattern Problems by Hemanth Sir",
    description: "Master nested loops and matrix coordinate geometry with 58 star, alphabet, and numeric patterns.",
    icon: "🧩"
  },
  {
    id: "array",
    title: "Array Programs",
    pageTitle: "Array Programs & Algorithms Log",
    description: "Master array operations, sliding window, two-pointer techniques, searching, and sub-arrays.",
    icon: "📊"
  }
];

// Master Problem Dataset categorized by Module & Day (Java Only)
const problemsData = [
  // ==================== NUMBER PROGRAMS (Placeholder / Future Content) ====================
  {
    id: "num_1",
    category: "number",
    day: "day1",
    dayLabel: "Day 1",
    title: "1. Reverse a Number",
    difficulty: "easy",
    topic: "Number Operations",
    description: "Given an integer N, write a program to reverse its digits.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    sampleOutput: `Input: 12345\nOutput: 54321`,
    solutions: {
      java: `package com.study;

public class NumberPrograms {
    public static void main(String[] args) {
        int num = 12345;
        int rev = 0;
        while(num != 0) {
            int rem = num % 10;
            rev = rev * 10 + rem;
            num /= 10;
        }
        System.out.println("Reversed: " + rev);
    }
}`
    }
  },
  {
    id: "num_2",
    category: "number",
    day: "day1",
    dayLabel: "Day 1",
    title: "2. Check Armstrong Number",
    difficulty: "easy",
    topic: "Number Operations",
    description: "Check whether a given number is equal to the sum of cubes of its digits.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    sampleOutput: `Input: 153\nExplanation: 1³ + 5³ + 3³ = 153\nOutput: True`,
    solutions: {
      java: `package com.study;

public class NumberPrograms {
    public static void main(String[] args) {
        int num = 153, temp = num, sum = 0;
        while(temp != 0) {
            int rem = temp % 10;
            sum += rem * rem * rem;
            temp /= 10;
        }
        System.out.println(num == sum ? "Armstrong Number" : "Not Armstrong");
    }
}`
    }
  },

  // ==================== ARRAY PROGRAMS (Placeholder / Future Content) ====================
  {
    id: "arr_1",
    category: "array",
    day: "day1",
    dayLabel: "Day 1",
    title: "1. Find Largest Element in Array",
    difficulty: "easy",
    topic: "Array Basics",
    description: "Find and return the maximum element present in an integer array.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    sampleOutput: `Array: [10, 24, 45, 9, 88, 12]\nLargest: 88`,
    solutions: {
      java: `package com.study;

public class ArrayPrograms {
    public static void main(String[] args) {
        int[] arr = {10, 24, 45, 9, 88, 12};
        int max = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max) max = arr[i];
        }
        System.out.println("Largest element: " + max);
    }
}`
    }
  },

  // ==================== PATTERN PROBLEMS (58 Questions by Hemanth Sir) ====================
  // --- DAY 1 PATTERNS (31 Questions) ---
  {
    id: "q_p1",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "1. Middle Row as Star Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Given an odd size N, print a grid where only the middle row contains stars ('*') and other cells contain hyphens ('-').",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - - - -
- - - - - - -
- - - - - - -
* * * * * * *
- - - - - - -
- - - - - - -
- - - - - - -`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == (n / 2) + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p2",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "2. Middle Column as Star Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Given an odd size N, print a grid where only the middle column contains stars ('*') and other cells contain hyphens ('-').",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == (n / 2) + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p3",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "3. Plus Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Given an odd size N, print a plus (+) sign made of stars, combining both the middle row and middle column.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - * - - -
- - - * - - -
- - - * - - -
* * * * * * *
- - - * - - -
- - - * - - -
- - - * - - -`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == (n / 2) + 1 || col == (n / 2) + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p4",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "4. Primary Diagonal Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print stars along the main primary diagonal where row index equals column index (col === row).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - -
- * - - - - -
- - * - - - -
- - - * - - -
- - - - * - -
- - - - - * -
- - - - - - *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == row) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p5",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "5. Secondary Diagonal Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print stars along the secondary anti-diagonal where col + row === n + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - - - *
- - - - - * -
- - - - * - -
- - - * - - -
- - * - - - -
- * - - - - -
* - - - - - -`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col + row == n + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p6",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "6. X Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print an 'X' pattern by combining both primary diagonal (col === row) and secondary diagonal (col + row === n + 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - *
- * - - - * -
- - * - * - -
- - - * - - -
- - * - * - -
- * - - - * -
* - - - - - *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col + row == n + 1 || col == row) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p7",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "7. L-Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print the letter 'L' using stars along the first column (col === 1) and the bottom row (row === n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - -
* - - - - - -
* - - - - - -
* - - - - - -
* - - - - - -
* - - - - - -
* * * * * * *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == n || col == 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p8",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "8. Z-Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print the letter 'Z' using stars along top row (row === 1), bottom row (row === n), and anti-diagonal (row + col === n + 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
- - - - - * -
- - - - * - -
- - - * - - -
- - * - - - -
- * - - - - -
* * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == 1 || row == n || row + col == n + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p9",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "9. T-Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print the letter 'T' using stars along the top row (row === 1) and middle column (col === n / 2 + 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the Size:");
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == 1 || col == (n / 2 + 1)) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p10",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "10. I-Pattern",
    difficulty: "easy",
    topic: "Star Patterns",
    description: "Print the letter 'I' using stars along top row (row === 1), bottom row (row === n), and middle column.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
- - - * - - -
* * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the Size:");
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == 1 || col == (n / 2) + 1 || row == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p11",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "11. E-Pattern",
    difficulty: "medium",
    topic: "Star Patterns",
    description: "Print the letter 'E' using stars along first column (col === 1), top row (row === 1), middle row (row === n/2+1), and bottom row (row === n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
* - - - - - -
* - - - - - -
* * * * * * *
* - - - - - -
* - - - - - -
* * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the Size:");
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == 1 || row == n || row == (n / 2) + 1 || col == 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p12",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "12. Unsolved Pattern",
    difficulty: "medium",
    topic: "Star Patterns",
    description: "Print a custom geometric pattern with condition: col === 1 || col + row === n - 1 || row === col + 2.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - -
* - - - - * -
* - - - * - -
* - - * - - -
* - * - - - -
* * - - - - -
* - * - - - -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the Size:");
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || col + row == n - 1 || row == col + 2) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p13",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "13. K Pattern (Experimental)",
    difficulty: "medium",
    topic: "Star Patterns",
    description: "Experimental 'K' branch pattern with condition: col === 1 || row === col + n/2 || (row-1+col)*2 === n+1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - * - - -
* - * - - - -
* * - - - - -
* - * - - - -
* - - * - - -
* - - - * - -
* - - - - * -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || row == col + n / 2 || (row - 1 + col) * 2 == n + 1)
                    System.out.print("* ");
                else 
                    System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p14",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "14. K-Pattern",
    difficulty: "medium",
    topic: "Star Patterns",
    description: "Standard 'K' pattern using condition: col === 1 || row === col + n/2 || row + col === n - n/2 + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - * - -
* - - * - - -
* - * - - - -
* * - - - - -
* - * - - - -
* - - * - - -
* - - - * - -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || row == col + n / 2 || row + col == n - n / 2 + 1)
                    System.out.print("* ");
                else 
                    System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p15",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "15. S Pattern",
    difficulty: "medium",
    topic: "Star Patterns",
    description: "Partitioned square pattern with middle divider and corner segments.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
* - - - - - -
* - - - - - -
* * * * * * *
- - - - - - *
- - - - - - *
* * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 && row <= n / 2 || row == n / 2 + 1 || col == n && row > n / 2 || row == 1 || row == n)
                    System.out.print("* ");
                else 
                    System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p16",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "16. Ascending Descending Number Pattern",
    difficulty: "medium",
    topic: "Number Patterns",
    description: "Print numbers across columns ascending up to middle (n/2+1), then descending back.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1
1 2 3 4 3 2 1`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col <= n / 2 + 1)
                    System.out.print(col + " ");
                else if (col > n / 2)
                    System.out.print(n + 1 - col + " ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p17",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "17. Increment for Each Cell Number Pattern",
    difficulty: "easy",
    topic: "Number Patterns",
    description: "Print a continuous sequence of integers incremented for every cell in an N x N matrix.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `1 2 3
4 5 6
7 8 9`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 3;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        int i = 1;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                System.out.printf("%d ", i);
                i++;
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p18",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "18. Special Print: 1 in Odd Rows",
    difficulty: "easy",
    topic: "Number Patterns",
    description: "Print a grid where odd rows contain all '1's and even rows contain all '0's.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `1 1 1 1 1
0 0 0 0 0
1 1 1 1 1
0 0 0 0 0
1 1 1 1 1`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row % 2 != 0)
                    System.out.print("1 ");
                else
                    System.out.print("0 ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p19",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "19. Print 1 in Odd Columns / Alternate Elements",
    difficulty: "easy",
    topic: "Number Patterns",
    description: "Print alternate 1s and 0s based on odd sum of row and col indices: (row + col) % 2 !== 0.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `0 1 0
1 0 1
0 1 0`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 3;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if ((row + col) % 2 != 0)
                    System.out.print("1 ");
                else
                    System.out.print("0 ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p20",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "20. ABC in Each Row",
    difficulty: "easy",
    topic: "Alphabet Patterns",
    description: "Print letters starting from 'A' in each row, resetting to 'A' for every new row.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `A B C
A B C
A B C`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 3;
        char a = 'A';
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                System.out.print(a + " ");
                a++;
            }
            System.out.println();
            a = 'A';
        }
    }
}`
    }
  },
  {
    id: "q_p21",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "21. Alphabetical Order Pattern",
    difficulty: "easy",
    topic: "Alphabet Patterns",
    description: "Print continuous alphabetical letters across cells, preserving state across rows.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `A B C
D E F
G H I`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 3;
        char a = 'A';
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                System.out.print(a + " ");
                a++;
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p22",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "22. A-Alphabet Pattern",
    difficulty: "medium",
    topic: "Alphabet Patterns",
    description: "Print the ASCII art for letter 'A' using stars with condition: col === 1 || row === 1 || col === n || row === n/2 + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
*           *
*           *
* * * * * * *
*           *
*           *
*           *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || row == 1 || col == n || row == n / 2 + 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p23",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "23. B-Alphabet Pattern",
    difficulty: "medium",
    topic: "Alphabet Patterns",
    description: "Print the ASCII art for letter 'B' using stars with condition: col === 1 || row === 1 || col === n || row === n/2+1 || row === n.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
*           *
*           *
* * * * * * *
*           *
*           *
* * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || row == 1 || col == n || row == n / 2 + 1 || row == n)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p24",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "24. C-Alphabet Pattern",
    difficulty: "easy",
    topic: "Alphabet Patterns",
    description: "Print the ASCII art for letter 'C' using stars with condition: col === 1 || row === 1 || row === n.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * *
*            
*            
*            
*            
*            
* * * * * * *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == 1 || row == 1 || row == n)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p25",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "25. Right-Angle-Triangle",
    difficulty: "easy",
    topic: "Triangle Patterns",
    description: "Print a left-aligned right-angled triangle with condition: col <= row.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - -
* * - - - - -
* * * - - - -
* * * * - - -
* * * * * - -
* * * * * * -
* * * * * * *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 7;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col <= row)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p26",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "26. Right Angle Upper Hollow Triangle",
    difficulty: "medium",
    topic: "Triangle Patterns",
    description: "Print a hollow upper triangle with condition: col === row || col === 1 || row === n.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* . . . . . . . .
* * . . . . . . .
* . * . . . . . .
* . . * . . . . .
* . . . * . . . .
* . . . . * . . .
* . . . . . * . .
* . . . . . . * .
* * * * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col == row || col == 1 || row == n)
                    System.out.print("* ");
                else
                    System.out.print(". ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_p27",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "27. Left-Angle Half Lower Triangle",
    difficulty: "easy",
    topic: "Triangle Patterns",
    description: "Print a right-aligned lower half triangle with condition: col + row >= n + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `. . . . . . . . *
. . . . . . . * *
. . . . . . * * *
. . . . . * * * *
. . . . * * * * *
. . . * * * * * *
. . * * * * * * *
. * * * * * * * *
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col + row >= n + 1)
                    System.out.print("* ");
                else
                    System.out.print(". ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p28",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "28. Left-Angle Half Upper Hollow Triangle",
    difficulty: "medium",
    topic: "Triangle Patterns",
    description: "Print a hollow upper right-aligned triangle with condition: col + row === n + 1 || row === n || col === n.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `. . . . . . . . . . *
. . . . . . . . . * *
. . . . . . . . * . *
. . . . . . . * . . *
. . . . . . * . . . *
. . . . . * . . . . *
. . . . * . . . . . *
. . . * . . . . . . *
. . * . . . . . . . *
. * . . . . . . . . *
* * * * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 11;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (col + row == n + 1 || row == n || col == n)
                    System.out.print("* ");
                else
                    System.out.print(". ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p29",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "29. Right-Angle Half Upper Triangle",
    difficulty: "easy",
    topic: "Triangle Patterns",
    description: "Print an inverted upper triangle with condition: row <= col.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
  * * * * * * * *
    * * * * * * *
      * * * * * *
        * * * * *
          * * * *
            * * *
              * *
                *`,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 9;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row <= col)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p30",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "30. Isosceles Triangle",
    difficulty: "easy",
    topic: "Triangle Patterns",
    description: "Print an isosceles triangle with condition: row + col >= n + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `                        * 
                      * * 
                    * * * 
                  * * * * 
                * * * * * 
              * * * * * * 
            * * * * * * * 
          * * * * * * * * 
        * * * * * * * * * 
      * * * * * * * * * * 
    * * * * * * * * * * * 
  * * * * * * * * * * * * 
* * * * * * * * * * * * * `,
    solutions: {
      java: `package com.study;

public class Patt2 {
    public static void main(String[] args) {
        int n = 13;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col >= n + 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_p31",
    category: "pattern",
    day: "day1",
    dayLabel: "Day 1",
    title: "31. Upper Diamond / Pyramid Pattern",
    difficulty: "medium",
    topic: "Triangle Patterns",
    description: "Print the upper diamond region with condition: row + col > n/2 + 1 && row + n/2 >= col && row <= n/2 + 1.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `. . . . . . . * . . . . . . . .
. . . . . . * * * . . . . . . .
. . . . . * * * * * . . . . . .
. . . . * * * * * * * . . . . .
. . . * * * * * * * * * . . . .
. . * * * * * * * * * * * . . .
. * * * * * * * * * * * * * . .
* * * * * * * * * * * * * * * .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Patt2 {
    public static void main(String[] args) {
        int n = 17;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the size of table:");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col > n / 2 + 1 && row + n / 2 >= col && row <= n / 2 + 1)
                    System.out.print("* ");
                else
                    System.out.print(". ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },

  // --- DAY 2 PATTERNS (13 Questions) ---
  {
    id: "q_d2_p1",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "1. Right Angle Pascal Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a right-angled Pascal-like triangle growing and then shrinking (condition: row >= col && row + col <= n * 2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - -
* * - - -
* * * - -
* * * * -
* * * * *
* * * * -
* * * - -
* * - - -
* - - - -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row >= col && row + col <= n * 2) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p2",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "2. Right Angle Hollow Pascal Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollow boundary right-angled Pascal triangle (condition: row === col || row + col === n * 2 || col === 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - -
* * - - -
* - * - -
* - - * -
* - - - *
* - - * -
* - * - -
* * - - -
* - - - -`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == col || row + col == n * 2 || col == 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p3",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "3. Right Angle Complete Hollow Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print an inverse right-angled Pascal pattern filled on the outside (condition: row <= col || row + col >= n * 2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * *
- * * * *
- - * * *
- - - * *
- - - - *
- - - * *
- - * * *
- * * * *
* * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row <= col || row + col >= n * 2) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p4",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "4. Hollow of Upper One",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollowed outline of the inverse right-angled Pascal pattern (condition: row === col || row + col === n*2 || row === 1 || row === n*2-1 || col === n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * *
- * - - *
- - * - *
- - - * *
- - - - *
- - - * *
- - * - *
- * - - *
* * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row == col || row + col == n * 2 || row == 1 || row == n * 2 - 1 || col == n) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p5",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "5. Left Angle Pascal Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a left-aligned Pascal triangle growing from right to left (condition: row + col >= n + 1 && row - col <= n - 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - *
- - - * *
- - * * *
- * * * *
* * * * *
- * * * *
- - * * *
- - - * *
- - - - *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col >= n + 1 && row - col <= n - 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p6",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "6. Left Angle Hollow Pascal Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollow outline left-aligned Pascal triangle (condition: row + col === n + 1 || row - col === n - 1 || col === n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - *
- - - * *
- - * - *
- * - - *
* - - - *
- * - - *
- - * - *
- - - * *
- - - - *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col == n + 1 || row - col == n - 1 || col == n) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p7",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "7. Left Angle Complete Hollow Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print an inverted left-aligned Pascal pattern filled on left (condition: row + col <= n + 1 || row - col >= n - 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * *
* * * * -
* * * - -
* * - - -
* - - - -
* * - - -
* * * - -
* * * * -
* * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col <= n + 1 || row - col >= n - 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p8",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "8. Hollow of Upper Left Angle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollowed outline of the inverted left-aligned Pascal pattern (condition: row + col === n+1 || row - col === n-1 || row === 1 || row === n*2-1 || col === 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * *
* - - * -
* - * - -
* * - - -
* - - - -
* * - - -
* - * - -
* - - * -
* * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col == n + 1 || row - col == n - 1 || row == 1 || row == n * 2 - 1 || col == 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p9",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "9. Diamond / Reverse Pattern",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a symmetric centered diamond pattern (condition: row + col >= n/2+2 && row - col <= n/2 && col - row <= n/2 && row + col <= n+1+n/2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `      *      
    * * *    
  * * * * *  
* * * * * * *
  * * * * *  
    * * *    
      *      `,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 7;
        Scanner in = new Scanner(System.in);
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n; col++) {
                if (row + col >= n / 2 + 2 && row - col <= n / 2 && col - row <= n / 2 && row + col <= n + 1 + n / 2) {
                    System.out.print("* ");
                } else System.out.print("  ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p10",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "10. Up Sided Triangle",
    difficulty: "easy",
    topic: "Advanced Star Patterns",
    description: "Print a full symmetric pyramid / up-sided triangle (condition: row + col >= n + 1 && col - row <= n - 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - * - - - -
- - - * * * - - -
- - * * * * * - -
- * * * * * * * -
* * * * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col >= n + 1 && col - row <= n - 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p11",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "11. Up Side Hollow Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollow boundary up-sided triangle pyramid (condition: row + col === n + 1 || col - row === n - 1 || row === n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - * - - - -
- - - * - * - - -
- - * - - - * - -
- * - - - - - * -
* * * * * * * * *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col == n + 1 || col - row == n - 1 || row == n) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p12",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "12. Reverse of Upside Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print an inverted pyramid funnel filled on outer wings (condition: row + col <= n + 1 || col - row >= n - 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
* * * * - * * * *
* * * - - - * * *
* * - - - - - * *
* - - - - - - - *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col <= n + 1 || col - row >= n - 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },
  {
    id: "q_d2_p13",
    category: "pattern",
    day: "day2",
    dayLabel: "Day 2",
    title: "13. Reverse of Upside Hollow Triangle",
    difficulty: "medium",
    topic: "Advanced Star Patterns",
    description: "Print a hollow outline inverted pyramid funnel (condition: row === 1 || col === 1 || col === n*2-1 || row + col === n+1 || col - row === n-1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
* - - * - * - - *
* - * - - - * - *
* * - - - - - * *
* - - - - - - - *`,
    solutions: {
      java: `package com.study;
import java.util.Scanner;

public class Pattern3 {
    public static void main(String[] args) {
        int n = 5;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the value");
        n = in.nextInt();
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row == 1 || col == 1 || col == n * 2 - 1 || row + col == n + 1 || col - row == n - 1) {
                    System.out.print("* ");
                } else System.out.print("- ");
            }
            System.out.println();
        }
        in.close();
    }
}`
    }
  },

  // --- DAY 3 PATTERNS (14 Questions) ---
  {
    id: "q_d3_p1",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "1. Butterfly Program",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a symmetric butterfly pattern with wings meeting in the center (condition: row >= col && row + col <= 2*n || row + col >= n*2 && row <= col).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row >= col && row + col <= 2 * n || row + col >= n * 2 && row <= col)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p2",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "2. Hollow Butterfly Program",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a hollow outline butterfly pattern (condition: row === col || row + col === 2*n || col === 1 || col === 2*n - 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `*                 *
* *             * *
*   *         *   *
*     *     *     *
*       * *       *
*     *     *     *
*   *         *   *
* *             * *
*                 *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row == col || row + col == 2 * n || col == 1 || col == 2 * n - 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p3",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "3. Hour Glass",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a solid hourglass pattern wide at top and bottom, narrow at middle (condition: row <= col && row + col <= 2*n || row >= col && row + col >= 2*n).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
- * * * * * * * -
- - * * * * * - -
- - - * * * - - -
- - - - * - - - -
- - - * * * - - -
- - * * * * * - -
- * * * * * * * -
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row <= col && row + col <= 2 * n || row >= col && row + col >= 2 * n)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p4",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "4. Downside Pascal Triangle",
    difficulty: "easy",
    topic: "Complex & Symmetric Patterns",
    description: "Print an inverted triangle shrinking row by row downwards (condition: row <= col && row + col <= n * 2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
- * * * * * * * -
- - * * * * * - -
- - - * * * - - -
- - - - * - - - -`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row <= col && row + col <= n * 2)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p5",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "5. Down Side Hollow Triangle",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a hollow inverted triangle outline (condition: row === col || row + col === n * 2 || row === 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
- * - - - - - * -
- - * - - - * - -
- - - * - * - - -
- - - - * - - - -`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row == col || row + col == n * 2 || row == 1)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p6",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "6. Opp of Downside Pascal Triangle",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print outer corners filled around an inverted triangle opening (condition: row >= col || row + col >= n * 2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - - - *
* * - - - - - * *
* * * - - - * * *
* * * * - * * * *
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row >= col || row + col >= n * 2)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p7",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "7. Opp of Downside Hollow Pascal Triangle",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print outer corners outline around an inverted triangle (condition: row === col || row + col === n*2 || row === n || col === 1 || col === 2*n-1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* - - - - - - - *
* * - - - - - * *
* - * - - - * - *
* - - * - * - - *
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row == col || row + col == n * 2 || row == n || col == 1 || col == 2 * n - 1)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p8",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "8. Diamond Pattern",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a solid centered diamond on an N*2-1 grid (condition: row+col >= n+1 && row+n-1 >= col && row <= col+n-1 && row+col <= 3*n-1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - * - - - -
- - - * * * - - -
- - * * * * * - -
- * * * * * * * -
* * * * * * * * *
- * * * * * * * -
- - * * * * * - -
- - - * * * - - -
- - - - * - - - -`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col >= n + 1 && row + n - 1 >= col && row <= col + n - 1 && row + col <= 3 * n - 1)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p9",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "9. Hollow Diamond Pattern",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a hollow boundary diamond outline (condition: row+col === n+1 || row+n-1 === col || row === col+n-1 || row+col === 3*n-1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - - * - - - -
- - - * - * - - -
- - * - - - * - -
- * - - - - - * -
* - - - - - - - *
- * - - - - - * -
- - * - - - * - -
- - - * - * - - -
- - - - * - - - -`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col == n + 1 || row + n - 1 == col || row == col + n - 1 || row + col == 3 * n - 1)
                    System.out.print("* ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p10",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "10. Opp to Diamond Pattern",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print outer corners filled around a diamond-shaped opening in the center (condition: row+col <= n+1 || row+n-1 <= col || row >= col+n-1 || row+col >= 3*n-1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
* * * * - * * * *
* * * - - - * * *
* * - - - - - * *
* - - - - - - - *
* * - - - - - * *
* * * - - - * * *
* * * * - * * * *
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row + col <= n + 1 || row + n - 1 <= col || row >= col + n - 1 || row + col >= 3 * n - 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p11",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "11. Opp to Hourglass Pattern",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print side wings hourglass pattern (condition: row <= col && row+col <= n*2 || row+col >= n*2 && row >= col).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
- * * * * * * * -
- - * * * * * - -
- - - * * * - - -
- - - - * - - - -
- - - * * * - - -
- - * * * * * - -
- * * * * * * * -
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row <= col && row + col <= n * 2 || row + col >= n * 2 && row >= col)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p12",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "12. Hollow Hourglass Pattern",
    difficulty: "medium",
    topic: "Complex & Symmetric Patterns",
    description: "Print a hollow boundary hourglass pattern (condition: row === col || row + col === n*2 || row === 2*n-1 || row === 1).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `* * * * * * * * *
- * - - - - - * -
- - * - - - * - -
- - - * - * - - -
- - - - * - - - -
- - - * - * - - -
- - * - - - * - -
- * - - - - - * -
* * * * * * * * *`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 5;
        for (int row = 1; row <= n * 2 - 1; row++) {
            for (int col = 1; col <= n * 2 - 1; col++) {
                if (row == col || row + col == n * 2 || row == 2 * n - 1 || row == 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p13",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "13. Concentric Number Pyramid",
    difficulty: "hard",
    topic: "Complex & Symmetric Patterns",
    description: "Print a numeric matrix using absolute mathematical coordinate transformation (row/col offsets).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `1        
1 2      
1 2 3    
1 2 3 4  
1 2 3    
1 2      
1        `,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 4;
        int a;
        for (int row = (-n) + 1; row < n; row++) {
            a = row;
            if (a <= 0) a = -a;
            a = a - (n - 1);
            if (a < 0) a = -a;
            for (int col = (-n) + 1; col < n; col++) {
                int b = col;
                if (b <= 0) b = (-b);
                if (a >= b)
                    System.out.print(b + 1 + " ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
}`
    }
  },
  {
    id: "q_d3_p14",
    category: "pattern",
    day: "day3",
    dayLabel: "Day 3",
    title: "14. Diamond Number Grid",
    difficulty: "hard",
    topic: "Complex & Symmetric Patterns",
    description: "Print a diamond number grid centered around 0 using Manhattan coordinate distance math.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    sampleOutput: `- - - 0 - - -
- - 1 0 1 - -
- 2 1 0 1 2 -
3 2 1 0 1 2 3
- 2 1 0 1 2 -
- - 1 0 1 - -
- - - 0 - - -`,
    solutions: {
      java: `package com.study;

public class Pattern4 {
    public static void main(String[] args) {
        int n = 4;
        int a;
        for (int row = (-n) + 1; row < n; row++) {
            a = row;
            if (a <= 0) a = -a;
            for (int col = (-n) + 1; col < n; col++) {
                int b = col;
                if (b <= 0) b = -b;
                if (a + b <= n - 1)
                    System.out.print(b + " ");
                else
                    System.out.print("- ");
            }
            System.out.println();
        }
    }
}`
    }
  }
];

// State Management with LocalStorage
const STORAGE_KEY = "solved_coding_questions_v1";
let solvedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let activeCategory = "pattern"; // Default category
let activeModalQuestion = null;

// DOM References - Global Views
const homeView = document.getElementById("home-view");
const categoryView = document.getElementById("category-view");
const categoryCardsContainer = document.getElementById("category-cards-container");
const globalProgressStatsText = document.getElementById("global-progress-stats-text");
const globalProgressBarFill = document.getElementById("global-progress-bar-fill");
const btnBackHome = document.getElementById("btn-back-home");

// DOM References - Category View
const categoryPageTitle = document.getElementById("category-page-title");
const categoryPageDesc = document.getElementById("category-page-desc");
const categoryActiveBadge = document.getElementById("category-active-badge");
const daySelectFilter = document.getElementById("day-select-filter");
const searchInput = document.getElementById("search-input");
const questionListContainer = document.getElementById("question-list-container");
const progressStatsText = document.getElementById("progress-stats-text");
const progressBarFill = document.getElementById("progress-bar-fill");

// DOM References - Modal
const solutionModal = document.getElementById("solution-modal");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalDescription = document.getElementById("modal-description");
const modalTimeComplexity = document.getElementById("modal-time-complexity");
const modalSpaceComplexity = document.getElementById("modal-space-complexity");
const modalSampleOutput = document.getElementById("modal-sample-output");
const modalCodeDisplay = document.getElementById("modal-code-display");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Save state to LocalStorage
function saveSolvedState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(solvedSet)));
  updateProgressBars();
}

// Update Active Category Progress Bar
function updateProgressBars() {
  const categoryProblems = problemsData.filter(p => p.category === activeCategory);
  const totalCat = categoryProblems.length;
  const solvedCat = categoryProblems.filter(p => solvedSet.has(p.id)).length;
  const catPct = totalCat > 0 ? Math.round((solvedCat / totalCat) * 100) : 0;

  if (progressStatsText && progressBarFill) {
    progressStatsText.textContent = `${solvedCat} / ${totalCat} Solved (${catPct}%)`;
    progressBarFill.style.width = `${catPct}%`;
  }
}

// Render Home Dashboard Cards (Minimal & Sleek)
function renderHomeDashboard() {
  categoryCardsContainer.innerHTML = "";

  categoriesData.forEach(cat => {
    const catProblems = problemsData.filter(p => p.category === cat.id);
    const total = catProblems.length;

    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.id = cat.id;

    card.innerHTML = `
      <div class="category-card-main">
        <div class="category-icon">${cat.icon}</div>
        <h3 class="category-card-title">${cat.title}</h3>
      </div>
      <svg class="category-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
    `;

    card.addEventListener("click", () => openCategory(cat.id));
    categoryCardsContainer.appendChild(card);
  });
}

// Switch between Home View and Category View
function openCategory(catId) {
  activeCategory = catId;
  const catMeta = categoriesData.find(c => c.id === catId);

  if (catMeta) {
    categoryPageTitle.textContent = catMeta.pageTitle;
    categoryPageDesc.textContent = catMeta.description;
    categoryActiveBadge.textContent = catMeta.title;
  }

  homeView.classList.add("hidden");
  categoryView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Reset search and day filters
  searchInput.value = "";
  daySelectFilter.value = "day1";

  updateProgressBars();
  renderQuestions();
}

function showHome() {
  categoryView.classList.add("hidden");
  homeView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderHomeDashboard();
}

// Render Question Cards for Active Category
function renderQuestions() {
  const selectedDay = daySelectFilter.value;
  const searchQuery = searchInput.value.toLowerCase().trim();

  const filteredProblems = problemsData.filter(problem => {
    if (problem.category !== activeCategory) return false;
    const matchesDay = selectedDay === "all" || problem.day === selectedDay;
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery) ||
      problem.topic.toLowerCase().includes(searchQuery) ||
      problem.description.toLowerCase().includes(searchQuery);
    return matchesDay && matchesSearch;
  });

  questionListContainer.innerHTML = "";

  if (filteredProblems.length === 0) {
    questionListContainer.innerHTML = `
      <div class="empty-state">
        <p>No questions found matching your selection.</p>
      </div>
    `;
    return;
  }

  filteredProblems.forEach((problem, index) => {
    const isSolved = solvedSet.has(problem.id);
    const card = document.createElement("div");
    card.className = `question-card ${isSolved ? 'solved' : ''}`;
    card.dataset.id = problem.id;

    const cleanTitle = problem.title.replace(/^\d+\.\s*/, '');
    const displayTitle = `${index + 1}. ${cleanTitle}`;

    card.innerHTML = `
      <div class="card-left">
        <label class="checkbox-container" title="Mark as solved/unsolved">
          <input type="checkbox" ${isSolved ? 'checked' : ''} data-id="${problem.id}">
          <span class="checkmark"></span>
        </label>
        <div class="question-info">
          <div class="question-title-wrapper">
            <span class="question-title" data-id="${problem.id}" data-display-title="${displayTitle}">${displayTitle}</span>
          </div>
          <div class="meta-tags">
            <span class="badge badge-${problem.difficulty}">${problem.difficulty}</span>
            <span class="topic-tag">${problem.topic}</span>
            ${selectedDay === 'all' ? `<span class="day-indicator">${problem.dayLabel}</span>` : ''}
          </div>
        </div>
      </div>
      <button class="btn-solution" data-id="${problem.id}" data-display-title="${displayTitle}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <span>View Solution</span>
      </button>
    `;

    questionListContainer.appendChild(card);
  });

  attachEventListenersToCards();
}

// Attach listeners for dynamic question cards
function attachEventListenersToCards() {
  const checkboxes = questionListContainer.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(chk => {
    chk.addEventListener("change", (e) => {
      const qId = e.target.dataset.id;
      if (e.target.checked) {
        solvedSet.add(qId);
      } else {
        solvedSet.delete(qId);
      }
      saveSolvedState();
      renderQuestions();
    });
  });

  const solutionBtns = questionListContainer.querySelectorAll(".btn-solution");
  const titles = questionListContainer.querySelectorAll(".question-title");

  const openHandler = (element) => {
    const qId = element.dataset.id;
    const displayTitle = element.dataset.displayTitle;
    const problem = problemsData.find(p => p.id === qId);
    if (problem) openModal(problem, displayTitle);
  };

  solutionBtns.forEach(btn => btn.addEventListener("click", () => openHandler(btn)));
  titles.forEach(title => title.addEventListener("click", () => openHandler(title)));
}

// Modal Logic
function openModal(problem, customTitle) {
  activeModalQuestion = problem;
  const cleanTitle = problem.title.replace(/^\d+\.\s*/, '');
  modalTitle.textContent = customTitle || cleanTitle;
  modalDescription.textContent = problem.description;
  modalTimeComplexity.textContent = problem.timeComplexity;
  modalSpaceComplexity.textContent = problem.spaceComplexity;

  modalTags.innerHTML = `
    <span class="badge badge-${problem.difficulty}">${problem.difficulty}</span>
    <span class="topic-tag">${problem.topic}</span>
    <span class="day-indicator">${problem.dayLabel}</span>
  `;

  if (modalSampleOutput) {
    modalSampleOutput.textContent = problem.sampleOutput || "// Visual drawing not available";
  }
  modalCodeDisplay.textContent = problem.solutions.java || "// Java Solution not available";
  solutionModal.classList.add("active");
  solutionModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  solutionModal.classList.remove("active");
  solutionModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalQuestion = null;
}

// Global Event Listeners
btnBackHome.addEventListener("click", showHome);
modalCloseBtn.addEventListener("click", closeModal);
solutionModal.addEventListener("click", (e) => {
  if (e.target === solutionModal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && solutionModal.classList.contains("active")) closeModal();
});

daySelectFilter.addEventListener("change", renderQuestions);
searchInput.addEventListener("input", renderQuestions);

// Initial Launch -> Load Dashboard
renderHomeDashboard();
