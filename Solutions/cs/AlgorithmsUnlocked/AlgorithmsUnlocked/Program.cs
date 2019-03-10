using System;

namespace AlgorithmsUnlocked
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            var result = Euclid(21, 9);
            foreach (var item in result)
            {
                Console.WriteLine(item.ToString());
            }
        }
        public static int[] Euclid(int a, int b)
        {
            int[] result;
            if (b == 0)
            {
                result = new[] { a, 1, 0 };
            }
            else
            {
                var rec = Euclid(b, a % b);
                var g = rec[0];
                var i = rec[1];
                var j = rec[2] - (a / b) * rec[2];
                result = new[] { g, i, j };
            }
            return result;
        }
    }
}
